const SKILLS = [
  'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Postgres', 'Git', 'Testing'
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-12">
      <h2 className="text-2xl font-semibold">Skills</h2>
      <div className="mt-4 flex flex-wrap gap-3">
        {SKILLS.map(s => (
          <span key={s} className="px-3 py-1 rounded-md bg-white/6 text-sm">{s}</span>
        ))}
      </div>
    </section>
  )
}

