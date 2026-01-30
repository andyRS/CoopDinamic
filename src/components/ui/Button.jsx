import { motion } from 'framer-motion'
import { useState } from 'react'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  loading = false,
  icon,
  onClick,
  className = '',
  fullWidth = false,
  ...props 
}) => {
  const [ripples, setRipples] = useState([])

  const variants = {
    primary: 'bg-gradient-to-r from-coop-green to-coop-dark-green text-white hover:shadow-2xl hover:shadow-coop-green/50',
    secondary: 'bg-white dark:bg-dark-card text-coop-green border-2 border-coop-green hover:bg-coop-green hover:text-white',
    outline: 'border-2 border-coop-green text-coop-green bg-white hover:bg-coop-green hover:text-white',
    ghost: 'hover:bg-coop-green/10 text-coop-green',
    danger: 'bg-error text-white hover:shadow-lg hover:shadow-error/50',
    success: 'bg-success text-white hover:shadow-lg hover:shadow-success/50',
    cta: 'bg-yellow-400 text-gray-900 hover:bg-yellow-300 hover:shadow-2xl hover:shadow-yellow-400/50',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl font-bold',
  }

  const handleClick = (e) => {
    if (loading) return

    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const newRipple = { x, y, id: Date.now() }
    setRipples([...ripples, newRipple])
    setTimeout(() => {
      setRipples(ripples => ripples.filter(r => r.id !== newRipple.id))
    }, 600)

    onClick?.(e)
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      disabled={loading}
      className={`
        relative overflow-hidden font-semibold rounded-lg
        transition-all duration-300 
        focus:outline-none focus:ring-4 focus:ring-coop-green/20
        disabled:opacity-50 disabled:cursor-not-allowed
        flex items-center justify-center gap-2
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      {...props}
    >
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full animate-ripple pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 20,
            height: 20,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}

      {loading && (
        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}

      {icon && !loading && <span>{icon}</span>}
      <span>{children}</span>
    </motion.button>
  )
}

export default Button
