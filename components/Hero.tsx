'use client';
import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';

interface HeroProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}

const MENU_ITEMS = [
  { id: 'skills', label: 'Skills', number: '01' },
  { id: 'projects', label: 'Projects', number: '02' },
  { id: 'interests', label: 'Interests', number: '03' },
  { id: 'contact', label: 'Contact', number: '04' },
  { id: 'resume', label: 'Resume', number: '05' },
];

export default function Hero({ isOpen, setIsOpen }: HeroProps) {
  // Mouse position for parallax
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring animation for mouse movement
  const mouseX = useSpring(x, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 50, damping: 20 });

  function handleMouseMove({ clientX, clientY }: { clientX: number; clientY: number }) {
    const { innerWidth, innerHeight } = window;
    const xPct = clientX / innerWidth - 0.5;
    const yPct = clientY / innerHeight - 0.5;
    x.set(xPct);
    y.set(yPct);
  }

  // Parallax transforms
  const xMove = useTransform(mouseX, [-0.5, 0.5], [-20, 20]);
  const yMove = useTransform(mouseY, [-0.5, 0.5], [-20, 20]);
  const xMoveOpposite = useTransform(mouseX, [-0.5, 0.5], [10, -10]);
  const yMoveOpposite = useTransform(mouseY, [-0.5, 0.5], [10, -10]);

  const handleNavClick = (id: string) => {
    if (id === 'resume') {
      window.open('/data/resume.pdf', '_blank');
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <section
      className="relative h-screen w-full overflow-hidden bg-background flex"
      onMouseMove={handleMouseMove}
    >

      {/* --- LEFT SIDE: Image & Hero Text --- */}
      <motion.div
        className="relative h-full overflow-hidden bg-gray-900"
        initial={false}
        animate={{ width: isOpen ? '55%' : '100%' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // Smooth Apple-like ease
      >
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/hero-mockup2.png"
            alt="Hero"
            fill
            className="object-cover object-top opacity-80" // Added object-top
            priority
          />
          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

          {/* Grain Texture Overlay */}
          <div className="absolute inset-0 opacity-[0.07] pointer-events-none mix-blend-overlay"
            style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
          />
        </div>

        {/* Hero Text Content */}
        <div className="absolute top-1/3 left-8 md:left-16 z-10 max-w-3xl text-white">
          <motion.div style={{ x: xMove, y: yMove }}>
            <motion.h1
              className="font-serif text-6xl md:text-8xl leading-[0.9]"
              animate={{ opacity: isOpen ? 0.4 : 1, x: isOpen ? -50 : 0 }}
              transition={{ duration: 0.6 }}
            >
              Hello there.<br />
              My name's <span className="text-accent italic">Lord</span>
            </motion.h1>
          </motion.div>

          <motion.div style={{ x: xMoveOpposite, y: yMoveOpposite }}>
            <motion.p
              className="mt-8 text-sm md:text-base text-gray-300 max-w-md leading-relaxed font-sans"
              animate={{ opacity: isOpen ? 0 : 1 }}
              transition={{ duration: 0.4 }}
            >
              Raised by Woodwards and tamed by wolves, I live under the influence of a man who walked into the wild.
              Haunted by the allure of point breaks and powder days.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>


      {/* --- RIGHT SIDE: Menu Content --- */}
      <motion.div
        className="bg-background h-full flex flex-col justify-center px-12 md:px-20"
        initial={{ width: '0%', opacity: 0 }}
        animate={{ width: isOpen ? '45%' : '0%', opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {isOpen && (
          <motion.ul
            className="space-y-6"
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.3 }
              }
            }}
          >
            {MENU_ITEMS.map((item) => (
              <motion.li
                key={item.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
              >
                <button
                  onClick={() => handleNavClick(item.id)}
                  className="group flex items-baseline gap-4 text-left w-full"
                >
                  <span className="text-xs font-sans text-gray-500 group-hover:text-accent transition-colors duration-300">
                    {item.number}
                  </span>
                  <span className="font-serif text-4xl md:text-5xl text-gray-300 group-hover:text-white group-hover:translate-x-4 transition-all duration-300 ease-out">
                    {item.label}
                  </span>
                </button>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </motion.div>

    </section>
  );
}