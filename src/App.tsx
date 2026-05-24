import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { useDarkMode } from '@hooks/useDarkMode'
import { initEmailJS } from '@config/emailjs.config'
import Layout from '@components/layout/Layout'

function App() {
  const { isDark } = useDarkMode()
  useEffect(() => {
    // Initialize EmailJS
    initEmailJS()
  }, [])

  return (
    <div className={isDark ? 'dark' : ''}>
      <Layout />
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          duration: 4000,
          style: {
            background: isDark ? '#1e1e2f' : '#f8f5ff',
            color: '#000000',
            border: `1px solid ${isDark ? 'rgba(159, 122, 234, 0.3)' : 'rgba(159, 122, 234, 0.2)'}`,
            backdropFilter: 'blur(10px)',
          },
        }}
      />
    </div>
  )
}

export default App
