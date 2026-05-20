import { FiSun, FiMoon } from 'react-icons/fi'
import { motion } from 'framer-motion'

interface ThemeToggleProps {
  isDark: boolean
  onToggle: () => void
}

export default function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <motion.button
      onClick={onToggle}
      className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <FiMoon size={20} className="text-primary" />
        ) : (
          <FiSun size={20} className="text-primary" />
        )}
      </motion.div>
    </motion.button>
  )
}
