import React from 'react';
import { FiInstagram, FiFacebook } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export const Footer = () => {
    return (
        <footer className="bg-[var(--color-secondary)] text-[var(--color-text-main)] py-12">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Column 1: Brand */}
                <div className="flex flex-col gap-4">
                    <div className="relative h-16 w-48">
                        <img
                            src={`${import.meta.env.BASE_URL}images/logo-full.png`}
                            alt="PuraChata Logo"
                            className="object-contain object-left w-full h-full"
                        />
                    </div>
                    <p className="text-sm opacity-80 max-w-xs">
                        Conexión real, profunda y transformadora con la naturaleza en el corazón de la Amazonía.
                    </p>
                    <span className="text-sm font-bold mt-2">
                        © {new Date().getFullYear()} PuraChata. Derechos reservados.
                    </span>
                </div>

                {/* Column 2: Quick Links */}
                <div className="flex flex-col gap-2">
                    <h4 className="font-serif text-xl font-bold mb-2 text-[var(--color-primary)]">Enlaces Rápidos</h4>
                    <a href="/nosotros" className="hover:text-[var(--color-primary)] transition-colors">Nosotros</a>
                    <a href="/impacto-social" className="hover:text-[var(--color-primary)] transition-colors">Impacto Social</a>
                    <a href="/politicas" className="hover:text-[var(--color-primary)] transition-colors">Políticas</a>
                    <a href="/contacto" className="hover:text-[var(--color-primary)] transition-colors">Contáctanos</a>
                </div>

                {/* Column 3: Contact */}
                <div className="flex flex-col gap-4">
                    <h4 className="font-serif text-xl font-bold mb-2 text-[var(--color-primary)]">Contacto</h4>
                    <p className="text-sm">
                        Carretera Iquitos - Nauta Km. 41.700<br />
                        Iquitos, Perú
                    </p>
                    <div className="flex gap-4 mt-2">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-2xl hover:text-[var(--color-primary)]"><FiFacebook /></a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-2xl hover:text-[var(--color-primary)]"><FiInstagram /></a>
                        <a href="https://wa.me/51917057569" target="_blank" rel="noreferrer" className="text-2xl hover:text-[var(--color-primary)]"><FaWhatsapp /></a>
                    </div>
                </div>

            </div>
        </footer>
    );
};
