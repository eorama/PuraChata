import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { FiGlobe, FiAlertCircle } from "react-icons/fi";

export default function EnglishNoticePage() {
    return (
        <div className="min-h-[70vh] flex flex-col justify-center pt-24">
            <Section container>
                <div className="max-w-2xl mx-auto text-center space-y-8 p-8 md:p-12 bg-[var(--color-background-soft)] rounded-3xl border border-gray-100 shadow-lg">
                    <div className="flex justify-center mb-6">
                        <div className="bg-blue-100 p-4 rounded-full text-blue-600 text-4xl">
                            <FiGlobe />
                        </div>
                    </div>

                    <h1 className="text-3xl md:text-4xl font-serif text-[var(--color-primary)]">
                        English Version Coming Soon
                    </h1>

                    <div className="space-y-4 text-gray-700 text-lg">
                        <p className="font-medium">
                            This is a test environment.
                        </p>
                        <p>
                            The English version of the website will be fully available once deployed to its final destination domain.
                        </p>
                        <hr className="border-gray-200 my-6" />
                        <p className="italic text-gray-500 text-base">
                            Este es un entorno de pruebas. La versión en inglés estará disponible una vez que el sitio sea desplegado en su dominio final.
                        </p>
                    </div>

                    <div className="pt-4">
                        <Link href="/">
                            <Button>
                                Return to Home / Volver al Inicio
                            </Button>
                        </Link>
                    </div>
                </div>
            </Section>
        </div>
    );
}
