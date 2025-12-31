'use client';

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

export default function ContactoPage() {
    return (
        <div className="pt-24">
            <Section className="bg-[var(--color-background-soft)]">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl mb-4 font-serif text-[var(--color-primary)]">Contáctanos</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">Estamos aquí para ayudarte a planificar tu viaje a la selva.</p>
                </div>
            </Section>

            <Section container>
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">

                        {/* Info */}
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-[var(--color-secondary)] p-3 rounded-full text-[var(--color-primary)] text-2xl">
                                    <FiPhone />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Teléfono / WhatsApp</h3>
                                    <p className="text-gray-600">(+51) 917 057 569</p>
                                    <p className="text-gray-600">(+51) 927 063 947</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-[var(--color-secondary)] p-3 rounded-full text-[var(--color-primary)] text-2xl">
                                    <FiMail />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Email</h3>
                                    <p className="text-gray-600">reservaspurachata@gmail.com</p>
                                    <p className="text-gray-600">reservas@purachata.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-[var(--color-secondary)] p-3 rounded-full text-[var(--color-primary)] text-2xl">
                                    <FiMapPin />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Ubicación</h3>
                                    <p className="text-gray-600">
                                        Carretera Iquitos - Nauta Km. 41.700<br />
                                        Centro Poblado Ex Petroleros<br />
                                        Loreto, Perú
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <h3 className="text-2xl font-serif text-[var(--color-primary)] mb-6">Envíanos un Mensaje</h3>
                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all"
                                        placeholder="Tu nombre"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all"
                                        placeholder="tucorreo@ejemplo.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Teléfono / WhatsApp</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all"
                                        placeholder="+51 999 999 999"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all resize-none"
                                        placeholder="Cuéntanos sobre tu viaje..."
                                    ></textarea>
                                </div>
                                <Button className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 text-white">
                                    Enviar Mensaje
                                </Button>
                            </form>
                        </div>

                    </div>

                    {/* Detailed Location Description context */}
                    <div className="mt-24 grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-serif text-[var(--color-primary)]">¿Dónde estamos?</h2>
                            <div className="prose text-gray-700 space-y-4 text-justify">
                                <p>
                                    Estamos ubicados en el <strong>km 42 de la carretera Iquitos-Nauta</strong> en el Centro Poblado Ex Petroleros,
                                    a 45 min de la ciudad de Iquitos, a 30 min de la ciudad de Nauta y a tan solo 20 min del río Amazonas.
                                    A nuestros laterales están los caseríos de San Lucas y 2 de mayo con quienes venimos trabajando con proyectos
                                    de ayuda comunitaria a nivel educativo y de sanidad. Durante el trayecto podrás observar diversos paisajes
                                    con mucha naturaleza y distintos pueblitos asentados a los márgenes.
                                </p>
                                <p>
                                    Nuestro Ecolodge está ubicado en una finca privada de 14 hectáreas de bosque virgen, rodeado de árboles medicinales,
                                    aves exóticas, diferentes familias de monos, mariposas, lagunas, donde criamos peces nativos y un pequeño río que cruza el terreno.
                                    <strong>Aquí, la conexión con la tierra es real, profunda y transformadora.</strong>
                                </p>
                                <p>
                                    Gracias a nuestro gran número de gallinas, disfrutamos de huevos saludables, y además, varias familias de patos enriquecen el ambiente.
                                    Cultivamos productos alimenticios esenciales en la cocina amazónica, lo que nos permite ser autosuficientes y mantener una conexión profunda con la naturaleza.
                                </p>
                                <p>
                                    Nuestras cabañas están ubicadas estratégicamente para que puedas admirar los encantadores escenarios y puedas llevar en tu mente
                                    uno de los mejores recuerdos durante tu estancia en nuestro alojamiento.
                                </p>
                            </div>
                            <div className="pt-4">
                                <Button
                                    onClick={() => window.open('https://wa.me/51917057569', '_blank')}
                                    className="bg-[var(--color-primary)] text-white shadow-xl hover:scale-105 transition-transform"
                                >
                                    Reserva Ahora
                                </Button>
                            </div>
                        </div>

                        {/* Map Column */}
                        <div className="h-full min-h-[500px] w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4896.802705721463!2d-73.4540032!3d-4.096729400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ea79001fd5c5a5%3A0xb5457d569ff77abe!2sPuraChata%20Ecolodge!5e1!3m2!1ses!2ses!4v1767178996122!5m2!1ses!2ses"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                title="Mapa de Ubicación Pura Chata"
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </div>

                    <div className="text-center mt-6">
                        <a
                            href="https://maps.app.goo.gl/ftKKJLmpbjMTK1EX8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-[var(--color-primary)] font-bold hover:underline"
                        >
                            <FiMapPin /> Ver en Google Maps
                        </a>
                    </div>
                </div>
            </Section>
        </div>
    );
}
