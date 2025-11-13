// components/NavBar.tsx
'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MENU_ITEMS = [
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'interests', label: 'Interest' },
  { id: 'contact', label: 'Contact' },
  { id: 'resume', label: 'Resume' },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // announce menu state to hero (or other listeners)
    window.dispatchEvent(new CustomEvent('menu-toggle', { detail: { open } }));

    // focus management: focus first actionable element in the panel when opened
    if (open) {
      // NOTE: cast to HTMLElement so TypeScript knows .focus() exists
      const first = panelRef.current?.querySelector('a, button') as HTMLElement | null;
      first?.focus();
    } else {
      btnRef.current?.focus();
    }

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open]);

  function handleNavClick(id: string) {
    if (id === 'resume') {
      // public/data/resume.pdf -> served at /data/resume.pdf
      window.open('/data/resume.pdf', '_blank', 'noopener,noreferrer');
      setOpen(false);
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setOpen(false);
  }

  return (
    <nav className="fixed inset-x-0 top-0 z-50 pointer-events-auto">
      <div className="max-w-[1400px] mx-auto px-6 py-6 flex items-center justify-between">
        <div className="logo text-white font-bold">OTB</div>

        <button
          ref={btnRef}
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((s) => !s)}
          className="w-12 h-8 flex items-center justify-center"
        >
          {open ? <X className="text-white" /> : <Menu className="text-white" />}
        </button>
      </div>

      {/* Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Slide-in menu panel */}
      <AnimatePresence>
        {open && (
          <motion.aside
            id="site-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.6 }}
            className="fixed right-0 top-0 h-full w-[420px] bg-[#0f1720] text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            ref={panelRef}
            // Accessibility attributes
            role="dialog"
            aria-modal={true}
            aria-hidden={!open}
          >
            <div className="h-full flex flex-col items-start justify-center px-12">
              <ul className="space-y-8 text-4xl leading-tight font-serif">
                {MENU_ITEMS.map((m) => (
                  <li key={m.id}>
                    <button
                      onClick={() => handleNavClick(m.id)}
                      className="text-left hover:translate-x-2 transition-transform"
                    >
                      {m.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </nav>
  );
}
