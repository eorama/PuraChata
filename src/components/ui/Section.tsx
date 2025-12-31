import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    container?: boolean;
}

export const Section = ({ className, container = true, children, ...props }: SectionProps) => {
    return (
        <section
            className={cn("py-16 md:py-24", className)}
            {...props}
        >
            {container ? (
                <div className="container mx-auto px-4 md:px-6">
                    {children}
                </div>
            ) : (
                children
            )}
        </section>
    );
};
