import { motion } from 'framer-motion'

const Card = ({ 
  children, 
  hover = true,
  className = '',
  onClick,
  ...props 
}) => {
  return (
    <motion.div
      whileHover={hover ? { y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' } : {}}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className={`
        bg-white dark:bg-dark-card rounded-xl p-6
        shadow-lg border border-gray-100 dark:border-gray-700
        transition-all duration-300
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default Card
