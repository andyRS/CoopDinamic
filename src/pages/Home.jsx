import { useState } from 'react'
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
              <Button variant="outline" size="xl">
                ✅ Hazte Socio
              </Button>
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
        <section className="py-20 bg-gradient-to-br from-white via-coop-light-green/10 to-coop-green/5 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <ellipse cx="600" cy="100" rx="180" ry="60" fill="#09a33722" />
              <ellipse cx="200" cy="350" rx="120" ry="40" fill="#4685fa22" />
            </svg>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <p className="uppercase tracking-widest text-sm text-center text-coop-green font-semibold mb-2 animate-fade-in">
              Aumenta tus oportunidades en la vida con CoopDinámica
            </p>

            <h2 className="text-5xl font-extrabold text-center mb-16 text-gray-900 animate-fade-in">
              ¿Por Qué Hacerte Socio?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="bg-white/80 rounded-xl shadow-lg p-6 animate-slide-up">
                  <h3 className="text-2xl font-bold mb-4 text-coop-blue flex items-center gap-2">
                    <span>🌱</span> Ventajas
                  </h3>
                  <ul className="space-y-3 text-gray-700 text-lg">
                    <li className="flex items-center gap-2"><span className="text-coop-green">✔</span> Ganas dinero por ahorrar</li>
                    <li className="flex items-center gap-2"><span className="text-coop-green">✔</span> Préstamos de fácil acceso</li>
                    <li className="flex items-center gap-2"><span className="text-coop-green">✔</span> Financiamiento de bienes</li>
                    <li className="flex items-center gap-2"><span className="text-coop-green">✔</span> Especiales de temporada</li>
                    <li className="flex items-center gap-2"><span className="text-coop-green">✔</span> Apoyo sociocultural</li>
                  </ul>
                </div>

                <div className="bg-white/80 rounded-xl shadow-lg p-6 animate-slide-up delay-100">
                  <h3 className="text-2xl font-bold mb-4 text-coop-blue flex items-center gap-2">
                    <span>🎁</span> Beneficios
                  </h3>
                  <ul className="space-y-3 text-gray-700 text-lg">
                    <li className="flex items-center gap-2"><span className="text-coop-green">✔</span> Repartición de excedentes</li>
                    <li className="flex items-center gap-2"><span className="text-coop-green">✔</span> Tasas competitivas</li>
                    <li className="flex items-center gap-2"><span className="text-coop-green">✔</span> Amplia gama de productos</li>
                    <li className="flex items-center gap-2"><span className="text-coop-green">✔</span> Educación financiera</li>
                    <li className="flex items-center gap-2"><span className="text-coop-green">✔</span> Premios por ahorro</li>
                  </ul>
                </div>
              </div>

              <div className="flex justify-center animate-fade-in">
                <img
                  src="/img/familia_real.webp"
                  alt="Familia socia de CoopDinámica"
                  className="w-full max-w-md rounded-2xl shadow-2xl border-4 border-coop-green/20"
                  loading="lazy"
                />
              </div>
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
