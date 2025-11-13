// /components/Hero.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20">
      <div className="container flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-1">
          <p className="text-sm font-medium text-accent mb-4">Hi, I’m</p>

          <h1 className="hero-heading">
            I design & build <span className="text-accent">delightful</span> user interfaces.
          </h1>

          <p className="mt-6 text-gray-300 max-w-xl leading-relaxed">
            Frontend developer focused on clean, accessible, and polished web apps.
            I turn product ideas into production-ready code — with performance and UX in mind.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#projects" className="btn-primary inline-flex items-center gap-2">
              See projects <FiArrowRight />
            </Link>

            <a href="#contact" className="btn-ghost">
              Contact
            </a>
          </div>
        </div>

        <div className="flex-1 w-full max-w-xl">
          <div className="hero-image-card rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/hero-mockup.png"
              alt="phone mockup"
              width={1200}
              height={800}
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
