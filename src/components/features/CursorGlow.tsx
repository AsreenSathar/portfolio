import { useEffect, useRef, useState } from 'react'

export default function CursorGlow() {
  const cursorRef = useRef<HTMLDivElement>(null)
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
      className="pointer-events-none fixed w-3 h-3 -translate-x-1/2 -translate-y-1/2 z-40 rounded-full"
      style={{
        background: 'rgba(159,122,234,0.9)'
      }}
    />
  )
}
