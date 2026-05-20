import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { containerVariants, itemVariants } from '@utils/animationVariants'
import { useInView } from '@hooks/useInView'
import Button from '@components/common/Button'
import { sendEmail } from '@config/emailjs.config'

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  const formRef = useRef<HTMLFormElement>(null)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error('Please fill in all fields')
      return
    }

    setLoading(true)

    try {
      const result = await sendEmail(formData)
      if (result.success) {
        toast.success('Message sent successfully!')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        toast.error('Failed to send message. Please try again.')
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.')
      console.error('Contact form error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 dark:bg-black/20"
    >
      <div className="max-w-2xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="text-center space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-text-dark/60 dark:text-text-light/60">
              Let's discuss your next project
            </p>
          </motion.div>

          <motion.form
            ref={formRef}
            variants={containerVariants}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Name Field */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 dark:bg-white/5 border border-primary/30 text-text-dark dark:text-text-light placeholder-text-dark/50 dark:placeholder-text-light/50 focus:outline-none focus:border-primary/60 transition-colors"
              />
            </motion.div>

            {/* Email Field */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 dark:bg-white/5 border border-primary/30 text-text-dark dark:text-text-light placeholder-text-dark/50 dark:placeholder-text-light/50 focus:outline-none focus:border-primary/60 transition-colors"
              />
            </motion.div>

            {/* Subject Field */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Project inquiry"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 dark:bg-white/5 border border-primary/30 text-text-dark dark:text-text-light placeholder-text-dark/50 dark:placeholder-text-light/50 focus:outline-none focus:border-primary/60 transition-colors"
              />
            </motion.div>

            {/* Message Field */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                placeholder="Your message here..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-white/10 dark:bg-white/5 border border-primary/30 text-text-dark dark:text-text-light placeholder-text-dark/50 dark:placeholder-text-light/50 focus:outline-none focus:border-primary/60 transition-colors resize-none"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={itemVariants} className="pt-4">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                isLoading={loading}
                className="w-full"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}
