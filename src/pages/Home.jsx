import Loader from '../components/ui/Loader'
import Header from '../components/layout/Header'
import Navigation from '../components/layout/NavigationModern'
import Footer from '../components/layout/Footer'
import { useState } from 'react'
import Button from '../components/ui/Button'
import Modal from '../components/ui/Modal'
import LoanSimulator from '../components/features/LoanSimulator'
import ServicesCarousel from '../components/features/ServicesCarousel'
import FAQSection from '../components/features/FAQSection'


const Home = () => {
  const [showSimulator, setShowSimulator] = useState(false)
  return (
    <div className="min-h-screen bg-white">
      <Loader />
      <div className="container mx-auto px-4">
        <Header />
        <Navigation />

        {/* Hero personalizado con botones y modal */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-coop-green via-coop-dark-green to-blue-900">
          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Tu cooperativa digital,
              <br />
              <span className="text-yellow-300">simple y segura</span>
            </h1>
            <p className="text-xl mb-12">
              Solicita créditos en minutos. Sin papeleos, sin esperas.
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                variant="cta" 
                size="xl"
                onClick={() => setShowSimulator(true)}
              >
                🧮 Simular Crédito
              </Button>
              <Button size="xl" variant="outline">
                ✅ Hazte Socio
              </Button>
            </div>
          </div>
        </section>

        <Modal 
          isOpen={showSimulator}
          onClose={() => setShowSimulator(false)}
          title="Simulador de Préstamo"
        >
          <LoanSimulator />
        </Modal>

        {/* Services Section */}
        <ServicesCarousel />
        {/* Why Join Section */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
              ¿Por qué asociarse a CoopDinámica?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Card 1 */}
              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="text-center mb-6">
                  <i className="fas fa-shield-alt text-6xl text-coop-green"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">Seguridad</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Más de 10 años ofreciendo servicios financieros confiables y seguros a nuestros socios.
                </p>
              </div>
              {/* Card 2 */}
              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="text-center mb-6">
                  <i className="fas fa-users text-6xl text-coop-green"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">Comunidad</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Somos una cooperativa que valora a sus miembros y trabaja por el bienestar de todos.
                </p>
              </div>
              {/* Card 3 */}
              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="text-center mb-6">
                  <i className="fas fa-chart-line text-6xl text-coop-green"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">Crecimiento</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Tasas competitivas y soluciones financieras que se adaptan a tus necesidades.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* News Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
              Noticias y Eventos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* News Card 1 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src="/img/avanza-idecop.jpeg" 
                  alt="IDECOOP" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Certificación IDECOOP</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    CoopDinámica ha sido certificada por IDECOOP, consolidando nuestro compromiso 
                    con la excelencia y transparencia.
                  </p>
                  <a href="#" className="text-coop-green font-semibold hover:text-coop-dark-green">
                    Leer más →
                  </a>
                </div>
              </div>
              {/* News Card 2 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src="/img/certificaciones808-Coop.jpg" 
                  alt="Certificaciones" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Nuevas Certificaciones</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Orgullosamente certificados bajo los estándares internacionales de calidad 
                    cooperativa ISO 808.
                  </p>
                  <a href="#" className="text-coop-green font-semibold hover:text-coop-dark-green">
                    Leer más →
                  </a>
                </div>
              </div>
              {/* News Card 3 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src="/img/apertura.jpg" 
                  alt="Apertura" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Nuevas Oficinas</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Expandimos nuestros servicios con la apertura de nuevas oficinas para 
                    servirte mejor.
                  </p>
                  <a href="#" className="text-coop-green font-semibold hover:text-coop-dark-green">
                    Leer más →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* FAQ Section */}
        <FAQSection />
      </div>
      <Footer />
    </div>
  )
}

export default Home
