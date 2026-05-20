import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '@utils/animationVariants'
import { useInView } from '@hooks/useInView'
import Card from '@components/common/Card'

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
                I'm a passionate developer and designer with a love for creating beautiful web experiences. With expertise in modern web technologies, I transform complex ideas into elegant solutions.
              </motion.p>

              {/* Stats Cards */}
              <motion.div variants={containerVariants} className="grid grid-cols-3 gap-4">
                {[
                  { number: '50+', label: 'Projects' },
                  { number: '10+', label: 'Certificates' },
                  { number: '5', label: 'Years Experience' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                  >
                    <Card className="p-4 text-center">
                      <div className="text-2xl font-bold gradient-text">{stat.number}</div>
                      <p className="text-sm text-text-dark/60 dark:text-text-light/60 mt-1">
                        {stat.label}
                      </p>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
