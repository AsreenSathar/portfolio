import { useEffect } from 'react'
import { motion } from 'framer-motion'

interface LoadingScreenProps {
  onLoadComplete?: () => void
}

export default function LoadingScreen({ onLoadComplete }: LoadingScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadComplete?.()
    }, 3000)

    return () => clearTimeout(timer)
  }, [onLoadComplete])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-light to-primary/10 dark:from-dark dark:to-primary/20"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        {/* Animated Gradient Spinner */}
        <motion.div
          className="w-20 h-20 mx-auto mb-6 relative"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-75" />
          <div className="absolute inset-2 rounded-full bg-light dark:bg-dark" />
          <div className="absolute inset-3 rounded-full bg-gradient-to-r from-secondary/50 to-accent/50" />
        </motion.div>

        {/* Title Animation */}
        <motion.h1
          className="text-3xl md:text-4xl font-bold gradient-text mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Premium Portfolio
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-text-dark/60 dark:text-text-light/60 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Loading your portfolio...
        </motion.p>

        {/* Loading Dots */}
        <motion.div className="flex gap-2 justify-center">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-primary"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.2,
                repeat: Infinity,
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}
