import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { NAV_LINKS } from '@utils/constants'
import ThemeToggle from '@components/features/ThemeToggle'
import { cn } from '@utils/cn'

interface NavbarProps {
  isDark: boolean
  onThemeToggle: () => void
}

export default function Navbar({ isDark, onThemeToggle }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string, id: string) => {
    setActiveSection(id)
    setIsOpen(false)

    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Navbar */}
      <motion.nav
        className={cn(
          'fixed top-0 w-full z-40 transition-all duration-300 font-heading',
          scrolled ? 'backdrop-blur-md shadow-sm' : ''
        )}
        style={{ backgroundColor: 'var(--bg-main)', borderBottom: '1px solid var(--nav-divider)' }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold gradient-text cursor-pointer"
            >
              Asreen Sathar
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <motion.button
                  key={link.id}
                  onClick={() => handleNavClick(link.href, link.id)}
                  className={cn(
                    'font-medium transition-colors duration-300 relative group',
                    activeSection === link.id
                      ? 'text-primary'
                      : 'text-text-dark dark:text-text-light hover:text-primary'
                  )}
                  whileHover={{ y: -2 }}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-primary to-accent"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Right side - Theme toggle & Mobile Menu */}
            <div className="flex items-center gap-4">
              <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
        className={cn(
          'fixed top-16 left-0 right-0 backdrop-blur-lg z-30 md:hidden font-heading',
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        )}
        style={{ backgroundColor: 'var(--bg-main)' }}
      >
        <div className="px-4 py-4 space-y-3">
          {NAV_LINKS.map((link) => (
            <motion.button
              key={link.id}
              onClick={() => handleNavClick(link.href, link.id)}
              className={cn(
                'block w-full text-left px-4 py-2 rounded-lg font-medium transition-all duration-300',
                activeSection === link.id
                  ? 'bg-primary/20 text-primary'
                  : 'text-text-dark dark:text-text-light hover:bg-primary/10'
              )}
              whileHover={{ x: 4 }}
            >
              {link.label}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </>
  )
}
