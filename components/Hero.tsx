import Image from 'next/image'

export default function Hero() {
  return (
    <section className="py-20">
      <div className="container px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="hero-title text-4xl md:text-6xl font-extrabold leading-tight">
            Hi! I'm <span className="text-accent">Your Name</span><br/>
            I design & build delightful user interfaces.
          </h1>
          <p className="mt-6 text-gray-300 max-w-xl">
            Frontend developer focused on clean, accessible, and polished web apps. I love turning product ideas into production-ready code.
          </p>

          <div className="mt-6 flex gap-3">
            <a href="#projects" className="px-5 py-3 rounded-md bg-accent text-black font-semibold">See projects</a>
            <a href="#contact" className="px-5 py-3 rounded-md border border-gray-700">Contact</a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="phone-mock w-[320px] h-[640px] bg-black/60">
            <Image src="/images/hero-mockup.png" alt="phone mockup" width={320} height={640} className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
