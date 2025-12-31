'use client';

import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FiMapPin, FiCheckCircle, FiXCircle, FiUsers, FiArrowLeft, FiSun, FiDroplet, FiCamera, FiHeart, FiGlobe } from "react-icons/fi";
import { GalleryCarousel } from "@/components/ui/GalleryCarousel";

export default function AllpahuayoPage() {
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
                        src="/images/experiencia-allpahuayo.jpg"
                        alt="Reserva Allpahuayo Mishana Bosque Varillal"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 md:p-16">
                        <span className="text-[var(--color-accent)] font-bold tracking-wider uppercase text-sm md:text-base mb-2">
                            Full Day
                        </span>
                        <h1 className="text-4xl md:text-6xl font-serif text-white font-bold leading-tight max-w-4xl">
                            Allpahuayo & CREA: Biodiversidad Única
                        </h1>
                        <p className="text-gray-200 text-lg md:text-xl max-w-2xl mt-4">
                            Explora los raros bosques de arena blanca y apoya la conservación del manatí amazónico en un solo día.
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <Section container className="!py-0">
                <div className="grid lg:grid-cols-3 gap-12">

                    {/* Main Content (Left, 2 cols) */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Intro / CREA Info */}
                        <div>
                            <h2 className="text-3xl font-serif text-[var(--color-primary)] mb-6 flex items-center gap-3">
                                <FiHeart className="text-[var(--color-accent)]" /> Centro de Rescate Amazónico (CREA)
                            </h2>
                            <div className="prose prose-lg text-gray-700 leading-relaxed text-justify">
                                <p>
                                    El <strong>Centro de Rescate Amazónico (CREA)</strong>, surgió en 2007 cuando inició esfuerzos por rehabilitar a un gran número de manatíes que quedaron huérfanos por la caza furtiva y la degradación de su hábitat. El manatí es una especie en situación vulnerable según la Unión Internacional para la Conservación de la Naturaleza (UICN).
                                </p>
                                <p>
                                    Progresivamente el centro empezó a albergar otras especies víctimas del tráfico de animales, la caza ilegal e incluso de personas que los tenían como mascotas, ellos se encargan de albergarlos hasta que se rehabiliten por completo y se encuentren listos para ser devueltos a sus hábitat natural.
                                </p>
                                <p>
                                    En la actualidad es uno de los lugares turísticos de Loreto que más animales ha logrado recuperar con el correr de los años. El CREA trabaja mucho con programas de educación ambiental y la promoción diaria del turismo responsable, en protección y defensa del ecosistema amazónico.
                                </p>
                            </div>
                        </div>

                        {/* Allpahuayo Info */}
                        <div>
                            <h2 className="text-3xl font-serif text-[var(--color-primary)] mb-6 flex items-center gap-3">
                                <FiGlobe className="text-green-600" /> Reserva Nacional Allpahuayo Mishana
                            </h2>
                            <div className="prose prose-lg text-gray-700 leading-relaxed text-justify">
                                <p>
                                    La <strong>Reserva Nacional Allpahuayo Mishana</strong> se caracteriza principalmente por proteger una muestra representativa de los raros <strong>bosques de arena blanca (varillales)</strong> y los bosques inundables por las aguas negras del río Nanay. Presenta dos tipos de hábitat notables: los varillales y los bosques inundables.
                                </p>
                                <p>
                                    Es un paraíso natural cerca de Iquitos que también alberga especies endémicas como la <em>perlita de Iquitos</em> y el <em>mono tocón de Aquino</em>. En este lugar, podrás explorar paisajes asombrosos a través de la famosa <strong>"Ruta de la biodiversidad"</strong>.
                                </p>
                            </div>
                        </div>

                        {/* Itinerary */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                            <h3 className="text-2xl font-serif text-[var(--color-primary)] mb-8">Programa del Día</h3>

                            <div className="relative border-l-2 border-[var(--color-primary)]/30 ml-3 space-y-10">
                                {/* Item */}
                                <div className="relative pl-8">
                                    <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--color-primary)] border-4 border-white shadow-sm"></span>
                                    <h4 className="font-bold text-gray-900 text-lg">7:00 AM - Desayuno</h4>
                                    <p className="text-gray-600">Nos reunimos en la zona comedor del hotel Purachata para desayunar. Al finalizar, inmediatamente nos preparamos para la aventura.</p>
                                </div>
                                {/* Item */}
                                <div className="relative pl-8">
                                    <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--color-primary)] border-4 border-white shadow-sm"></span>
                                    <h4 className="font-bold text-gray-900 text-lg">7:30 AM - Salida</h4>
                                    <p className="text-gray-600">Salida desde el Pura Chata Ecolodge en nuestra movilidad privada (mototaxi) hacia el km. 28 de la carretera Iquitos – Nauta.</p>
                                </div>
                                {/* Item */}
                                <div className="relative pl-8">
                                    <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--color-primary)] border-4 border-white shadow-sm"></span>
                                    <h4 className="font-bold text-gray-900 text-lg">Caminata en Reserva Allpahuayo</h4>
                                    <p className="text-gray-600 mb-2">Llegada al puesto de control Irapay. Charla breve del guardaparques.</p>
                                    <p className="text-gray-700 italic border-l-4 border-green-200 pl-4 py-2 bg-green-50 rounded-r-lg">
                                        Caminata exploratoria de 2 horas. Disfruta de vistas panorámicas, avistamiento de posibles monos, aves endémicas y el mítico "supaychacra" (jardín del Chullachaqui).
                                    </p>
                                </div>
                                {/* Item */}
                                <div className="relative pl-8">
                                    <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--color-primary)] border-4 border-white shadow-sm"></span>
                                    <h4 className="font-bold text-gray-900 text-lg">Visita al CREA (Manatíes)</h4>
                                    <p className="text-gray-600 mb-2">Traslado al km. 14. Breve explicación y recorrido.</p>
                                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                                        <li>Conoce al manatí y por qué está en peligro.</li>
                                        <li>Observa otras especies rescatadas (monos, perezosos, paiche).</li>
                                        <li>Recorrido por "El bosque de huayo" (plantas medicinales, abejas meliponas).</li>
                                    </ul>
                                </div>
                                {/* Item */}
                                <div className="relative pl-8">
                                    <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--color-primary)] border-4 border-white shadow-sm"></span>
                                    <h4 className="font-bold text-gray-900 text-lg">Retorno y Relax</h4>
                                    <p className="text-gray-600">Retorno al hotel en mototaxi para degustar un almuerzo exquisito, disfrutar de las instalaciones y darse un baño relajante en la piscina.</p>
                                </div>
                            </div>
                        </div>

                        {/* Includes / Excludes & Gear */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-[var(--color-background-soft)] p-6 rounded-2xl">
                                <h3 className="font-bold text-lg text-[var(--color-primary)] mb-4 flex items-center gap-2">
                                    <FiCheckCircle /> Incluye
                                </h3>
                                <ul className="space-y-2 text-gray-700 text-sm">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Movilidad ida y vuelta</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Pago de Guía</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Entradas a los centros</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Almuerzo al retorno</li>
                                </ul>
                            </div>

                            <div className="bg-[var(--color-secondary)]/30 p-6 rounded-2xl">
                                <h3 className="font-bold text-lg text-[var(--color-primary)] mb-4 flex items-center gap-2">
                                    🎒 ¿Qué llevar?
                                </h3>
                                <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                                    <span className="flex items-center gap-2"><FiSun /> Gorra</span>
                                    <span className="flex items-center gap-2"><FiSun /> Gafas de sol</span>
                                    <span className="flex items-center gap-2"><FiDroplet /> Chubasquero</span>
                                    <span className="flex items-center gap-2"><FiCheckCircle /> Crema solar</span>
                                    <span className="flex items-center gap-2"><FiCheckCircle /> Antimosquitos</span>
                                    <span className="flex items-center gap-2">💧 Cantimplora</span>
                                    <span className="flex items-center gap-2">🍌 Snacks</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Sidebar Sticky (Right) */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24">
                            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Reserva tu Cupo</h3>

                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg border border-gray-100">
                                        <div className="flex flex-col">
                                            <span className="text-gray-700 font-bold">Adultos</span>
                                            <span className="text-xs text-gray-500">Mínimo 2 personas</span>
                                        </div>
                                        <span className="text-[var(--color-primary)] font-bold text-xl">S/. 308</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg border border-gray-100">
                                        <span className="text-gray-600 font-medium">Niños (5-10 años)</span>
                                        <span className="font-bold text-lg">S/. 160</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg border border-gray-100">
                                        <span className="text-gray-600 font-medium">Niños (1-4 años)</span>
                                        <span className="font-bold text-lg">S/. 80</span>
                                    </div>
                                </div>

                                <Button
                                    fullWidth
                                    size="lg"
                                    onClick={() => window.open('https://wa.me/51917057569?text=Hola,%20me%20interesa%20el%20Full%20Day%20Allpahuayo%20y%20CREA', '_blank')}
                                    className="bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 shadow-lg mb-4"
                                >
                                    Reservar Tour
                                </Button>
                                <p className="text-xs text-gray-500 text-center mx-auto max-w-[200px]">
                                    *Precios expresados en Soles Peruanos. Sujeto a disponibilidad.
                                </p>
                            </div>

                            {/* Location Map Placeholder or Info */}
                            <div className="mt-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                <h4 className="font-bold text-[var(--color-primary)] mb-3 flex items-center gap-2">
                                    <FiMapPin /> Ubicación
                                </h4>
                                <p className="text-sm text-gray-600 mb-4">
                                    Carretera Iquitos - Nauta.
                                </p>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between text-gray-600">
                                        <span>Reserva Allpahuayo:</span>
                                        <span className="font-medium">Km 28</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>Centro CREA:</span>
                                        <span className="font-medium">Km 14</span>
                                    </div>
                                </div>
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
