import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const base = import.meta.env.BASE_URL;

const images = [
    `${base}images/hero-slider/hero-slide-1.jpg`,
    `${base}images/hero-slider/hero-slide-2.jpg`,
    `${base}images/hero-slider/hero-slide-3.jpg`,
    `${base}images/hero-slider/hero-slide-4.jpg`,
];

export const HeroSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 6000); // Change every 6 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
            <AnimatePresence mode='sync'>
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        opacity: { duration: 1.5, ease: "easeInOut" },
                        scale: { duration: 7, ease: "linear" }
                    }}
                    className="absolute inset-0 w-full h-full"
                >
                    <img
                        src={images[currentIndex]}
                        alt="Pura Chata Amazonía"
                        className="object-cover w-full h-full"
                    />
                </motion.div>
            </AnimatePresence>
            {/* Static Overlays */}
            <div className="absolute inset-0 bg-black/40 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 z-10" />
        </div>
    );
};
