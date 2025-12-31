import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { FiCompass } from 'react-icons/fi';

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex flex-col justify-center pt-24 text-center">
            <Section container>
                <div className="max-w-2xl mx-auto space-y-8">
                    <div className="flex justify-center">
                        <div className="bg-[var(--color-secondary)]/30 p-6 rounded-full text-[var(--color-primary)] text-6xl animate-pulse">
                            <FiCompass />
                        </div>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-serif text-[var(--color-primary)] font-bold">
                        404
                    </h1>

                    <h2 className="text-2xl md:text-3xl font-serif text-gray-800">
                        Página no encontrada
                    </h2>

                    <p className="text-xl text-gray-600 max-w-lg mx-auto">
                        Parece que te has perdido en la selva. La página que buscas no existe o ha sido movida.
                    </p>

                    <div className="pt-8">
                        <Link href="/">
                            <Button size="lg" className="shadow-xl">
                                Volver al Sendero (Inicio)
                            </Button>
                        </Link>
                    </div>
                </div>
            </Section>
        </div>
    );
}
