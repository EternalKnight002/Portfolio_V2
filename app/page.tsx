'use client';

import { useState } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="bg-background min-h-screen relative">
      
      {/* Navbar sits on top of everything */}
      <NavBar isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />

      {/* Hero handles the split screen menu interaction */}
      <Hero isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />

      {/* Only show other sections if menu is closed (Optional: remove conditional if you want them to scroll below) */}
      <div className={`${isMenuOpen ? 'hidden' : 'block'}`}>
        <div className="container mx-auto px-6">
         
        </div>
      </div>

    </main>
  );
}