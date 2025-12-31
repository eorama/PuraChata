import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function NosotrosPage() {
    return (
        <div className="pt-24">
            <Section container>
                <div className="max-w-4xl mx-auto space-y-12">

                    {/* Header */}
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl mb-6">Nuestra Historia</h1>
                        <p className="text-xl text-gray-600 font-light">
                            La unión de dos mundos, la fusión de dos culturas y la creación de un sueño.
                        </p>
                    </div>

                    {/* History Content */}
                    <div className="prose prose-lg mx-auto text-gray-700">
                        <p>
                            Así nació <strong>PURA CHATA</strong>, fruto de la amistad y la visión compartida de dos mujeres emprendedoras.
                        </p>
                        <p>
                            <strong>Marta</strong>, de nacionalidad española, llegó a Iquitos en busca de una conexión profunda con la naturaleza,
                            un encuentro consigo misma y con la verdadera esencia de la vida. Impulsada por la necesidad de aprender sobre la
                            medicina ancestral y los conocimientos tradicionales de la Amazonía, vio cómo su sueño de crear un espacio que
                            honrara esta riqueza natural y cultural se hacía realidad.
                        </p>
                        <p>
                            <strong>Valerie</strong>, una iquiteña perseverante y llena de aspiraciones, admiradora de la riqueza de la biodiversidad
                            que posee su tierra. Consciente de aquello que debe ser contemplado por muchas más personas, sin alterar la armonía
                            entre el hombre y el medio ambiente.
                        </p>
                        <p>
                            Ambas coincidieron de manera casual y se conectaron de manera inmediata, compartiendo historias, sueños y pasiones.
                            De aquella fortuita charla nació la idea del proyecto PuraChata.
                        </p>

                        {/* Founders Image */}
                        <div className="relative h-[400px] md:h-[500px] w-full my-12 rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/nosotros-equipo.jpg"
                                alt="Marta y Valerie - Fundadoras de Pura Chata"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                                <p className="font-serif italic text-lg text-center">&quot;Dos mujeres, dos culturas, un solo corazón latiendo por la selva.&quot;</p>
                            </div>
                        </div>

                        <p>
                            Juntas, hemos superado desafíos logísticos y culturales para levantar este refugio desde cero. Lo que comenzó como un sueño lejano, hoy es una realidad tangible que ofrece trabajo digno a familias locales y contribuye activamente a preservar un pedazo vital de la Amazonía. Pura Chata no es solo un negocio; es nuestra ofrenda a la selva y a cada viajero que busca sanar en ella.
                        </p>

                        <p>
                            Nos inspira la fuerza de la mujer amazónica y la resiliencia de la naturaleza misma. Cada bungalow construido, cada sendero trazado y cada plato servido lleva impreso el cariño y la dedicación de un equipo que cree firmemente en un turismo diferente: humano, cercano, consciente y liderado con el corazón.
                        </p>

                        <blockquote className="border-l-4 border-[var(--color-primary)] pl-4 italic text-xl my-8 text-[var(--color-primary)]">
                            &quot;Nuestra empresa busca romper barreras y estereotipos, demostrando que las mujeres podemos liderar e innovar en muchos campos.&quot;
                        </blockquote>
                    </div>

                    {/* Mission & Vision */}
                    <div className="grid md:grid-cols-2 gap-8 mt-16 bg-[var(--color-secondary)] p-8 rounded-2xl">
                        <div>
                            <h3 className="text-2xl font-bold mb-4 text-[var(--color-primary)]">Misión</h3>
                            <p>
                                En Pura Chata Eco-Lodge estamos enfocados en ofrecer un excelente servicio de alojamiento y experiencias auténticas
                                que permitan conectar a nuestros huéspedes con la naturaleza y la cultura local sin renunciar al confort, mientras
                                contribuimos con el desarrollo sostenible a través de buenas prácticas ambientales.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-4 text-[var(--color-primary)]">Visión</h3>
                            <p>
                                Ser el destino ecoturístico más destacado de la región, reconocidos por ofrecer un excelente servicio en nuestros
                                confortables alojamientos y por brindar experiencias auténticas en la Amazonía peruana.
                            </p>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <Link href="/contacto">
                            <Button>Contáctanos</Button>
                        </Link>
                    </div>

                </div>
            </Section>
        </div>
    );
}
