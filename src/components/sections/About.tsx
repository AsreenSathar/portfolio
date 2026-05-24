import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '@utils/animationVariants'
import { useInView } from '@hooks/useInView'

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-text-dark/60 dark:text-text-light/60 text-lg">
              Get to know me better
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* About Image */}
            <motion.div variants={itemVariants} className="flex justify-center">
              <div className="w-80 h-80 rounded-2xl gradient-border overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-2">🎨</div>
                    <p className="text-sm text-text-dark/70 dark:text-text-light/70">
                      About Image
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* About Text & Stats */}
            <motion.div variants={containerVariants} className="space-y-6">
              <motion.p
                variants={itemVariants}
                className="text-text-dark/70 dark:text-text-light/70 text-lg leading-relaxed"
              >
                To find a position for myself in an esteemed organization where I could polish my skills and expand my technical horizons. Where all my skills could be put to use for the betterment of both the company and my own self.
                <p>I am a Computer Science student with a passion for coding and creativity. I have experience in web development, particularly with the MERN stack, and I am always eager to learn new technologies and take on challenging projects.</p>
              </motion.p>

              
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
