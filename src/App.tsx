import { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { useDarkMode } from '@hooks/useDarkMode'
import { initEmailJS } from '@config/emailjs.config'
import Layout from '@components/layout/Layout'
import LoadingScreen from '@components/features/LoadingScreen'

function App() {
  const { isDark } = useDarkMode()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Initialize EmailJS
    initEmailJS()

    // Simulate loading time (you can remove this or use actual asset loading)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={isDark ? 'dark' : ''}>
      {isLoading ? (
        <LoadingScreen onLoadComplete={() => setIsLoading(false)} />
      ) : (
        <Layout />
      )}
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          duration: 4000,
          style: {
            background: isDark ? '#1e1e2f' : '#f8f5ff',
            color: isDark ? '#f1f5f9' : '#1e1e2f',
            border: `1px solid ${isDark ? 'rgba(159, 122, 234, 0.3)' : 'rgba(159, 122, 234, 0.2)'}`,
            backdropFilter: 'blur(10px)',
          },
        }}
      />
    </div>
  )
}

export default App
