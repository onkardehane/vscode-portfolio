import React from 'react';
import { useGitHubStats } from '../../hooks/useGitHubStats';
import { useTheme } from '../../context/ThemeContext';
import { Star, GitBranch, Users, Loader2, AlertCircle } from 'lucide-react';

export default function GitHubStatsFile() {
    const { stars, repos, followers, loading, error } = useGitHubStats('onkardehane');
    const { colors } = useTheme();

    if (loading) {
        return (
            <div className="flex items-center gap-2 p-4" style={{ color: colors.text }}>
                <Loader2 className="animate-spin" size={20} />
                <span>Fetching GitHub data...</span>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center gap-2 p-4 text-red-400">
                <AlertCircle size={20} />
                <span>Error: {error}</span>
            </div>
        );
    }

    return (
        <div className="p-6 max-w-2xl">
            <h1 className="text-2xl font-bold mb-6" style={{ color: colors.accent }}>
                GitHub Statistics
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div
                    className="p-4 rounded-lg border"
                    style={{ background: colors.activity, borderColor: colors.border }}
                >
                    <div className="flex items-center gap-2 mb-2" style={{ color: colors.textDim }}>
                        <Star size={18} />
                        <span>Total Stars</span>
                    </div>
                    <div className="text-2xl font-bold" style={{ color: colors.text }}>
                        {stars}
                    </div>
                </div>

                <div
                    className="p-4 rounded-lg border"
                    style={{ background: colors.activity, borderColor: colors.border }}
                >
                    <div className="flex items-center gap-2 mb-2" style={{ color: colors.textDim }}>
                        <GitBranch size={18} />
                        <span>Public Repos</span>
                    </div>
                    <div className="text-2xl font-bold" style={{ color: colors.text }}>
                        {repos}
                    </div>
                </div>

                <div
                    className="p-4 rounded-lg border"
                    style={{ background: colors.activity, borderColor: colors.border }}
                >
                    <div className="flex items-center gap-2 mb-2" style={{ color: colors.textDim }}>
                        <Users size={18} />
                        <span>Followers</span>
                    </div>
                    <div className="text-2xl font-bold" style={{ color: colors.text }}>
                        {followers}
                    </div>
                </div>
            </div>

            <div style={{ color: colors.text }}>
                <h2 className="text-xl font-bold mb-4" style={{ color: colors.accent }}>
                    Live Data Integration
                </h2>
                <p className="mb-4">
                    This page fetches real-time data from the GitHub API using a custom React hook.
                    The data above represents my actual GitHub profile statistics.
                </p>
                <pre
                    className="p-4 rounded overflow-auto text-sm"
                    style={{ background: colors.activity, color: colors.text }}
                >
                    {`const { stars, repos, followers } = useGitHubStats('onkardehane');

// Result:
{
  "stars": ${stars},
  "repos": ${repos},
  "followers": ${followers}
}`}
                </pre>
            </div>
        </div>
    );
}
