import Loader from '../components/ui/Loader'
import Header from '../components/layout/Header'
import Navigation from '../components/layout/Navigation'
import Footer from '../components/layout/Footer'

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: 'Beneficios de Ahorrar en una Cooperativa',
      excerpt: 'Descubre cómo el ahorro cooperativo puede transformar tu futuro financiero...',
      image: '/img/1.jpg',
      date: '15 Enero 2024',
      category: 'Finanzas',
    },
    {
      id: 2,
      title: 'Guía Completa de Préstamos Hipotecarios',
      excerpt: 'Todo lo que necesitas saber antes de solicitar tu préstamo hipotecario...',
      image: '/img/2.jpg',
      date: '10 Enero 2024',
      category: 'Préstamos',
    },
    {
      id: 3,
      title: 'Educación Financiera para Jóvenes',
      excerpt: 'Consejos prácticos para comenzar tu camino hacia la independencia financiera...',
      image: '/img/3.jpg',
      date: '5 Enero 2024',
      category: 'Educación',
    },
    {
      id: 4,
      title: 'Certificados Financieros: Una Inversión Segura',
      excerpt: 'Conoce las ventajas de invertir en certificados financieros con CoopDinámica...',
      image: '/img/4.jpg',
      date: '28 Diciembre 2023',
      category: 'Inversiones',
    },
    {
      id: 5,
      title: 'Préstamos para Emprendedores',
      excerpt: 'Impulsa tu negocio con nuestras soluciones de financiamiento empresarial...',
      image: '/img/5.jpg',
      date: '20 Diciembre 2023',
      category: 'Negocios',
    },
    {
      id: 6,
      title: 'Planificación Financiera Familiar',
      excerpt: 'Estrategias efectivas para administrar las finanzas del hogar...',
      image: '/img/6.jpg',
      date: '15 Diciembre 2023',
      category: 'Familia',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Loader />
      
      <div className="container mx-auto px-4">
        <Header />
        <Navigation />

        {/* Blog Hero */}
        <section className="py-12 bg-gradient-to-r from-coop-green to-coop-dark-green rounded-lg mb-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-white mb-4">Blog CoopDinámica</h1>
            <p className="text-xl text-white/90">
              Noticias, consejos y recursos para tu bienestar financiero
            </p>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <article 
                  key={article.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl 
                           transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden h-48">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-coop-green text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <i className="far fa-calendar-alt mr-2"></i>
                      {article.date}
                    </div>
                    
                    <h2 className="text-2xl font-bold mb-3 text-gray-800 hover:text-coop-green 
                                 transition-colors cursor-pointer">
                      {article.title}
                    </h2>
                    
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {article.excerpt}
                    </p>
                    
                    <a 
                      href="#" 
                      className="inline-flex items-center text-coop-green font-semibold 
                               hover:text-coop-dark-green transition-colors"
                    >
                      Leer más 
                      <i className="fas fa-arrow-right ml-2"></i>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Sidebar */}
        <section className="py-8 bg-gray-50 rounded-lg mb-12">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Categorías</h3>
            <div className="flex flex-wrap gap-3">
              {['Finanzas', 'Préstamos', 'Educación', 'Inversiones', 'Negocios', 'Familia'].map((cat) => (
                <button
                  key={cat}
                  className="px-4 py-2 bg-white border-2 border-gray-200 rounded-full
                           hover:border-coop-green hover:text-coop-green transition-all
                           font-semibold text-gray-700"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}

export default Blog
