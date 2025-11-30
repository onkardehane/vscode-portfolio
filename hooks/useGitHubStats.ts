import { useState, useEffect } from 'react';

interface GitHubStats {
    stars: number;
    repos: number;
    followers: number;
    loading: boolean;
    error: string | null;
}

export const useGitHubStats = (username: string) => {
    const [stats, setStats] = useState<GitHubStats>({
        stars: 0,
        repos: 0,
        followers: 0,
        loading: true,
        error: null,
    });

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const userRes = await fetch(`https://api.github.com/users/${username}`);
                if (!userRes.ok) throw new Error('Failed to fetch user data');
                const userData = await userRes.json();

                const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
                if (!reposRes.ok) throw new Error('Failed to fetch repos data');
                const reposData = await reposRes.json();

                const stars = reposData.reduce((acc: number, repo: any) => acc + repo.stargazers_count, 0);

                setStats({
                    stars,
                    repos: userData.public_repos,
                    followers: userData.followers,
                    loading: false,
                    error: null,
                });
            } catch (err) {
                setStats(prev => ({ ...prev, loading: false, error: (err as Error).message }));
            }
        };

        fetchStats();
    }, [username]);

    return stats;
};
