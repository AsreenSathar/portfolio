import { motion, type MotionProps } from 'framer-motion'
import { cn } from '@utils/cn'
import { buttonHoverVariants } from '@utils/animationVariants'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  children: React.ReactNode
}

export default function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  children,
  className,
  disabled,
  ...props
}: ButtonProps & MotionProps) {
  const baseStyles =
    'font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-3 font-medium'

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-[#E8A0A8] to-[#F7C6C7] text-[#5A1733] hover:shadow-glow-accent transform-gpu hover:-translate-y-0.5 disabled:opacity-50',
    secondary: 'bg-[#FFF9F5] text-[#5A1733] hover:shadow-sm disabled:opacity-50',
    outline:
      'border-2 border-[#E8A0A8] text-[#5A1733] hover:bg-[#FFF9F5] disabled:opacity-50',
    ghost: 'text-[#5A1733] hover:bg-[#FFF9F5] disabled:opacity-50',
  }

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
  }

  return (
    <motion.button
      variants={buttonHoverVariants}
      initial="initial"
      whileHover={!disabled && !isLoading ? 'hover' : undefined}
      whileTap={!disabled && !isLoading ? 'tap' : undefined}
      disabled={disabled || isLoading}
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    >
      {isLoading ? (
        <>
          <motion.div
            className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
          <span>Loading...</span>
        </>
      ) : (
        children
      )}
    </motion.button>
  )
}
