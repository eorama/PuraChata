'use client';

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { FiArrowRight } from "react-icons/fi";
import { HeroSlider } from "@/components/home/HeroSlider";

export default function Home() {
  return (
    <div className="flex flex-col">

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] w-full flex items-center">
        <div className="absolute inset-0 z-0">
          <HeroSlider />
        </div>

        <div className="container mx-auto px-4 z-10 text-white pt-20">
          <div className="max-w-4xl animate-fade-in-up text-center md:text-left">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 drop-shadow-2xl text-white">
              Pura Chata: Su Ecolodge Amazonía Peruana para una Conexión Profunda
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-medium max-w-2xl drop-shadow-xl text-gray-100">
              Vive una experiencia íntima, segura y transformadora en el corazón de la selva.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                size="lg"
                onClick={() => window.open('https://wa.me/51917057569', '_blank')}
                className="bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 text-white border-none shadow-xl transform hover:scale-105 transition-all"
              >
                Reserva Ahora
              </Button>
              <Link href="/experiencias">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[var(--color-primary)] w-full sm:w-auto shadow-xl">
                  Descubre Nuestras Experiencias
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro SEO Optimized Section */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="text-[var(--color-accent)] font-bold tracking-wider uppercase text-sm block">
            Bienvenido a Pura Chata
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[var(--color-primary)] leading-tight">
            Sumérgete en la profundidad de la selva amazónica
          </h2>
          <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed text-justify">
            <p>
              Ubicado a tan solo una hora de Iquitos, en la región de Loreto, <strong>Pura Chata Ecolodge Amazonía Peruana</strong> ha sido creado con dedicación, sensibilidad y respeto hacia la naturaleza y las personas. Somos un espacio donde la sostenibilidad, el bienestar y la belleza natural se entrelazan con un propósito claro: ofrecerte un refugio auténtico lejos del ruido cotidiano.
            </p>
            <p>
              En nuestro <strong>Ecolodge Amazonía Peruana</strong>, cada rincón invita a la introspección, al descanso y a la conexión con lo esencial. Aquí, los árboles medicinales, el canto de las aves, el agua que fluye y el silencio que sana son los protagonistas de tu estancia. No somos solo un hotel; somos una experiencia de vida.
            </p>
          </div>
        </div>
      </Section>

      {/* Sostenibilidad & Agroecología (Detailed Text) */}
      <Section className="bg-[var(--color-background-soft)]">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/home-bungalow-sunset.jpg"
              alt="Bungalows Pura Chata Ecolodge"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-serif text-[var(--color-primary)]">Compromiso con la Tierra y la Vida</h3>
            <div className="prose text-gray-700 leading-relaxed text-justify">
              <p>
                Somos una explotación agroecológica comprometida con el cuidado del entorno. En las instalaciones de nuestro <strong>Ecolodge Amazonía Peruana</strong>, cultivamos nuestros propios alimentos utilizando compost natural y técnicas ancestrales que respetan el ciclo de la tierra.
              </p>
              <p>
                Promovemos activamente la reforestación con una amplia variedad de especies nativas y ornamentales, fomentando la biodiversidad como fuente de vida, medicina y equilibrio. Al hospedarte con nosotros, no solo disfrutas de la selva, sino que contribuyes directamente a su preservación.
              </p>
              <p>
                Nuestra finca privada de 14 hectáreas de bosque virgen es un santuario donde la vida silvestre florece protegida, ofreciendo avistamientos únicos de flora y fauna en su hábitat natural.
              </p>
            </div>
            <Link href="/impacto-social">
              <Button variant="secondary" className="mt-4">
                Conoce Nuestro Impacto
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Bienestar & Saberes (Detailed Text) */}
      <Section className="bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto md:flex-row-reverse">
          <div className="order-2 md:order-1 space-y-6">
            <h3 className="text-3xl font-serif text-[var(--color-primary)]">Saberes Ancestrales y Comunidad</h3>
            <div className="prose text-gray-700 leading-relaxed text-justify">
              <p>
                Creemos profundamente en una selva que educa y transforma. Por eso, en Pura Chata colaboramos estrechamente con las comunidades locales. En nuestra pequeña tienda de productos amazónicos, compartimos <strong>saberes ancestrales</strong> y elaboraciones naturales que nacen del bosque.
              </p>
              <p>
                Cada producto refleja una forma de vida respetuosa, consciente y conectada con la tierra. Además, nuestro compromiso social se extiende a las escuelas rurales cercanas, donde donamos materiales, brindamos apoyo docente y facilitamos talleres de educación ambiental para sembrar las semillas de un futuro sostenible.
              </p>
              <p>
                Este <strong>Ecolodge Amazonía Peruana</strong> es un símbolo de unión y empoderamiento femenino, liderado por mujeres que buscan contribuir al desarrollo económico sostenible de la población local.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/home-agroecology.jpg"
              alt="Naturaleza en Ecolodge Amazonía Peruana"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Highlights / Experiencias Preview */}
      <Section className="bg-[var(--color-background-soft)]">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-6 text-[var(--color-primary)] font-serif">Experiencias Inolvidables</h2>
          <p className="text-gray-600 text-lg">
            Más que un viaje, Pura Chata es un espacio cuidado con amor donde la conexión con la naturaleza impulsa procesos de sanación y reencuentro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1: Alojamiento */}
          <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
            <div className="relative h-64 overflow-hidden">
              <Image
                src="/images/alojamiento-consciente-v2.jpg"
                alt="Alojamiento Ecolodge Amazonía Peruana"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3 text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors">Alojamiento Consciente</h3>
              <p className="text-gray-600 mb-6">
                Bungalows diseñados para escuchar el sonido de la selva y descansar en armonía con el entorno.
              </p>
              <Link href="/alojamiento" className="text-[var(--color-primary)] font-bold flex items-center gap-2 hover:translate-x-2 transition-transform">
                Ver Instalaciones <FiArrowRight />
              </Link>
            </div>
          </div>

          {/* Card 2: Tours */}
          <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
            <div className="relative h-64 overflow-hidden">
              <Image
                src="/images/tours-y-aventura-v2.jpg"
                alt="Tours Delfines Amazonía"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3 text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors">Tours y Aventura</h3>
              <p className="text-gray-600 mb-6">
                Explora el río Amazonas, avista delfines rosados y camina por bosques de arena blanca.
              </p>
              <Link href="/experiencias" className="text-[var(--color-primary)] font-bold flex items-center gap-2 hover:translate-x-2 transition-transform">
                Ver Itinerarios <FiArrowRight />
              </Link>
            </div>
          </div>

          {/* Card 3: Voluntariado */}
          <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
            <div className="relative h-64 overflow-hidden">
              <Image
                src="/images/voluntariado-v2.jpg"
                alt="Voluntariado Selva Perú"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3 text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors">Voluntariado</h3>
              <p className="text-gray-600 mb-6">
                Únete a nuestro equipo y aporta tu energía para construir un mundo más sostenible.
              </p>
              <Link href="/voluntariado" className="text-[var(--color-primary)] font-bold flex items-center gap-2 hover:translate-x-2 transition-transform">
                Postular Ahora <FiArrowRight />
              </Link>
            </div>
          </div>

        </div>
      </Section>

      {/* SEO Footer Text Section */}
      <Section className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-serif text-[var(--color-primary)]">Tu Refugio en la Amazonía</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Pura Chata es un lugar para quienes buscan más que un viaje. Es un espacio cuidado con amor, donde la conexión con la naturaleza impulsa procesos de sanación, silencio, creatividad y reencuentro. Un lugar donde todo invita a respirar, sentir y reconectar.
          </p>
          <p className="text-[var(--color-primary)] font-bold text-xl pt-4">
            Te esperamos. La selva también.
          </p>
        </div>
      </Section>

    </div>
  );
}
