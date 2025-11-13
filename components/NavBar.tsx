'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full sticky top-0 z-40 bg-transparent">
      <div className="container px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-accent">YourName</Link>

        <nav className="hidden md:flex gap-8 items-center">
          <a href="#projects" className="hover:opacity-80">Projects</a>
          <a href="#skills" className="hover:opacity-80">Skills</a>
          <a href="#interests" className="hover:opacity-80">Interests</a>
          <a href="#contact" className="hover:opacity-80">Contact</a>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setOpen(v => !v)} aria-label="toggle menu" className="p-2">
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden container px-4 pb-4">
          <a href="#projects" className="block py-2">Projects</a>
          <a href="#skills" className="block py-2">Skills</a>
          <a href="#interests" className="block py-2">Interests</a>
          <a href="#contact" className="block py-2">Contact</a>
        </div>
      )}
    </header>
  )
}
