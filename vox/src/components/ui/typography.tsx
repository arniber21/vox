import { cn } from '@/utilities/ui';
import * as React from 'react';

export type HeadingProps = {
    level: 1 | 2 | 3 | 4 | 5 | 6;
    className?: string;
} & React.HTMLAttributes<HTMLHeadingElement>;

export const Heading: React.FC<HeadingProps> = ({ level, className, children, ...props }) => {
    const Tag = (`h${level}`) as React.ElementType;
    const baseClasses = 'font-heading scroll-m-20';
    const sizeClasses = {
        1: 'text-4xl lg:text-5xl font-bold',
        2: 'text-3xl lg:text-4xl font-semibold',
        3: 'text-2xl lg:text-3xl font-medium',
        4: 'text-xl lg:text-2xl font-medium',
        5: 'text-lg lg:text-xl font-medium',
        6: 'text-base lg:text-lg font-medium',
    }[level];
    return React.createElement(
        Tag,
        { className: cn(baseClasses, sizeClasses, className), ...props },
        children,
    );
};

export type ParagraphProps = {
    className?: string;
} & React.HTMLAttributes<HTMLParagraphElement>;

export const Paragraph: React.FC<ParagraphProps> = ({ className, children, ...props }) => (
    <p className={cn('leading-7 [&:not(:first-child)]:mt-6', className)} {...props}>
        {children}
    </p>
);

export type LinkProps = {
    href: string;
    className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link: React.FC<LinkProps> = ({ href, className, children, ...props }) => (
    <a href={href} className={cn('font-medium underline underline-offset-4', className)} {...props}>
        {children}
    </a>
);

export { cn };
