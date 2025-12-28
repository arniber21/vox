import { cn } from '@/utilities/ui';
import * as React from 'react';

export type GridProps = {
    className?: string;
    children?: React.ReactNode;
    columns?: number; // number of columns on large screens
    gap?: string; // Tailwind gap class e.g., 'gap-4'
} & React.HTMLAttributes<HTMLDivElement>;

export const Grid: React.FC<GridProps> = ({ className, children, columns = 12, gap = 'gap-4', ...props }) => {
    const colsClass = `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-${columns}`;
    return (
        <div className={cn(colsClass, gap, className)} {...props}>
            {children}
        </div>
    );
};


