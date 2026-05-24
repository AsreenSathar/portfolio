import { motion } from 'framer-motion'
import { cn } from '@utils/cn'
import { hoverScaleVariants } from '@utils/animationVariants'

interface CardProps {
  children: React.ReactNode
  className?: string
  hoverable?: boolean
  gradient?: boolean
  onClick?: () => void
}

export default function Card({
  children,
  className,
  hoverable = true,
  gradient = false,
  onClick,
}: CardProps) {
  const baseStyles = 'rounded-[28px] backdrop-blur-xl overflow-hidden transition-all duration-300'

  const glassStyles = gradient
    ? 'glass-effect gradient-border shadow-md-glow'
    : 'card-premium border border-transparent'

  return (
    <motion.div
      variants={hoverable ? hoverScaleVariants : undefined}
      initial="initial"
      whileHover={hoverable ? 'hover' : undefined}
      whileTap={hoverable ? 'tap' : undefined}
      onClick={onClick}
      className={cn(
        baseStyles,
        glassStyles,
        hoverable && 'cursor-pointer',
        className
      )}
    >
      {children}
    </motion.div>
  )
}
