import { motion } from 'framer-motion'
import { FiDownload, FiMail } from 'react-icons/fi'
import { TypeAnimation } from 'react-type-animation'
import { containerVariants, itemVariants } from '@utils/animationVariants'
import Button from '@components/common/Button'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden curved-divider"
      style={{ backgroundColor: 'var(--bg-main)' }}
    >
      {/* Background Gradient Blobs (static) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute w-72 h-72 bg-gradient-to-r from-primary/30 to-secondary/18 rounded-full blur-3xl"
            style={{ top: '-120px', left: '-60px' }}
          />
          <div
            className="absolute w-72 h-72 bg-gradient-to-r from-accent/18 to-primary/28 rounded-full blur-3xl"
            style={{ bottom: '-120px', right: '-60px' }}
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
              <p className="text-sm font-medium text-muted">Welcome to my portfolio</p>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-heading leading-tight text-primary"
            >
              Hi, I'm <br /><span className="gradient-text">Asreen Sathar</span>
            </motion.h1>

            {/* Typing Animation */}
            <motion.div variants={itemVariants} className="text-xl md:text-2xl font-semibold text-[#5A1733]/80">
              <TypeAnimation
                sequence={['MSc Computer Science Student | MERN Stack Learner', 3000]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className="gradient-text"
              />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-muted text-lg leading-relaxed max-w-xl font-body"
            >
              Passionate Computer Science student interested in web development, programming, and modern technologies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  variant="primary"
                  size="lg"
                  className="group"
                  onClick={() => window.open('/resume.pdf', '_blank')}
                >
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
              className="relative w-80 h-96 flex items-center justify-center"
            >
              {/* Asymmetrical rounded container */}
              <div className="absolute w-[320px] h-[380px] rounded-[40px] bg-[linear-gradient(135deg,#E8A0A8, #F7C6C7)] p-4 transform rotate-6 shadow-lg" />

              {/* Inner profile holder */}
              <div className="relative w-64 h-64 rounded-[28px] bg-[var(--bg-section)] flex items-center justify-center overflow-hidden card-premium">
                {/* Placeholder image circle - keep accessible for later real image */}
                <div className="w-48 h-48 rounded-2xl overflow-hidden bg-gradient-to-br from-[#F7C6C7]/60 to-[#E8A0A8]/40 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-28 h-28 text-[#5A1733] opacity-90" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M4 20c1.5-3 4.5-5 8-5s6.5 2 8 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Decorative floating blobs */}
              <div className="blob" style={{ width: 120, height: 120, background: 'rgba(232,160,168,0.18)', top: -40, right: -40 }} />
              <div className="blob" style={{ width: 80, height: 80, background: 'rgba(90,23,51,0.06)', bottom: -20, left: -40 }} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
