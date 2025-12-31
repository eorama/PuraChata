import React from 'react';
import { twMerge } from 'tailwind-merge';
import { clsx, type ClassValue } from 'clsx';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', fullWidth, ...props }, ref) => {
        const baseStyles = 'inline-flex items-center justify-center rounded-md font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer';

        const variants = {
            primary: 'bg-[var(--color-primary)] text-white hover:bg-opacity-90',
            secondary: 'bg-[var(--color-secondary)] text-[var(--color-primary)] hover:bg-opacity-80',
            outline: 'border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white',
            ghost: 'hover:bg-accent hover:text-accent-foreground text-[var(--color-primary)]',
        };

        const sizes = {
            sm: 'h-9 px-4 text-sm',
            md: 'h-11 px-8 text-base',
            lg: 'h-14 px-10 text-lg',
        };

        return (
            <button
                ref={ref}
                className={cn(
                    baseStyles,
                    variants[variant],
                    sizes[size],
                    fullWidth && 'w-full',
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = 'Button';
