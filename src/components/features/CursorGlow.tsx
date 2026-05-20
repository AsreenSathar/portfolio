import { useEffect, useRef, useState } from 'react'

export default function CursorGlow() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Check if device supports hover (not touch device)
    const isTouchDevice = () => {
      return (
        (typeof window !== 'undefined' &&
          ('ontouchstart' in window || navigator.maxTouchPoints > 0)) ||
        false
      )
    }

    if (isTouchDevice()) {
      setIsVisible(false)
      return
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`
        cursorRef.current.style.top = `${e.clientY}px`
      }
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed w-8 h-8 -translate-x-1/2 -translate-y-1/2 z-40"
      style={{
        background: 'radial-gradient(circle, rgba(159,122,234,0.5) 0%, rgba(159,122,234,0) 70%)',
        filter: 'blur(8px)',
        boxShadow: '0 0 30px rgba(159, 122, 234, 0.6), 0 0 60px rgba(200, 162, 200, 0.3)',
      }}
    />
  )
}
