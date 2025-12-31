'use client';

import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FiWifi, FiWind, FiCoffee, FiStar, FiArrowRight } from "react-icons/fi";

export default function AlojamientoPage() {
    return (
        <div className="pt-24 pb-20">
            {/* Hero Section */}
            <div className="container mx-auto px-4 mb-16">
                <div className="relative h-[60vh] min-h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                        src="/images/alojamiento-consciente-v2.jpg"
                        alt="Alojamiento en Pura Chata Ecolodge"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-16">
                        <span className="text-[var(--color-secondary)] font-bold tracking-wider uppercase text-sm md:text-base mb-2">
                            Confort & Naturaleza
                        </span>
                        <h1 className="text-4xl md:text-6xl font-serif text-white font-bold leading-tight max-w-4xl shadow-sm">
                            Tu refugio en el corazón de la Amazonía
                        </h1>
                        <p className="text-gray-200 text-lg md:text-xl max-w-2xl mt-4 drop-shadow-md">
                            Descubre la armonía perfecta entre la comodidad moderna y la selva virgen.
                            Un espacio diseñado para descansar, reconectar y soñar despierto.
                        </p>
                    </div>
                </div>
            </div>

            {/* Intro Text SEO */}
            <Section container className="!pt-0">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <h2 className="text-3xl md:text-4xl font-serif text-[var(--color-primary)]">
                        Alojamiento Consciente y Sostenible
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        En <strong>Pura Chata Eco-Lodge</strong>, entendemos que el descanso es parte fundamental de la experiencia.
                        Nuestras instalaciones han sido construidas respetando el entorno, utilizando materiales locales
                        y técnicas tradicionales que garantizan frescura y ventilación natural.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Cada espacio está pensado para ofrecer vistas privilegiadas de la selva, permitiéndote despertar
                        con el canto de las aves y dormir bajo un manto de estrellas, todo ello sin renunciar al confort
                        esencial para una estancia placentera e inolvidable.
                    </p>
                </div>
            </Section>

            {/* Bungalows Independientes */}
            <Section container className="bg-[var(--color-background-soft)] rounded-3xl my-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1 relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src="/images/home-bungalow-sunset.jpg"
                            alt="Bungalows Privados Pura Chata"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="order-1 lg:order-2 space-y-6">
                        <h3 className="text-3xl font-serif text-[var(--color-primary)]">Bungalows Independientes</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Nuestros bungalows privados son la joya de Pura Chata. Diseñados para brindar total privacidad,
                            están dispersos estratégicamente en nuestra finca de 14 hectáreas para garantizar una inmersión total en la naturaleza.
                        </p>
                        <ul className="space-y-3 pt-2">
                            <li className="flex items-center gap-3 text-gray-700 font-medium">
                                <span className="p-2 bg-white rounded-full text-[var(--color-primary)] shadow-sm"><FiStar /></span>
                                Baño privado con ducha
                            </li>
                            <li className="flex items-center gap-3 text-gray-700 font-medium">
                                <span className="p-2 bg-white rounded-full text-[var(--color-primary)] shadow-sm"><FiWind /></span>
                                Ventilación natural y mosquiteros
                            </li>
                            <li className="flex items-center gap-3 text-gray-700 font-medium">
                                <span className="p-2 bg-white rounded-full text-[var(--color-primary)] shadow-sm"><FiArrowRight /></span>
                                Terraza privada con hamaca
                            </li>
                        </ul>
                    </div>
                </div>
            </Section>

            {/* Habitaciones */}
            <Section container>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-3xl font-serif text-[var(--color-primary)]">Habitaciones Confort</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Para aquellos que prefieren una estancia más clásica, nuestras habitaciones en el lodge principal
                            ofrecen comodidad y cercanía a las áreas comunes. Perfectas para descansar después de un día de aventura,
                            con una decoración acogedora inspirada en la artesanía local.
                        </p>
                        <ul className="space-y-3 pt-2">
                            <li className="flex items-center gap-3 text-gray-700 font-medium">
                                <span className="p-2 bg-[var(--color-background-soft)] rounded-full text-[var(--color-primary)]"><FiWifi /></span>
                                Conexión Wi-Fi (en áreas comunes)
                            </li>
                            <li className="flex items-center gap-3 text-gray-700 font-medium">
                                <span className="p-2 bg-[var(--color-background-soft)] rounded-full text-[var(--color-primary)]"><FiStar /></span>
                                Ropa de cama de alta calidad
                            </li>
                        </ul>
                    </div>
                    <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src="/images/alojamiento-consciente-v2.jpg"
                            alt="Habitación Confort Pura Chata"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </Section>

            {/* Exteriores & Relax */}
            <Section container className="bg-[var(--color-background-soft)] rounded-3xl my-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1 relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src="/images/experiencia-estadia-swing.jpg"
                            alt="Exteriores y hamacas Pura Chata"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="order-1 lg:order-2 space-y-6">
                        <h3 className="text-3xl font-serif text-[var(--color-primary)]">Exteriores y Relax</h3>
                        <p className="text-gray-700 leading-relaxed">
                            La experiencia Pura Chata se vive también fuera de la habitación. Contamos con amplias zonas verdes,
                            malocas de descanso y senderos que te invitan a caminar descalzo sobre la tierra.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nuestra <strong>piscina natural</strong> y las zonas de hamacas frente a la laguna son los lugares
                            predilectos para leer un libro, meditar o simplemente contemplar el atardecer amazónico.
                        </p>
                    </div>
                </div>
            </Section>

            {/* Restaurante & Bar */}
            <Section container>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-3xl font-serif text-[var(--color-primary)]">Restaurante & Bar</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Sabores que cuentan historias. Nuestro restaurante ofrece una fusión de gastronomía local e internacional,
                            utilizando ingredientes frescos de nuestra propia chacra y de productores locales vecinos.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            En el bar, disfruta de cócteles exóticos preparados con frutas de la región como el camu camu y el copoazú,
                            mientras compartes anécdotas con otros viajeros.
                        </p>
                        <ul className="space-y-3 pt-2">
                            <li className="flex items-center gap-3 text-gray-700 font-medium">
                                <span className="p-2 bg-[var(--color-background-soft)] rounded-full text-[var(--color-primary)]"><FiCoffee /></span>
                                Desayuno amazónico incluido
                            </li>
                            <li className="flex items-center gap-3 text-gray-700 font-medium">
                                <span className="p-2 bg-[var(--color-background-soft)] rounded-full text-[var(--color-primary)]"><FiStar /></span>
                                Opciones vegetarianas y veganas
                            </li>
                        </ul>
                    </div>
                    <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl bg-gray-200">
                        <Image
                            src="/images/restaurante-gastronomia.jpg"
                            alt="Gastronomía Fresca y Local"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </Section>

            {/* CTA BOOKING */}
            <Section container className="my-16">
                <div className="bg-[var(--color-primary)] rounded-3xl p-12 md:p-20 text-center text-white shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/images/logo-icon-white.png')] bg-repeat space-x-12"></div>
                    <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold">
                            ¿Listo para vivir la magia de la selva?
                        </h2>
                        <p className="text-xl md:text-2xl text-green-100 font-medium">
                            Reserva tu estadía en Pura Chata Eco-Lodge y asegura tu lugar en el paraíso.
                        </p>
                        <div className="pt-4">
                            <Button
                                size="lg"
                                className="bg-white text-[var(--color-primary)] hover:bg-gray-100 font-bold text-lg px-12 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                                onClick={() => window.open('https://purachatalodge.aloha.co/cottages?request-type=embed', '_blank')}
                            >
                                Reserva tu Estadía Ahora
                            </Button>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
