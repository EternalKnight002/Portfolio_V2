'use client';
import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavBarProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}

export default function NavBar({ isOpen, setIsOpen }: NavBarProps) {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-8 py-8 flex justify-between items-center mix-blend-difference text-white">
      <div className="text-2xl font-bold tracking-tighter font-sans">OTB</div>
      
      <button 
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 focus:outline-none group"
      >
        <span className="text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
          {isOpen ? 'Close' : 'Menu'}
        </span>
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>
    </nav>
  );
}