import { useState, Link } from 'react'
import Loader from '../components/ui/Loader'
import Navigation from '../components/layout/NavigationModern'
import Footer from '../components/layout/Footer'
import Button from '../components/ui/Button'
import Modal from '../components/ui/Modal'
import LoanSimulator from '../components/features/LoanSimulator'
import FAQSection from '../components/features/FAQSection'

const Home = () => {
  const [showSimulator, setShowSimulator] = useState(false)

  return (
    <>
      <Loader />
      <Navigation />

      <div className="min-h-screen bg-gray-50 pt-24">

        {/* ================= HERO ================= */}
        <section className="relative flex flex-col md:flex-row items-center justify-between gap-10 bg-white py-16 px-4 md:px-12 border-b border-gray-100">
          <div className="flex-1 max-w-xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-coop-green mb-4 leading-tight">
              ¡Cuna y Origen del{' '}
              <span className="text-coop-blue">Cooperativismo</span> Dominicano!
            </h1>

            <p className="text-lg md:text-xl text-gray-700 mb-6">
              CoopDinámica ofrece servicios financieros y sociales en beneficio
              de la comunidad, fomentando el desarrollo económico y social a
              través de la cooperación y la solidaridad.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="cta" size="xl" onClick={() => setShowSimulator(true)}>
                🧮 Simular Crédito
              </Button>
              <Link to="/hazte-socio">
                <Button variant="outline" size="xl">
                  ✅ Hazte Socio
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex-1">
            <img
              src="/img/hero-coopdinamica.webp"
              alt="Cooperativismo Dominicano"
              className="w-full h-full object-cover rounded-2xl shadow-xl"
            />
          </div>
        </section>

        {/* ================= MODAL SIMULADOR ================= */}
        <Modal
          isOpen={showSimulator}
          onClose={() => setShowSimulator(false)}
          title="Simulador de Préstamo"
        >
          <LoanSimulator />
        </Modal>

        {/* ================= POR QUÉ HACERTE SOCIO ================= */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <p className="uppercase tracking-widest text-sm text-center text-gray-500 font-semibold mb-2">
              Aumenta tus oportunidades en la vida con CoopDinámica
            </p>

            <h2 className="text-5xl font-extrabold text-center mb-16 text-gray-900">
              ¿Por Qué Hacerte Socio?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-2xl font-bold mb-4 text-black">Ventajas</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✔ Ganas dinero por ahorrar</li>
                    <li>✔ Préstamos de fácil acceso</li>
                    <li>✔ Financiamiento de bienes</li>
                    <li>✔ Especiales de temporada</li>
                    <li>✔ Apoyo sociocultural</li>
                  </ul>
                </div>

                <div>
                    <h3 className="text-2xl font-bold mb-4 text-black">Beneficios</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✔ Repartición de excedentes</li>
                    <li>✔ Tasas competitivas</li>
                    <li>✔ Amplia gama de productos</li>
                    <li>✔ Educación financiera</li>
                    <li>✔ Premios por ahorro</li>
                  </ul>
                </div>
              </div>

              <img
                src="/img/familia_real.webp"
                alt="Familia socia de CoopDinámica"
                className="w-full rounded-2xl shadow-xl"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* ================= PRODUCTOS Y SERVICIOS ================= */}
        <section className="py-16 bg-white border-t border-gray-100">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-extrabold text-center mb-4 text-coop-green">
      Productos y Servicios
    </h2>

    <p className="text-center text-gray-600 mb-12">
      Todo lo que necesitas para cumplir tus objetivos financieros.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          title: 'Ahorros',
          img: '/img/ahorro.webp',
          items: [
            'Cuentas de Ahorros',
            'Ahorros Programados',
            'Certificados Financieros',
            'Ahorro Escolar',
            'Ahorro Navideño'
          ]
        },
        {
          title: 'Crédito',
          img: '/img/credito.webp',
          items: [
            'Préstamos Expresos',
            'Hipotecarios',
            'Vehículos',
            'Educativos',
            'Empresariales'
          ]
        },
        {
          title: 'Servicios',
          img: '/img/servicios.webp',
          items: [
            'Asesoría financiera',
            'Educación cooperativa',
            'Actividades sociales',
            'Programas de recompensas',
            'Más beneficios'
          ]
        }
      ].map((card, i) => (
        <div
          key={i}
          className="
            bg-white
            rounded-2xl
            border border-gray-100
            shadow-md
            hover:shadow-xl
            hover:-translate-y-1
            transition-all
            duration-300
            overflow-hidden
          "
        >
          {/* Imagen bien adaptada */}
          <div className="bg-gray-50">
            <img
              src={card.img}
              alt={card.title}
              className="
                w-full
                h-48
                object-contain
                px-6
                py-4
              "
              loading="lazy"
            />
          </div>

          <div className="border-b border-gray-100" />

          {/* Contenido */}
          <div className="p-6">
            <h3 className="text-2xl font-bold text-center text-coop-blue mb-4">
              {card.title}
            </h3>

            <ul className="space-y-2 text-gray-700 text-sm">
              {card.items.map((item, idx) => (
                <li key={idx}>✔ {item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

        {/* ================= FAQ ================= */}
        <FAQSection />

        {/* ================= PASOS PARA AFILIARTE ================= */}
        <section className="py-16 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-4">
            <h3 className="uppercase tracking-widest text-sm text-gray-500 font-semibold mb-2 text-center">
              Afíliate en pocos pasos
            </h3>

            <h2 className="text-4xl font-extrabold text-center mb-12 text-coop-green">
              ¿Quieres Formar Parte De CoopDinámica?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: 1,
                  img: '/img/step-form.webp',
                  title: 'Completa el formulario',
                  text: 'Realiza el proceso en línea o visita una de nuestras sucursales.'
                },
                {
                  step: 2,
                  img: '/img/step-payment.webp',
                  title: 'Realiza el pago de apertura',
                  text: 'RD$1,000 (RD$500 ahorros + RD$500 apertura).'
                },
                {
                  step: 3,
                  img: '/img/step-member.webp',
                  title: 'Conviértete en socio',
                  text: 'Forma parte de nuestra gran familia cooperativa.'
                }
              ].map((step, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition text-center"
                >
                  <div className="w-10 h-10 mx-auto mb-6 rounded-full bg-coop-green text-white flex items-center justify-center font-bold">
                    {step.step}
                  </div>

                  <img
                    src={step.img}
                    alt={step.title}
                    className="w-44 h-44 mx-auto mb-6 object-contain"
                    loading="lazy"
                  />

                  <h4 className="text-xl font-bold text-coop-blue mb-2">
                    {step.title}
                  </h4>

                  <p className="text-gray-600">{step.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-center gap-4 flex-wrap">
              <Button variant="cta" size="xl">
                ✅ Hazte Socio
              </Button>
              <Button variant="outline" size="xl" onClick={() => setShowSimulator(true)}>
                🧮 Simular Crédito
              </Button>
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </>
  )
}

export default Home
