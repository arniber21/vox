import { cn } from '@/utilities/ui';
import * as React from 'react';

type AlertProps = {
    variant?: 'default' | 'info' | 'warning' | 'error' | 'success';
    className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const variantClasses: Record<NonNullable<AlertProps['variant']>, string> = {
    default: 'bg-card text-card-foreground border border-border',
    info: 'bg-primary text-primary-foreground border border-primary',
    success: 'bg-success text-success-foreground border border-success',
    warning: 'bg-warning text-warning-foreground border border-warning',
    error: 'bg-destructive text-destructive-foreground border border-destructive',
};

const Alert: React.FC<AlertProps> = ({ variant = 'default', className, ...props }) => {
    const classes = cn(
        'rounded-md p-4',
        variantClasses[variant],
        className,
    );
    return <div role="alert" className={classes} {...props} />;
};

export { Alert };
