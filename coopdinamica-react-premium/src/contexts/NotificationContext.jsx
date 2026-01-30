import { createContext, useContext } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const NotificationContext = createContext()

export const useNotification = () => {
  const context = useContext(NotificationContext)
  if (!context) {
    throw new Error('useNotification must be used within NotificationProvider')
  }
  return context
}

export const NotificationProvider = ({ children }) => {
  const notify = {
    success: (message, options = {}) => {
      toast.success(message, {
        duration: 4000,
        position: 'top-right',
        icon: '✅',
        style: {
          background: '#10b981',
          color: '#fff',
          fontWeight: '600',
          padding: '16px',
          borderRadius: '12px',
        },
        ...options,
      })
    },

    error: (message, options = {}) => {
      toast.error(message, {
        duration: 4000,
        position: 'top-right',
        icon: '❌',
        style: {
          background: '#ef4444',
          color: '#fff',
          fontWeight: '600',
          padding: '16px',
          borderRadius: '12px',
        },
        ...options,
      })
    },

    warning: (message, options = {}) => {
      toast(message, {
        duration: 4000,
        position: 'top-right',
        icon: '⚠️',
        style: {
          background: '#f59e0b',
          color: '#fff',
          fontWeight: '600',
          padding: '16px',
          borderRadius: '12px',
        },
        ...options,
      })
    },

    info: (message, options = {}) => {
      toast(message, {
        duration: 4000,
        position: 'top-right',
        icon: 'ℹ️',
        style: {
          background: '#3b82f6',
          color: '#fff',
          fontWeight: '600',
          padding: '16px',
          borderRadius: '12px',
        },
        ...options,
      })
    },

    loading: (message) => {
      return toast.loading(message, {
        position: 'top-right',
        style: {
          background: '#6b7280',
          color: '#fff',
          fontWeight: '600',
          padding: '16px',
          borderRadius: '12px',
        },
      })
    },

    dismiss: (toastId) => {
      toast.dismiss(toastId)
    },

    promise: (promise, messages) => {
      return toast.promise(
        promise,
        {
          loading: messages.loading || 'Cargando...',
          success: messages.success || '✅ Completado',
          error: messages.error || '❌ Error',
        },
        {
          position: 'top-right',
          style: {
            fontWeight: '600',
            padding: '16px',
            borderRadius: '12px',
          },
        }
      )
    },
  }

  return (
    <NotificationContext.Provider value={notify}>
      <Toaster 
        toastOptions={{
          className: 'custom-scrollbar',
        }}
      />
      {children}
    </NotificationContext.Provider>
  )
}
