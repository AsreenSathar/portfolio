import { cn } from '@utils/cn'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning'
  className?: string
}

export default function Badge({ children, variant = 'primary', className }: BadgeProps) {
  const variantStyles = {
    primary: 'bg-primary/20 text-primary border border-primary/30',
    secondary: 'bg-secondary/20 text-secondary border border-secondary/30',
    accent: 'bg-accent/20 text-accent border border-accent/30',
    success: 'bg-green-500/20 text-green-500 border border-green-500/30',
    warning: 'bg-yellow-500/20 text-yellow-500 border border-yellow-500/30',
  }

  return (
    <span
      className={cn(
        'inline-block px-3 py-1 rounded-full text-sm font-medium',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
