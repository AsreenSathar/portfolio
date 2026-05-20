// Portfolio Constants

export const SITE_NAME = 'Premium Portfolio'
export const SITE_DESCRIPTION = 'Premium Animated Portfolio - A showcase of modern web development with elegant design'

// Navigation Links
export const NAV_LINKS = [
  { id: 'home', label: 'Home', href: '#hero' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'certificates', label: 'Certificates', href: '#certificates' },
  { id: 'education', label: 'Education', href: '#education' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'contact', label: 'Contact', href: '#contact' },
]

// Colors
export const COLORS = {
  primary: '#9f7aea',
  secondary: '#c8a2c8',
  accent: '#f9a8d4',
  background: '#f8f5ff',
  darkBackground: '#0f0f1a',
  textDark: '#1e1e2f',
  textLight: '#ffffff',
  softBorder: 'rgba(255, 255, 255, 0.2)',
}

// Animation Durations (in seconds)
export const ANIMATION_DURATIONS = {
  initial: 0.3,
  normal: 0.5,
  slow: 0.8,
  verySlow: 1.2,
}

// Animation Delays
export const ANIMATION_DELAYS = {
  none: 0,
  xs: 0.05,
  sm: 0.1,
  md: 0.2,
  lg: 0.3,
  xl: 0.5,
}

// Skill Categories
export const SKILL_CATEGORIES = [
  { id: 'frontend', label: 'Frontend', icon: 'FaCode' },
  { id: 'backend', label: 'Backend', icon: 'FaServer' },
  { id: 'tools', label: 'Tools', icon: 'FaTools' },
  { id: 'design', label: 'Design', icon: 'FaPalette' },
]

// CTA Button Labels
export const CTA_LABELS = {
  downloadCV: 'Download CV',
  contactMe: 'Contact Me',
  viewProject: 'View Project',
  viewMore: 'View More',
  learnMore: 'Learn More',
  getInTouch: 'Get In Touch',
}

// Footer Links
export const FOOTER_LINKS = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Sitemap', href: '#' },
]

// Social Media Platforms
export const SOCIAL_PLATFORMS = [
  'github',
  'linkedin',
  'twitter',
  'instagram',
  'email',
  'whatsapp',
]

// Breakpoints
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
}

// Z-Index Values
export const Z_INDEX = {
  hide: -1,
  auto: 'auto',
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
}

// Transition Timings
export const TRANSITIONS = {
  fast: '150ms ease-in-out',
  normal: '300ms ease-in-out',
  slow: '500ms ease-in-out',
}

// Email Validation Regex
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Max Content Width
export const MAX_CONTENT_WIDTH = 1200
