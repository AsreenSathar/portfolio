import emailjs from '@emailjs/browser'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_placeholder'
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_placeholder'
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_placeholder'

export const initEmailJS = () => {
  try {
    emailjs.init(PUBLIC_KEY)
  } catch (error) {
    console.error('EmailJS initialization failed:', error)
  }
}

export const sendEmail = async (templateParams: {
  name: string
  email: string
  subject: string
  message: string
}) => {
  try {
    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
    return {
      success: true,
      message: 'Email sent successfully!',
      response,
    }
  } catch (error) {
    console.error('Email sending failed:', error)
    return {
      success: false,
      message: 'Failed to send email. Please try again later.',
      error,
    }
  }
}
