'use client';

import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FiClock, FiMapPin, FiCheckCircle, FiXCircle, FiCalendar, FiUsers, FiArrowLeft, FiSun, FiDroplet, FiCamera } from "react-icons/fi";
import { GalleryCarousel } from "@/components/ui/GalleryCarousel";

export default function YarapaPage() {
    return (
        <div className="pt-24 pb-20">
            {/* Breadcrumb / Back */}
            <div className="container mx-auto px-4 mb-8">
                <Link href="/experiencias" className="inline-flex items-center gap-2 text-gray-500 hover:text-[var(--color-primary)] transition-colors">
                    <FiArrowLeft /> Volver a Experiencias
                </Link>
            </div>

            {/* Hero Section */}
            <div className="container mx-auto px-4 mb-16">
                <div className="relative h-[50vh] min-h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                        src="/images/card-dolphin.png"
                        alt="Yarapa Delfines Rosados"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 md:p-16">
                        <span className="text-[var(--color-accent)] font-bold tracking-wider uppercase text-sm md:text-base mb-2">
                            Full Day
                        </span>
                        <h1 className="text-4xl md:text-6xl font-serif text-white font-bold leading-tight max-w-4xl">
                            Yarapa: un santuario en el corazón del Amazonas
                        </h1>
                    </div>
                </div>
            </div>

            {/* Introduction Content */}
            <Section container className="!py-0">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content (Left, 2 cols) */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="prose prose-lg text-gray-700 leading-relaxed">
                            <p>
                                Ubicada a orillas del majestuoso río Amazonas, la zona de Yarapa es un verdadero santuario de biodiversidad y belleza natural.
                                Rodeada de selva virgen, esta región ofrece un escenario único para conectar con la naturaleza en su estado más puro:
                                exuberante vegetación, lagunas misteriosas, aves exóticas, delfines rosados y comunidades locales que aún preservan sus tradiciones ancestrales.
                            </p>
                            <p className="italic font-serif text-xl pl-6 border-l-4 border-[var(--color-primary)] text-gray-600 my-8">
                                "La lista es casi infinita. En la selva sobran las palabras. Todo es cristalino, el tiempo se detiene entre el vacío y la plenitud, inalterable.
                                Extensión, fascinación y espíritu. El placer de lo simple, la belleza más amplia. Una pausa para los sentidos."
                            </p>
                            <p>
                                Yarapa es el destino ideal para quienes buscan una experiencia auténtica, profunda y transformadora en el pulmón verde del planeta.
                            </p>

                            <h3 className="text-2xl font-serif text-[var(--color-primary)] mt-12 mb-4 flex items-center gap-2">
                                <span className="text-2xl">🌿</span> Una experiencia que conecta con la naturaleza <span className="text-2xl">🌱</span>
                            </h3>
                            <p>
                                Desde el mágico avistamiento de delfines rosados hasta caminatas entre paisajes que parecen salidos de un sueño,
                                este recorrido te invita a una conexión profunda con la Amazonía. Perfecto para espíritus aventureros,
                                amantes de la naturaleza y para quienes desean escapar de la rutina en un entorno verdaderamente incomparable.
                            </p>
                            <p className="font-bold text-[var(--color-primary)]">
                                ¡Reserva tu lugar hoy mismo y déjate llevar por la magia de Yarapa!
                            </p>
                        </div>

                        {/* Itinerary */}
                        <div className="mt-16 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                            <h2 className="text-3xl font-serif text-[var(--color-primary)] mb-2">Itinerario del Tour</h2>
                            <p className="text-gray-500 mb-8 uppercase tracking-wide text-sm font-bold">Naturaleza, Cultura y Aventura</p>

                            <div className="relative border-l-2 border-[var(--color-primary)]/30 ml-3 space-y-12">
                                {/* Item */}
                                <div className="relative pl-8">
                                    <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--color-primary)] border-4 border-white shadow-sm"></span>
                                    <h4 className="font-bold text-gray-900 text-lg">8:00 AM</h4>
                                    <p className="text-gray-600">Recogida en hotel Purachata.</p>
                                </div>
                                {/* Item */}
                                <div className="relative pl-8">
                                    <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--color-primary)] border-4 border-white shadow-sm"></span>
                                    <h4 className="font-bold text-gray-900 text-lg">8:15 AM</h4>
                                    <p className="text-gray-600">Traslado en vehículo privado a Nauta (1h 30 min).</p>
                                </div>
                                {/* Item */}
                                <div className="relative pl-8">
                                    <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--color-primary)] border-4 border-white shadow-sm"></span>
                                    <h4 className="font-bold text-gray-900 text-lg">9:45 AM - Navegación & Actividades</h4>
                                    <p className="text-gray-600 mb-4">Navegación en bote por el río Ucayali hacia el río Yarapa.</p>
                                    <div className="bg-[var(--color-background-soft)] p-4 rounded-lg">
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-2">
                                                <span className="text-xl">🐬</span> <span>Avistamiento de delfines rosados y grises.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-xl">🌳</span> <span>Recorrido en bote por los ríos Marañón, Ucayali y Amazonas (monos, iguanas, aves, perezosos...).</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-xl">🎣</span> <span>Pesca de pirañas (opcional).</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-xl">🏊</span> <span>Nado en el río Amazonas.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-xl">🍽️</span> <span>Almuerzo amazónico tradicional <strong>(incluido)</strong>.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Item */}
                                <div className="relative pl-8">
                                    <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--color-primary)] border-4 border-white shadow-sm"></span>
                                    <h4 className="font-bold text-gray-900 text-lg">3:30 PM</h4>
                                    <p className="text-gray-600">Regreso en bote a Nauta.</p>
                                </div>
                                {/* Item */}
                                <div className="relative pl-8">
                                    <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--color-primary)] border-4 border-white shadow-sm"></span>
                                    <h4 className="font-bold text-gray-900 text-lg">5:00 PM</h4>
                                    <p className="text-gray-600">Traslado en vehículo a Iquitos.</p>
                                </div>
                                {/* Item */}
                                <div className="relative pl-8">
                                    <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--color-primary)] border-4 border-white shadow-sm"></span>
                                    <h4 className="font-bold text-gray-900 text-lg">6:30 – 7:00 PM</h4>
                                    <p className="text-gray-600">Llegada al hotel Purachata.</p>
                                </div>
                            </div>
                        </div>

                        {/* Practical Info (2 cols) */}
                        <div className="grid md:grid-cols-2 gap-8 mt-12">
                            {/* Incluye */}
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                <h3 className="font-bold text-xl text-[var(--color-primary)] mb-4 flex items-center gap-2">
                                    <FiCheckCircle /> Incluye
                                </h3>
                                <ul className="space-y-2 text-gray-700 text-sm">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Transporte terrestre y fluvial</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Guía naturalista local</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Almuerzo típico + agua potable</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Entrada a la reserva</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Equipo de pesca, chalecos y prismáticos</li>
                                </ul>
                            </div>
                            {/* No Incluye */}
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                <h3 className="font-bold text-xl text-red-500 mb-4 flex items-center gap-2">
                                    <FiXCircle /> No Incluye
                                </h3>
                                <ul className="space-y-2 text-gray-700 text-sm">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-400" /> Recuerdos</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-400" /> Bebidas alcohólicas</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-400" /> Propinas y gastos personales</li>
                                </ul>
                            </div>
                        </div>

                        {/* What to bring */}
                        <div className="bg-[var(--color-secondary)]/30 p-8 rounded-2xl mt-8">
                            <h3 className="font-bold text-xl text-[var(--color-primary)] mb-6 flex items-center gap-2">
                                🎒 ¿Qué necesito llevar?
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <ul className="space-y-3 text-gray-700 text-sm">
                                    <li className="flex items-center gap-2"><FiSun /> Gorra, sombrero y gafas de sol</li>
                                    <li className="flex items-center gap-2"><FiCheckCircle /> Protector solar & Repelente eco</li>
                                    <li className="flex items-center gap-2"><FiDroplet /> Chubasquero o poncho (impermeable)</li>
                                </ul>
                                <ul className="space-y-3 text-gray-700 text-sm">
                                    <li className="flex items-center gap-2"><span className="text-lg">💧</span> Cantimplora con agua</li>
                                    <li className="flex items-center gap-2"><span className="text-lg">🍌</span> Aperitivos o snacks ligeros</li>
                                    <li className="flex items-center gap-2"><FiCamera /> Cámara, binoculares (opcional)</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar / Sticky (Right) */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-8">
                            {/* Booking Card */}
                            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Reserva tu Aventura</h3>

                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                                        <span className="text-gray-600 font-medium">Adultos (18+)</span>
                                        <span className="text-[var(--color-primary)] font-bold text-xl">$150</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                                        <span className="text-gray-600 font-medium">Niños (6-17)</span>
                                        <span className="font-bold text-lg">$130</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                                        <span className="text-gray-600 font-medium">Niños (3-5)</span>
                                        <span className="font-bold text-lg">$70</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                                        <span className="text-gray-600 font-medium">Infantes (0-2)</span>
                                        <span className="text-green-600 font-bold">Gratis</span>
                                    </div>
                                </div>

                                <div className="bg-[var(--color-secondary)]/50 p-4 rounded-xl mb-6 text-center">
                                    <p className="text-sm font-bold text-[var(--color-primary)]">
                                        <FiUsers className="inline mr-1" /> Descuento Grupal
                                    </p>
                                    <p className="text-xs text-gray-600 mt-1">
                                        4 personas o más aplica descuento especial.
                                    </p>
                                </div>

                                <Button
                                    fullWidth
                                    size="lg"
                                    onClick={() => window.open('https://wa.me/51917057569?text=Hola,%20me%20interesa%20el%20Full%20Day%20Yarapa', '_blank')}
                                    className="bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 shadow-lg hover:shadow-xl transform transition-all hover:-translate-y-1"
                                >
                                    Reservar por WhatsApp
                                </Button>

                                <p className="text-xs text-gray-400 text-center mt-4">
                                    Reserva directa y segura con Pura Chata.
                                </p>
                            </div>

                            {/* Additional Info Widget */}
                            <div className="bg-[var(--color-background-soft)] p-6 rounded-2xl">
                                <h4 className="font-bold text-[var(--color-primary)] mb-2 flex items-center gap-2">
                                    <FiUsers /> Para familias
                                </h4>
                                <p className="text-sm text-gray-600">
                                    Este tour es apto para todas las edades. Contamos con chalecos de todas las tallas y guías especializados en atención a grupos familiares.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Gallery Section */}
            <GalleryCarousel />
        </div>
    );
}
