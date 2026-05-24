import { FiArrowUp } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '@utils/animationVariants'

export default function Footer() {
  const currentYear = new Date().getFullYear()


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-white/5 dark:bg-black/20 border-t border-white/10 backdrop-blur-sm py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            {/* Branding */}
            <motion.div variants={itemVariants} className="flex-1">
              <h3 className="text-2xl font-bold gradient-text mb-2">Asreen Sathar</h3>
              <p className="text-text-dark/70 dark:text-text-light/70">
                Passionate Computer Science student with a love for coding and creativity.
              </p>
            </motion.div>

            {/* Social Links removed from footer per request */}
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <motion.p variants={itemVariants} className="text-sm text-text-dark/60 dark:text-text-light/60">
              © {currentYear} Portfolio
            </motion.p>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary/30 flex items-center justify-center transition-all duration-300 group"
              aria-label="Back to top"
            >
              <FiArrowUp size={18} className="text-primary group-hover:text-accent transition-colors" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
