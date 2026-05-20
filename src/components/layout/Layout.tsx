import { useDarkMode } from '@hooks/useDarkMode'
import Navbar from '@components/layout/Navbar'
import Footer from '@components/layout/Footer'
import ScrollProgressBar from '@components/features/ScrollProgressBar'
import CursorGlow from '@components/features/CursorGlow'
import ParticlesBg from '@components/features/ParticlesBg'
import Hero from '@components/sections/Hero'
import About from '@components/sections/About'
import Skills from '@components/sections/Skills'
import Certificates from '@components/sections/Certificates'
import Experience from '@components/sections/Experience'
import Projects from '@components/sections/Projects'
import Contact from '@components/sections/Contact'

export default function Layout() {
  const { isDark, toggleDarkMode } = useDarkMode()

  return (
    <div className="min-h-screen bg-light dark:bg-dark text-text-dark dark:text-text-light transition-colors duration-300">
      {/* Background Effects */}
      <ParticlesBg />
      <CursorGlow />
      <ScrollProgressBar />

      {/* Navigation */}
      <Navbar isDark={isDark} onThemeToggle={toggleDarkMode} />

      {/* Main Content */}
      <main className="relative pt-16">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Certificates />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
