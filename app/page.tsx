import Hero from '../components/Hero'
import ProjectsSection from '../components/ProjectsSection'
import AboutSection from '../components/AboutSection'
import SkillsSection from '../components/SkillsSection'
import FutureInterestsSection from '../components/FutureInterestsSection' // reused from your uploaded file. :contentReference[oaicite:2]{index=2}
import ContactSection from '../components/ContactSection'
import NavBar from '@/components/NavBar';

export default function Page() {
  return (
    <>
      <Hero />
      <div className="container px-4">
        <NavBar />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <FutureInterestsSection />
        <ContactSection />
      </div>
    </>
  )
}
