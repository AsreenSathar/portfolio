import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { containerVariants, itemVariants } from '@utils/animationVariants'
import { useInView } from '@hooks/useInView'
import Button from '@components/common/Button'
import Card from '@components/common/Card'
import { sendEmail } from '@config/emailjs.config'
import socialData from '@data/social.json'
import * as Icons from 'react-icons/fa'

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
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: 'var(--bg-section)' }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="text-center space-y-2">
            <h2 className="text-4xl md:text-5xl font-heading">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-muted">
              Let's discuss your next project
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left - Contact Details */}
            <motion.div variants={itemVariants}>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary">Contact Information</h3>
                <div className="text-muted space-y-2 mb-4">
                  <div><strong>Email:</strong> asreensathar72@gmail.com</div>
                  <div><strong>Phone:</strong> +91 8010319023</div>
                  <div><strong>Location:</strong> Pune</div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2 text-primary">Social</h4>
                  <div className="flex gap-3">
                    {socialData.map((s: any, idx: number) => {
                      const Icon = (Icons as any)[s.icon] || Icons.FaGithub
                      return (
                        <a
                          key={idx}
                          href={s.url}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="w-12 h-12 rounded-full bg-[linear-gradient(180deg,rgba(232,160,168,0.12),rgba(247,198,199,0.06))] hover:scale-105 flex items-center justify-center transition-all"
                          aria-label={s.label}
                        >
                          <Icon className="text-[#5A1733]" size={18} />
                        </a>
                      )
                    })}
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Right - Contact Form */}
            <motion.form
              ref={formRef}
              variants={containerVariants}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
            {/* Name Field */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium mb-2 text-[#5A1733]">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </motion.div>

            {/* Email Field */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium mb-2 text-[#5A1733]">Email</label>
              <input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </motion.div>

            {/* Subject Field */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium mb-2 text-[#5A1733]">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Project inquiry"
                value={formData.subject}
                onChange={handleChange}
                required
                className="form-input"
              />
            </motion.div>

            {/* Message Field */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium mb-2 text-[#5A1733]">Message</label>
              <textarea
                name="message"
                placeholder="Your message here..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="form-input resize-none h-40"
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
          </div>
        </motion.div>
      </div>
    </section>
  )
}
