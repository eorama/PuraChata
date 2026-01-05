'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiImage } from 'react-icons/fi';

interface GalleryImage {
    src: string;
    alt: string;
}

interface GalleryCarouselProps {
    title?: string;
    subtitle?: string;
    images?: GalleryImage[];
}

export const GalleryCarousel = ({
    title = "Galería de Momentos",
    subtitle = "Instantes capturados en esta experiencia.",
    images = []
}: GalleryCarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const hasImages = images.length > 0;
    const items = hasImages ? images : [1, 2, 3, 4, 5];

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    };

    return (
        <section className="bg-[var(--color-background-soft)] py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-serif text-[var(--color-primary)]">{title}</h3>
                    <p className="text-gray-600">{subtitle}</p>
                </div>

                <div className="relative max-w-5xl mx-auto md:aspect-video aspect-[4/3] bg-gray-200 rounded-3xl overflow-hidden shadow-2xl group">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 flex items-center justify-center bg-gray-300 text-gray-400"
                        >
                            {hasImages ? (
                                <img
                                    src={images[currentIndex].src}
                                    alt={images[currentIndex].alt}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                /* Placeholder Content */
                                <div className="flex flex-col items-center gap-4">
                                    <FiImage className="text-6xl text-[var(--color-primary)]/40" />
                                    <span className="font-medium text-lg text-gray-500">
                                        Imagen de Galería {currentIndex + 1}
                                    </span>
                                    <span className="text-sm bg-white/50 px-3 py-1 rounded-full">
                                        Placeholder
                                    </span>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[var(--color-primary)] p-3 rounded-full shadow-lg backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 z-10"
                    >
                        <FiChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[var(--color-primary)] p-3 rounded-full shadow-lg backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 z-10"
                    >
                        <FiChevronRight size={24} />
                    </button>

                    {/* Indicators */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                        {items.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`w-2.5 h-2.5 rounded-full transition-all ${idx === currentIndex
                                    ? 'bg-[var(--color-primary)] w-8'
                                    : 'bg-white/60 hover:bg-white'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
