import { ReactNode } from 'react';

export interface File {
    id: string;
    name: string;
    type: 'file' | 'folder';
    content?: ReactNode | string;
    language?: string;
    isOpen?: boolean;
    children?: File[];
    icon?: string;
}
