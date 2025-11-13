// components/ContactSection.tsx
'use client'

export default function ContactSection() {
  return (
    <section id="contact" className="py-16">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <p className="mt-2 text-gray-400">Interested in working together? Send a note — placeholders below.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-panel p-6 rounded-lg">
          <h3 className="font-semibold">Email</h3>
          <p className="text-gray-300 mt-2">you@domain.com</p>
        </div>

        <form className="bg-panel p-6 rounded-lg" onSubmit={(e) => { e.preventDefault(); /* handle submit */ }}>
          <label htmlFor="contact-name" className="block text-sm text-gray-300">Your name</label>
          <input id="contact-name" name="name" placeholder="Jane Doe" aria-label="Your name" className="mt-2 w-full p-2 rounded bg-black/20" />

          <label htmlFor="contact-message" className="block text-sm text-gray-300 mt-4">Message</label>
          <textarea id="contact-message" name="message" placeholder="Write a short message..." aria-label="Message" className="mt-2 w-full p-2 rounded bg-black/20 h-28" />

          <div className="mt-4">
            <button type="submit" className="px-4 py-2 bg-accent rounded text-black font-medium">Send</button>
          </div>
        </form>
      </div>
    </section>
  )
}
