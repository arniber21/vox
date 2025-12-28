import { cn } from '@/utilities/ui';
import * as React from 'react';

export type BadgeProps = {
    variant?: 'default' | 'success' | 'warning' | 'error' | 'outline';
    className?: string;
} & React.HTMLAttributes<HTMLSpanElement>;

const variantClasses = {
    default: 'bg-primary text-primary-foreground',
    success: 'bg-success text-success-foreground',
    warning: 'bg-warning text-warning-foreground',
    error: 'bg-destructive text-destructive-foreground',
    outline: 'border border-border bg-background text-foreground',
};

const Badge: React.FC<BadgeProps> = ({ variant = 'default', className, ...props }) => {
    const classes = cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        variantClasses[variant],
        className,
    );
    return <span className={classes} {...props} />;
};

export { Badge };
