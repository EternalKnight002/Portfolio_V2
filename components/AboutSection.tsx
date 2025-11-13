export default function AboutSection() {
  return (
    <section id="about" className="py-16">
      <h2 className="text-3xl font-semibold">About</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <div className="md:col-span-2 text-gray-300">
          <p>I’m a frontend developer & designer who loves building clean user experiences. My stack: Next.js, React, Tailwind CSS, TypeScript. I focus on accessibility and performance.</p>

          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li>💡 Problem solving & UX-minded features</li>
            <li>⚡ Fast, SEO-friendly static & dynamic apps</li>
            <li>📦 Component-driven systems & design tokens</li>
          </ul>
        </div>

        <div className="text-sm text-gray-400">
          <div className="mb-3">Location</div>
          <div className="mb-3">Email</div>
          <div className="mb-3">Open to remote / freelance</div>
        </div>
      </div>
    </section>
  )
}
