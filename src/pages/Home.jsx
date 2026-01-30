        {/* Beneficios para hacerse socio */}
        <section className="py-16 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4">
            <h3 className="uppercase tracking-widest text-sm text-gray-500 font-semibold mb-2 text-center">Disfruta de todos estos beneficios</h3>
            <h2 className="text-4xl font-extrabold text-center mb-8 text-coop-green">¿Quieres Formar Parte De CoopDinámica?</h2>
            <p className="text-center text-gray-600 mb-12">¡Es muy fácil! Solo tienes que seguir estos pasos:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* Paso 1 */}
              <div className="flex flex-col items-center">
                <img src="/img/solicitud-formulario.png" alt="Formulario" className="w-40 h-40 object-contain mb-4" />
                <h4 className="text-xl font-bold mb-2 text-coop-blue text-center">Completa el formulario de solicitud</h4>
                <p className="text-gray-600 text-center">Puedes realizar el proceso de forma virtual o visitando con tu cédula alguna de nuestras sucursales.</p>
              </div>
              {/* Paso 2 */}
              <div className="flex flex-col items-center">
                <img src="/img/comprobante.png" alt="Comprobante" className="w-40 h-40 object-contain mb-4" />
                <h4 className="text-xl font-bold mb-2 text-coop-blue text-center">Realiza el pago del monto de apertura</h4>
                <p className="text-gray-600 text-center">Equivalente a RD$ 1,000 (RD$ 500 ahorros retirables + RD$ 500 de apertura).</p>
              </div>
              {/* Paso 3 */}
              <div className="flex flex-col items-center">
                <img src="/img/hazte-socio.png" alt="Hazte Socio" className="w-40 h-40 object-contain mb-4" />
                <h4 className="text-xl font-bold mb-2 text-coop-blue text-center">Conviértete en un socio feliz</h4>
                <p className="text-gray-600 text-center">Completa la solicitud en línea y forma parte de nuestra gran familia.</p>
              </div>
            </div>
          </div>
        </section>
