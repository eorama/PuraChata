'use client';

import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FiClock, FiMapPin, FiCheckCircle } from "react-icons/fi";

export default function ExperienciasPage() {
    return (
        <div className="pt-24">
            <Section container>
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl mb-6">Nuestras Experiencias</h1>
                    <p className="text-xl text-gray-600">
                        Descubre la magia de la Amazonía con itinerarios diseñados para conectar profundamente con la naturaleza y la cultura local.
                    </p>
                </div>

                <div className="flex flex-col gap-24">

                    {/* Experience 1: Yarapa */}
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="lg:w-1/2 relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
                            <Link href="/experiencias/yarapa" className="block relative h-full w-full">
                                <Image
                                    src="/images/card-dolphin.png"
                                    alt="Delfines Rosados en Yarapa"
                                    fill
                                    className="object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </Link>
                        </div>
                        <div className="lg:w-1/2 space-y-6">
                            <div className="flex items-center gap-2 text-[var(--color-primary)] font-bold uppercase text-sm tracking-wider">
                                <FiMapPin /> Río Yarapa & Amazonas
                            </div>
                            <Link href="/experiencias/yarapa">
                                <h2 className="text-3xl md:text-4xl font-serif text-[var(--color-primary)] hover:underline decoration-2 underline-offset-4">
                                    Full Day Yarapa: Santuario de Biodiversidad
                                </h2>
                            </Link>
                            <p className="text-gray-700 leading-relaxed">
                                Navega por el corazón de la selva en una aventura única. Este santuario es el hogar de los místicos delfines rosados y grises.
                                Disfruta de la conexión pura con ríos milenarios y fauna exótica.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2 text-sm text-gray-700">
                                        <FiCheckCircle className="text-[var(--color-primary)] mt-1" /> Avistamiento de delfines rosados
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-700">
                                        <FiCheckCircle className="text-[var(--color-primary)] mt-1" /> Navegación ríos Marañón y Ucayali
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-700">
                                        <FiCheckCircle className="text-[var(--color-primary)] mt-1" /> Pesca de pirañas (opcional)
                                    </li>
                                </ul>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2 text-sm text-gray-700">
                                        <FiCheckCircle className="text-[var(--color-primary)] mt-1" /> Caminata de flora y fauna
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-700">
                                        <FiCheckCircle className="text-[var(--color-primary)] mt-1" /> Almuerzo amazónico incluido
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-700">
                                        <FiClock className="text-[var(--color-primary)] mt-1" /> 8:00 AM - 6:30 PM
                                    </li>
                                </ul>
                            </div>

                            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                                <div>
                                    <span className="block text-xs text-gray-500 uppercase">Precio Adultos</span>
                                    <span className="text-2xl font-bold text-[var(--color-primary)]">$150</span>
                                </div>
                                <div className="flex gap-3 flex-wrap">
                                    <Link href="/experiencias/yarapa">
                                        <Button variant="secondary">
                                            Ver Itinerario
                                        </Button>
                                    </Link>
                                    <Button onClick={() => window.open('https://wa.me/51917057569?text=Hola,%20quisiera%20reservar%20el%20Full%20Day%20Yarapa', '_blank')}>
                                        Reservar
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Experience 2: Allpahuayo */}
                    <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
                        <div className="lg:w-1/2 relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
                            <Link href="/experiencias/allpahuayo" className="block relative h-full w-full">
                                <Image
                                    src="/images/experiencia-allpahuayo.jpg"
                                    alt="Bosques de Arena Blanca"
                                    fill
                                    className="object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </Link>
                        </div>
                        <div className="lg:w-1/2 space-y-6">
                            <div className="flex items-center gap-2 text-[var(--color-primary)] font-bold uppercase text-sm tracking-wider">
                                <FiMapPin /> Reserva Nacional Allpahuayo Mishana
                            </div>
                            <Link href="/experiencias/allpahuayo">
                                <h2 className="text-3xl md:text-4xl font-serif text-[var(--color-primary)] hover:underline decoration-2 underline-offset-4">
                                    Full Day Allpahuayo & CREA
                                </h2>
                            </Link>
                            <p className="text-gray-700 leading-relaxed">
                                Explora los raros bosques de arena blanca (varillales) y conoce la &quot;Ruta de la biodiversidad&quot;.
                                Culmina el día visitando el Centro de Rescate Amazónico (CREA) para apoyar la conservación del manatí.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2 text-sm text-gray-700">
                                        <FiCheckCircle className="text-[var(--color-primary)] mt-1" /> Caminata en bosques varillales
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-700">
                                        <FiCheckCircle className="text-[var(--color-primary)] mt-1" /> Vista de aves endémicas
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-700">
                                        <FiCheckCircle className="text-[var(--color-primary)] mt-1" /> Visita al CREA (Manatíes)
                                    </li>
                                </ul>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2 text-sm text-gray-700">
                                        <FiCheckCircle className="text-[var(--color-primary)] mt-1" /> Conocer plantas medicinales
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-700">
                                        <FiCheckCircle className="text-[var(--color-primary)] mt-1" /> Transporte y entradas incluidas
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-700">
                                        <FiClock className="text-[var(--color-primary)] mt-1" /> 7:30 AM - Retorno tarde
                                    </li>
                                </ul>
                            </div>

                            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                                <div>
                                    <span className="block text-xs text-gray-500 uppercase">Precio Adultos</span>
                                    <span className="text-2xl font-bold text-[var(--color-primary)]">S/. 308</span>
                                </div>
                                <div className="flex gap-3 flex-wrap">
                                    <Link href="/experiencias/allpahuayo">
                                        <Button variant="secondary">
                                            Ver Itinerario
                                        </Button>
                                    </Link>
                                    <Button onClick={() => window.open('https://wa.me/51917057569?text=Hola,%20quisiera%20reservar%20el%20Full%20Day%20Allpahuayo', '_blank')}>
                                        Reservar
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Experience 3: Estadia */}
                    <div className="flex flex-col lg:flex-row gap-12 items-center bg-[var(--color-background-soft)] p-8 md:p-12 rounded-3xl">
                        <div className="lg:w-1/2 relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/experiencia-estadia-swing.jpg"
                                alt="Bungalows PuraChata"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="lg:w-1/2 space-y-6">
                            <div className="flex items-center gap-2 text-[var(--color-primary)] font-bold uppercase text-sm tracking-wider">
                                <FiMapPin /> PuraChata Ecolodge
                            </div>
                            <h2 className="text-3xl md:text-4xl font-serif text-[var(--color-primary)]">Programas de Estadía</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Desconéctate del mundo y conecta contigo mismo. Nuestros paquetes de 3 días / 2 noches combinan el confort de nuestros bungalows
                                con la inmersión total en las 14 hectáreas de bosque virgen de nuestra finca.
                            </p>

                            <ul className="space-y-3">
                                <li className="flex items-start gap-2 text-sm text-gray-700">
                                    <FiCheckCircle className="text-[var(--color-primary)] mt-1" /> Alojamiento en bungalows ecológicos
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-700">
                                    <FiCheckCircle className="text-[var(--color-primary)] mt-1" /> Acceso a piscina y áreas comunes
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-700">
                                    <FiCheckCircle className="text-[var(--color-primary)] mt-1" /> Gastronomía local (Desayuno, Almuerzo, Cena)
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-700">
                                    <FiCheckCircle className="text-[var(--color-primary)] mt-1" /> Caminatas nocturnas y avistamiento en la finca
                                </li>
                            </ul>

                            <div className="pt-4">
                                <Button variant="secondary" onClick={() => window.open('https://wa.me/51917057569?text=Hola,%20quisiera%20informacion%20sobre%20estadia', '_blank')}>
                                    Consultar Paquetes
                                </Button>
                            </div>
                        </div>
                    </div>

                </div>
            </Section>
        </div>
    );
}
