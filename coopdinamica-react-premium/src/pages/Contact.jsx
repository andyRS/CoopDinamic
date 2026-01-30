import { useState } from 'react'
import Loader from '../components/ui/Loader'
import Header from '../components/layout/Header'
import Navigation from '../components/layout/Navigation'
import Footer from '../components/layout/Footer'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Limpiar error del campo al escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es requerido'
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Teléfono debe tener 10 dígitos'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'El asunto es requerido'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      console.log('Formulario enviado:', formData)
      setSubmitted(true)
      
      // Resetear formulario después de 3 segundos
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        })
        setSubmitted(false)
      }, 3000)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Loader />
      
      <div className="container mx-auto px-4">
        <Header />
        <Navigation />

        {/* Contact Hero */}
        <section className="py-12 bg-gradient-to-r from-coop-green to-coop-dark-green rounded-lg mb-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-white mb-4">
              <i className="fas fa-envelope mr-3"></i>
              Contáctanos
            </h1>
            <p className="text-xl text-white/90">
              Estamos aquí para ayudarte. Envíanos tu mensaje
            </p>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Formulario de Contacto
            </h2>

            {submitted && (
              <div className="mb-6 p-4 bg-green-100 border-l-4 border-green-500 text-green-700 rounded">
                <p className="font-semibold">¡Mensaje enviado exitosamente!</p>
                <p className="text-sm">Nos pondremos en contacto contigo pronto.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nombre */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none text-lg
                            ${errors.name ? 'border-red-500' : 'border-gray-300 focus:border-coop-green'}`}
                  placeholder="Ej: Juan Pérez"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none text-lg
                            ${errors.email ? 'border-red-500' : 'border-gray-300 focus:border-coop-green'}`}
                  placeholder="Ej: juan@ejemplo.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Teléfono */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none text-lg
                            ${errors.phone ? 'border-red-500' : 'border-gray-300 focus:border-coop-green'}`}
                  placeholder="Ej: 8091234567"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Asunto */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Asunto *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none text-lg
                            ${errors.subject ? 'border-red-500' : 'border-gray-300 focus:border-coop-green'}`}
                >
                  <option value="">Selecciona un asunto</option>
                  <option value="informacion">Información General</option>
                  <option value="prestamos">Préstamos</option>
                  <option value="ahorros">Ahorros</option>
                  <option value="asociarse">Cómo Asociarse</option>
                  <option value="soporte">Soporte Técnico</option>
                  <option value="quejas">Quejas y Sugerencias</option>
                </select>
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                )}
              </div>

              {/* Mensaje */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Mensaje *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none text-lg resize-none
                            ${errors.message ? 'border-red-500' : 'border-gray-300 focus:border-coop-green'}`}
                  placeholder="Escribe tu mensaje aquí..."
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-coop-green hover:bg-coop-dark-green text-white 
                         font-bold py-4 px-6 rounded-lg transition-colors text-lg"
              >
                <i className="fas fa-paper-plane mr-2"></i>
                Enviar Mensaje
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Información de Contacto
              </h2>

              <div className="space-y-6">
                {/* Dirección */}
                <div className="flex items-start">
                  <div className="bg-coop-green text-white p-3 rounded-full mr-4">
                    <i className="fas fa-map-marker-alt text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Dirección</h3>
                    <p className="text-gray-600">
                      Av. Principal #123<br />
                      Santo Domingo, República Dominicana
                    </p>
                  </div>
                </div>

                {/* Teléfono */}
                <div className="flex items-start">
                  <div className="bg-coop-green text-white p-3 rounded-full mr-4">
                    <i className="fas fa-phone text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Teléfono</h3>
                    <p className="text-gray-600">
                      +1 (809) 123-4567<br />
                      +1 (809) 987-6543
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="bg-coop-green text-white p-3 rounded-full mr-4">
                    <i className="fas fa-envelope text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">
                      info@coopdinamica.com<br />
                      servicios@coopdinamica.com
                    </p>
                  </div>
                </div>

                {/* Horario */}
                <div className="flex items-start">
                  <div className="bg-coop-green text-white p-3 rounded-full mr-4">
                    <i className="fas fa-clock text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Horario</h3>
                    <p className="text-gray-600">
                      Lunes - Viernes: 8:00 AM - 5:00 PM<br />
                      Sábado: 9:00 AM - 1:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-lg shadow-xl h-64 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <i className="fas fa-map text-6xl mb-4"></i>
                <p className="text-lg">Mapa de ubicación</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Contact
