// Skill Types
export interface Skill {
  id: string
  name: string
  category: 'frontend' | 'backend' | 'tools' | 'design' | 'other'
  icon: string
  level: number // 1-10
  description?: string
}

export interface SkillCategory {
  category: string
  skills: Skill[]
}

// Project Types
export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  image: string
  technologies: string[]
  links: {
    live?: string
    github?: string
    demo?: string
  }
  featured: boolean
  year?: number
  achievements?: string[]
}

// Education Types
export interface Education {
  id: string
  institution: string
  degree: string
  field: string
  startDate: string // YYYY-MM
  endDate: string // YYYY-MM or 'Present'
  gpa?: number
  achievements?: string[]
}

// Experience Types
export interface Experience {
  id: string
  company: string
  role: string
  type: 'Full-time' | 'Part-time' | 'Freelance' | 'Contract'
  startDate: string // YYYY-MM
  endDate: string // YYYY-MM or 'Present'
  description: string
  achievements: string[]
  technologies: string[]
}

// Certificate Types
export interface Certificate {
  id: string
  name: string
  issuer: string
  issueDate: string // YYYY-MM
  expiryDate?: string // Optional for non-expiring certs
  icon: string
  link?: string
  credentialId?: string
}

// Social Media Types
export interface SocialLink {
  id: string
  platform: string
  url: string
  icon: string
  label: string
}

// Contact Form Types
export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface ContactFormState {
  loading: boolean
  error: string | null
  success: boolean
}

// Animation Types
export type AnimationVariant = {
  hidden: Record<string, any>
  visible: Record<string, any>
}

export type AnimationTrigger = 'scroll' | 'hover' | 'click' | 'load'

// Common Component Props
export interface BaseProps {
  className?: string
  id?: string
  'data-testid'?: string
}

export interface SectionProps extends BaseProps {
  title?: string
  subtitle?: string
  fullHeight?: boolean
}
