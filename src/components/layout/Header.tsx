import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/Button';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { FlagPE, FlagUS } from '@/components/ui/icons/Flags';

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface HeaderProps {
    currentPath?: string;
}

export const Header = ({ currentPath = '' }: HeaderProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const [language, setLanguage] = useState<'es' | 'en'>('es');
    const [isLangOpen, setIsLangOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Close dropdown when clicking outside
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsLangOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const base = import.meta.env.BASE_URL;

    const navLinks = [
        { name: 'Inicio', href: base },
        { name: 'Nosotros', href: `${base}nosotros` },
        { name: 'Alojamiento', href: `${base}alojamiento` },
        { name: 'Experiencias', href: `${base}experiencias` },
        { name: 'Impacto Social', href: `${base}impacto-social` },
        { name: 'Voluntariado', href: `${base}voluntariado` },
        { name: 'Contacto', href: `${base}contacto` },
    ];

    const toggleLanguage = (lang: 'es' | 'en') => {
        setLanguage(lang);
        setIsLangOpen(false);
    };

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                'bg-white/80 backdrop-blur-md shadow-sm py-2'
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <a href={base} className="flex items-center gap-2">
                    <div className="relative h-20 w-56">
                        <img
                            src={`${base}images/logo-full.png`}
                            alt="PuraChata Logo"
                            className="object-contain object-left w-full h-full"
                        />
                    </div>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={cn(
                                'text-base font-medium transition-colors hover:text-[var(--color-primary)]',
                                currentPath === link.href || (link.href !== '/' && currentPath.startsWith(link.href))
                                    ? 'text-[var(--color-primary)] font-bold'
                                    : 'text-gray-900'
                            )}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Actions (Lang + CTA) */}
                <div className="hidden md:flex items-center gap-4">
                    {/* Language Selector */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-[var(--color-primary)] transition-colors px-2 py-1 rounded-md hover:bg-gray-50"
                            onClick={() => setIsLangOpen(!isLangOpen)}
                        >
                            {language === 'es' ? (
                                <>
                                    <div className="w-6 h-4 relative shadow-sm rounded-sm overflow-hidden">
                                        <FlagPE className="w-full h-full object-cover" />
                                    </div>
                                    <span>Español</span>
                                </>
                            ) : (
                                <>
                                    <div className="w-6 h-4 relative shadow-sm rounded-sm overflow-hidden">
                                        <FlagUS className="w-full h-full object-cover" />
                                    </div>
                                    <span>English</span>
                                </>
                            )}
                            <FiChevronDown className={cn("transition-transform duration-200", isLangOpen ? "rotate-180" : "")} />
                        </button>

                        {isLangOpen && (
                            <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-lg shadow-xl border border-gray-100 py-1 flex flex-col animate-in fade-in slide-in-from-top-2 duration-200">
                                <button
                                    className={cn(
                                        "flex items-center gap-3 px-4 py-2 hover:bg-gray-50 text-sm w-full text-left transition-colors",
                                        language === 'es' ? "bg-gray-50 text-[var(--color-primary)] font-medium" : "text-gray-700"
                                    )}
                                    onClick={() => toggleLanguage('es')}
                                >
                                    <div className="w-6 h-4 relative shadow-sm rounded-sm overflow-hidden flex-shrink-0">
                                        <FlagPE className="w-full h-full" />
                                    </div>
                                    <span>Español</span>
                                </button>
                                <a
                                    href="/english-notice"
                                    className={cn(
                                        "flex items-center gap-3 px-4 py-2 hover:bg-gray-50 text-sm w-full text-left transition-colors text-gray-700"
                                    )}
                                    onClick={() => setIsLangOpen(false)}
                                >
                                    <div className="w-6 h-4 relative shadow-sm rounded-sm overflow-hidden flex-shrink-0">
                                        <FlagUS className="w-full h-full" />
                                    </div>
                                    <span>English</span>
                                </a>
                            </div>
                        )}
                    </div>

                    <Button
                        variant="primary"
                        size="sm"
                        onClick={() => window.open('https://wa.me/51917057569', '_blank')}
                    >
                        Reservar Ahora
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-2xl text-[var(--color-primary)]"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-6 flex flex-col gap-4 border-t border-gray-100 h-screen">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-lg font-medium text-gray-800 hover:text-[var(--color-primary)]"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}

                    <div className="border-t border-gray-100 pt-4 mt-2">
                        <p className="text-sm text-gray-500 font-medium mb-3">Idioma / Language</p>
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                onClick={() => { setLanguage('es'); setIsOpen(false); }}
                                className={cn(
                                    "flex items-center justify-center gap-2 px-3 py-2 rounded-lg border text-sm transition-all",
                                    language === 'es' ? "border-[var(--color-primary)] bg-green-50 text-[var(--color-primary)] font-medium ring-1 ring-[var(--color-primary)]" : "border-gray-200 hover:border-gray-300"
                                )}
                            >
                                <div className="w-5 h-3.5 relative shadow-sm rounded-sm overflow-hidden flex-shrink-0">
                                    <FlagPE className="w-full h-full" />
                                </div>
                                <span>Español</span>
                            </button>
                            <a
                                href="/english-notice"
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                    "flex items-center justify-center gap-2 px-3 py-2 rounded-lg border text-sm transition-all border-gray-200 hover:border-gray-300"
                                )}
                            >
                                <div className="w-5 h-3.5 relative shadow-sm rounded-sm overflow-hidden flex-shrink-0">
                                    <FlagUS className="w-full h-full" />
                                </div>
                                <span>English</span>
                            </a>
                        </div>
                    </div>

                    <Button
                        variant="primary"
                        fullWidth
                        onClick={() => {
                            window.open('https://wa.me/51917057569', '_blank');
                            setIsOpen(false);
                        }}
                    >
                        Reservar Ahora
                    </Button>
                </div>
            )}
        </header>
    );
};
