
// File: components/Hero.tsx
'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      // CustomEvent is used by NavBar
      // @ts-ignore
      const detail = (e as CustomEvent).detail;
      if (detail && typeof detail.open === 'boolean') setMenuOpen(detail.open);
    };
    window.addEventListener('menu-toggle', handler as EventListener);
    return () => window.removeEventListener('menu-toggle', handler as EventListener);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <div className="max-w-[1400px] mx-auto w-full px-6">
        <div className="grid grid-cols-12 gap-8 items-stretch">
          {/* Left image (col 1-6) */}
          <div className="col-span-12 lg:col-span-6 h-[80vh] relative overflow-hidden rounded-sm">
            <AnimatePresence mode="wait">
              <motion.img
                key={menuOpen ? 'her2' : 'her1'}
                src={menuOpen ? '../her-mockup2.png' : '../her-mockup.png'}
                alt="hero"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.9 }}
                className="object-cover w-full h-full"
              />
            </AnimatePresence>
          </div>

          {/* Right content (col 7-12) */}
          <div className="col-span-12 lg:col-span-6 flex items-center">
            <div className="text-white pr-12">
              <h1 className="display-heading">Hello there.</h1>
              <h2 className="name-heading">My name's <span className="text-accent">Lord</span></h2>

              <p className="mt-6 max-w-lg text-sm text-muted">
                Raised by Woodwards and tamed by wolves, I live under the influence of a man who walked into the wild.
                Haunted by the allure of point breaks and powder days.
              </p>

              <div className="mt-8">
                <button className="px-6 py-3 border border-white/20 rounded-md">See my work</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Anchor sections to scroll to (examples) */}
      <div id="skills" className="sr-only" />
      <div id="projects" className="sr-only" />
      <div id="interests" className="sr-only" />
      <div id="contact" className="sr-only" />
    </section>
  );
}
