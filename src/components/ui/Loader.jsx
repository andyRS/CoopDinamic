import { useEffect, useState } from 'react'

const Loader = () => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed w-screen h-screen bg-[#f3f3f3] z-[9999] flex items-center justify-center transition-all duration-[1500ms]">
      <div className="relative w-10 h-10 text-[13px] text-coop-blue rounded-full animate-loader
                      before:content-[''] before:absolute before:top-0 before:left-[-3.5em] before:w-10 before:h-10 
                      before:rounded-full before:animate-loader before:delay-[-320ms]
                      after:content-[''] after:absolute after:top-0 after:left-[3.5em] after:w-10 after:h-10 
                      after:rounded-full after:animate-loader">
      </div>
    </div>
  )
}

export default Loader
