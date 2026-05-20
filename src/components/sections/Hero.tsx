import { motion } from 'framer-motion'
import { FiDownload, FiMail } from 'react-icons/fi'
import { TypeAnimation } from 'react-type-animation'
import { containerVariants, itemVariants, fadeInVariants } from '@utils/animationVariants'
import Button from '@components/common/Button'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-primary/30 to-secondary/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -30, 50, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ top: '-200px', left: '-100px' }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-accent/20 to-primary/30 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 30, 0],
            y: [0, 30, -50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          style={{ bottom: '-200px', right: '-100px' }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Greeting */}
            <motion.div variants={itemVariants}>
              <p className="text-primary font-semibold text-lg">Welcome to my portfolio</p>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold leading-tight"
            >
              Hi, I'm{' '}
              <span className="gradient-text">Your Name</span>
            </motion.h1>

            {/* Typing Animation */}
            <motion.div variants={itemVariants} className="text-2xl md:text-3xl font-semibold">
              <TypeAnimation
                sequence={[
                  'Frontend Developer',
                  1500,
                  'UI/UX Designer',
                  1500,
                  'Creative Thinker',
                  1500,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className="gradient-text"
              />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-text-dark/70 dark:text-text-light/70 text-lg leading-relaxed max-w-xl"
            >
              Passionate about creating beautiful and interactive web experiences with modern technologies. I transform ideas into elegant digital solutions with smooth animations and exceptional UI/UX design.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="primary" size="lg" className="group">
                <FiDownload className="group-hover:scale-110 transition-transform" />
                Download CV
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  const contactSection = document.querySelector('#contact')
                  contactSection?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="group"
              >
                <FiMail className="group-hover:scale-110 transition-transform" />
                Contact Me
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hidden md:flex justify-center items-center"
          >
            <motion.div
              variants={itemVariants}
              className="relative w-80 h-80"
            >
              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-75 blur-lg"
                animate={{
                  rotate: 360,
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  rotate: { duration: 8, repeat: Infinity, ease: 'linear' },
                  scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
                }}
              />

              {/* Inner Circle */}
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-primary/20 to-secondary/10 backdrop-blur-xl flex items-center justify-center overflow-hidden">
                {/* Placeholder Image - Replace with actual profile photo */}
                <div className="w-full h-full bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-2">👩‍💻</div>
                    <p className="text-sm text-text-dark/70 dark:text-text-light/70">
                      Profile Photo
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Circles */}
              <motion.div
                className="absolute -top-8 -right-8 w-24 h-24 bg-accent/20 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  y: [0, -20, 0],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute -bottom-8 -left-8 w-24 h-24 bg-primary/20 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  y: [0, 20, 0],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-0 right-0 flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2 cursor-pointer group" onClick={() => {
            const aboutSection = document.querySelector('#about')
            aboutSection?.scrollIntoView({ behavior: 'smooth' })
          }}>
            <p className="text-sm text-text-dark/60 dark:text-text-light/60 group-hover:text-primary transition-colors">
              Scroll to explore
            </p>
            <svg
              className="w-6 h-6 text-primary animate-bounce"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