import Loader from '../components/ui/Loader'
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
    <>
      <Loader />
      <Navigation />
      <div className="min-h-screen bg-gray-50 pt-24">
        {/* HERO MODERNO */}
        <section className="relative flex flex-col md:flex-row items-center justify-between gap-8 bg-white py-16 px-4 md:px-12 border-b border-gray-100">
          <div className="flex-1 max-w-xl z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold text-coop-green mb-4 leading-tight">
              ¡Cuna y Origen del <span className="text-coop-blue">Cooperativismo</span> Dominicano!
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              CoopDinámica ofrece servicios financieros y sociales en beneficio de la comunidad. Nuestra misión es fomentar el desarrollo económico y social a través de la cooperación y la solidaridad.
            </p>
            <div className="flex flex-wrap gap-4 mb-4">
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
          <div className="flex-1 flex justify-center items-center">
            <img src="/img/hero-coop.jpg" alt="Cooperativa" className="rounded-2xl shadow-xl w-full max-w-md object-cover" />
	  </div>
        </section>


        <Modal 
          isOpen={showSimulator}
          onClose={() => setShowSimulator(false)}
          title="Simulador de Préstamo"
        >
          <LoanSimulator />
        </Modal>

        {/* ¿Por Qué Hacerte Socio? - Inspirado en CoopManoguayabo */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <p className="uppercase tracking-widest text-sm text-center text-gray-500 font-semibold mb-2">Aumenta tus oportunidades en la vida con CoopDinámica</p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <h2 className="text-5xl font-extrabold text-center md:text-left mb-6 md:mb-0 text-gray-900">¿Por Qué Hacerte Socio?</h2>
              <div className="flex flex-col gap-4 md:gap-2 md:items-end">
                <Button variant="success" size="lg" className="w-full md:w-auto">Ver Testimonios</Button>
                <Button variant="success" size="lg" className="w-full md:w-auto">Ver Proveedores</Button>
              </div>
            </div>
            <hr className="my-8 border-t-2 border-gray-200" />
            <div className="text-center text-lg font-semibold text-gray-600 mb-8">Ventajas &amp; Beneficios</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              {/* Ventajas */}
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">Ventajas</h3>
                <ul className="space-y-3 text-left text-gray-700">
                  <li>✔ Ganas dinero por ahorrar</li>
                  <li>✔ Préstamos de fácil acceso</li>
                  <li>✔ Financiamiento de electrodomésticos y artículos personales</li>
                  <li>✔ Especiales de temporada</li>
                  <li>✔ Apoyo sociocultural</li>
                </ul>
              </div>
              {/* Beneficios */}
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">Beneficios</h3>
                <ul className="space-y-3 text-left text-gray-700">
                  <li>✔ Repartición de excedentes cada año</li>
                  <li>✔ Tasas de interés competitivas</li>
                  <li>✔ Amplia gama de productos y servicios financieros</li>
                  <li>✔ Asesoría y capacitación financiera</li>
                  <li>✔ Premios y recompensas por ahorro</li>
                </ul>
              </div>
              {/* Video Testimonio */}
              <div className="flex flex-col items-center justify-center">
                <iframe width="100%" height="220" src="https://www.youtube.com/embed/1QZQ2KkQ2dA" title="Testimonio Ramón Antonio Pérez" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="rounded-xl shadow-lg"></iframe>
              </div>
            </div>
          </div>
        </section>
        // ...existing code...
        {/* Productos y Servicios */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-extrabold text-center mb-4 text-coop-green">Productos y Servicios</h2>
            <p className="text-center text-gray-600 mb-12">En CoopDinámica, tenemos lo que necesitas para cumplir tus objetivos financieros y personales.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Ahorro */}
              <div>
                <img src="/img/ahorro.jpg" alt="Ahorro" className="w-full h-40 object-cover rounded-xl mb-4" />
                <h3 className="text-2xl font-bold text-coop-blue mb-2 text-center">Ahorro</h3>
                <ul className="space-y-2 text-gray-700 text-base">
                  <li>✔ Cuentas de Ahorro</li>
                  <li>✔ Ahorros Programados</li>
                  <li>✔ Certificados Financieros</li>
                  <li>✔ Ahorro Escolar</li>
                  <li>✔ Ahorro Navideño</li>
                </ul>
              </div>
              {/* Crédito */}
              <div>
                <img src="/img/credito.jpg" alt="Crédito" className="w-full h-40 object-cover rounded-xl mb-4" />
                <h3 className="text-2xl font-bold text-coop-blue mb-2 text-center">Crédito</h3>
                <ul className="space-y-2 text-gray-700 text-base">
                  <li>✔ Préstamos Expresos</li>
                  <li>✔ Hipotecarios</li>
                  <li>✔ Vehículos</li>
                  <li>✔ Educativos</li>
                  <li>✔ Empresariales</li>
                </ul>
              </div>
              {/* Servicios */}
              <div>
                <img src="/img/servicios.jpg" alt="Servicios" className="w-full h-40 object-cover rounded-xl mb-4" />
                <h3 className="text-2xl font-bold text-coop-blue mb-2 text-center">Servicios</h3>
                <ul className="space-y-2 text-gray-700 text-base">
                  <li>✔ Asesoría financiera</li>
                  <li>✔ Educación cooperativa</li>
                  <li>✔ Actividades sociales</li>
                  <li>✔ Programas de recompensas</li>
                  <li>✔ Más beneficios...</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* FAQ Section */}
        <FAQSection />
        {/* Beneficios para hacerse socio (ahora debajo del FAQ) */}
        <section className="py-16 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4">
            <h3 className="uppercase tracking-widest text-sm text-gray-500 font-semibold mb-2 text-center">Disfruta de todos estos beneficios</h3>
            <h2 className="text-4xl font-extrabold text-center mb-8 text-coop-green">¿Quieres Formar Parte De CoopDinámica?</h2>
            <p className="text-center text-gray-600 mb-12">¡Es muy fácil! Solo tienes que seguir estos pasos:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* Paso 1 */}
              <div className="flex flex-col items-center">
                <img src="/img/solicitud-formulario.png" alt="Formulario" className="w-40 h-40 object-contain mb-4" />
                <h4 className="text-xl font-bold mb-2 text-coop-blue text-center">Completa el formulario de solicitud</h4>
                <p className="text-gray-600 text-center">Puedes realizar el proceso de forma virtual o visitando con tu cédula alguna de nuestras sucursales.</p>
              </div>
              {/* Paso 2 */}
              <div className="flex flex-col items-center">
                <img src="/img/comprobante.png" alt="Comprobante" className="w-40 h-40 object-contain mb-4" />
                <h4 className="text-xl font-bold mb-2 text-coop-blue text-center">Realiza el pago del monto de apertura</h4>
                <p className="text-gray-600 text-center">Equivalente a RD$ 1,000 (RD$ 500 ahorros retirables + RD$ 500 de apertura).</p>
              </div>
              {/* Paso 3 */}
              <div className="flex flex-col items-center">
                <img src="/img/hazte-socio.png" alt="Hazte Socio" className="w-40 h-40 object-contain mb-4" />
                <h4 className="text-xl font-bold mb-2 text-coop-blue text-center">Conviértete en un socio feliz</h4>
                <p className="text-gray-600 text-center">Completa la solicitud en línea y forma parte de nuestra gran familia.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Home
