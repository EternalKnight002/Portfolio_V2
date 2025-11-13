import Image from 'next/image'

const PROJECTS = [
  { id: 'p1', title: 'Project Alpha', desc: 'A clean SPA built with Next.js', img: '/images/project-1.png', link: '#' },
  { id: 'p2', title: 'Productivity App', desc: 'Mobile-first student app', img: '/images/project-2.png', link: '#' },
  { id: 'p3', title: 'Design System', desc: 'Reusable React components', img: '/images/project-3.png', link: '#' },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-semibold">Selected Projects</h2>
      <p className="mt-2 text-gray-400 max-w-2xl">A few things I shipped — links and images are placeholders you can replace.</p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map(p => (
          <article key={p.id} className="rounded-lg bg-panel p-4">
            <div className="rounded-md overflow-hidden">
              <Image src={p.img} alt={p.title} width={800} height={480} className="w-full h-44 object-cover" />
            </div>
            <h3 className="mt-4 font-semibold text-lg">{p.title}</h3>
            <p className="mt-2 text-gray-300 text-sm">{p.desc}</p>
            <div className="mt-3">
              <a href={p.link} className="text-accent text-sm font-medium">View project →</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
