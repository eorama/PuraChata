'use client';

import Image from "next/image";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function VoluntariadoPage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/social-reforestation.png"
                        alt="Voluntariado en Pura Chata"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/70" />
                </div>
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg !text-white">
                        Programa de Voluntariado
                    </h1>
                    <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto drop-shadow-md !text-white">
                        ¿Te gustaría vivir una experiencia auténtica en plena selva, rodeada de naturaleza y cultura local?
                    </p>
                </div>
            </section>

            <Section container>
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-start mt-12">
                        <div className="prose text-gray-700">
                            <h3 className="text-2xl text-[var(--color-primary)] font-bold mb-4">¿En qué consiste?</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Gestión de reservas</li>
                                <li>Apoyo en atención al cliente</li>
                                <li>Organización de información interna</li>
                                <li>Asistencia básica en redes o correo</li>
                            </ul>

                            <h3 className="text-2xl text-[var(--color-primary)] font-bold mt-8 mb-4">Requisitos</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Buena organización</li>
                                <li>Iniciativa y responsabilidad</li>
                                <li>Ganas de aprender y colaborar</li>
                                <li>No es necesario tener estudios formales</li>
                            </ul>
                        </div>

                        <div className="bg-[var(--color-background-soft)] p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl text-[var(--color-primary)] font-bold mb-4">Condiciones & Beneficios</h3>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-start gap-3">
                                    <span className="text-xl">📅</span>
                                    <div>
                                        <strong>Estancia mínima:</strong> 2 meses
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-xl">⏰</span>
                                    <div>
                                        <strong>Jornada:</strong> 6 horas/día, 5 días/semana
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-xl">🌴</span>
                                    <div>
                                        2 días libres para descansar o explorar
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-xl">💧</span>
                                    <div>
                                        <strong>Incluye:</strong> Alojamiento y alimentación
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-xl">💸</span>
                                    <div>
                                        <strong>Aporte:</strong> 15 soles diarios (gastos logísticos)
                                    </div>
                                </div>
                            </div>

                            <div className="text-center">
                                <p className="text-sm text-gray-500 mt-6 italic">
                                    &quot;La selva te espera para vivir una experiencia transformadora.&quot;
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Formulario de Postulación */}
                    <div className="mt-20 max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100" id="postular">
                        <h2 className="text-3xl font-serif text-center mb-2 text-[var(--color-primary)]">Postula al Voluntariado</h2>
                        <p className="text-center text-gray-600 mb-8">Completa el formulario y nos pondremos en contacto contigo.</p>

                        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Gracias por tu postulación. Te contactaremos pronto.'); }}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700">Nombre Completo</label>
                                    <input type="text" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] outline-none transition-all" placeholder="Tu nombre" required />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700">Email</label>
                                    <input type="email" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] outline-none transition-all" placeholder="tucorreo@ejemplo.com" required />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700">Teléfono / WhatsApp</label>
                                    <input type="tel" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] outline-none transition-all" placeholder="+51 ..." required />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700">País de Residencia</label>
                                    <input type="text" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] outline-none transition-all" placeholder="Ej: España, Perú..." required />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700">¿Por qué quieres ser voluntario?</label>
                                <textarea className="w-full p-3 border border-gray-200 rounded-lg h-32 focus:ring-2 focus:ring-[var(--color-primary)] outline-none transition-all" placeholder="Cuéntanos brevemente sobre ti y tu motivación..." required></textarea>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700">Fechas tentativas</label>
                                <input type="text" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] outline-none transition-all" placeholder="Ej: Enero - Marzo 2025" required />
                            </div>

                            <Button fullWidth size="lg" type="submit">
                                Enviar Postulación
                            </Button>
                        </form>
                    </div>
                </div>
            </Section>
        </div>
    );
}
