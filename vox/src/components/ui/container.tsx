import { cn } from '@/utilities/ui';
import * as React from 'react';

export type ContainerProps = {
    className?: string;
    children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export const Container: React.FC<ContainerProps> = ({ className, children, ...props }) => (
    <div
        className={cn('mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8', className)}
        {...props}
    >
        {children}
    </div>
);


