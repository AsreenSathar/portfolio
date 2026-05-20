import { motion } from 'framer-motion'
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
}: ButtonProps & { [key: string]: any }) {
  const baseStyles =
    'font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 font-medium'

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-glow disabled:opacity-50',
    secondary: 'bg-secondary/20 text-secondary hover:bg-secondary/30 disabled:opacity-50',
    outline:
      'border-2 border-primary text-primary hover:bg-primary/10 disabled:opacity-50',
    ghost: 'text-primary hover:bg-primary/10 disabled:opacity-50',
  }

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg',
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
