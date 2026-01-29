const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white pt-12 pb-6 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo y Descripción */}
          <div className="box__footer">
            <div className="mb-4">
              <h5 className="text-2xl font-bold text-coop-green">CoopDinámica</h5>
            </div>
            <div className="text-gray-300 leading-relaxed">
              <p>
                Somos la Cooperativa de Ahorros, Crédito y servicios múltiples la dinámica. 
                Tenemos más de 10 años siendo elegibles para todos, siendo una de las cooperativas 
                más confiables, seguras y donde valoramos tu dinero.
              </p>
            </div>
          </div>

          {/* Menú */}
          <div className="box__footer">
            <h5 className="text-xl font-bold mb-4">Menú</h5>
            <hr className="border-coop-green border-t-2 w-16 mb-4" />
            <div className="flex flex-col space-y-2">
              <a href="#inicio" className="text-gray-300 hover:text-coop-green transition-colors">Inicio</a>
              <a href="#" className="text-gray-300 hover:text-coop-green transition-colors">Para ti</a>
              <a href="#" className="text-gray-300 hover:text-coop-green transition-colors">Para tu negocio</a>
              <a href="/blog" className="text-gray-300 hover:text-coop-green transition-colors">Blog</a>
              <a href="#" className="text-gray-300 hover:text-coop-green transition-colors">¿Por qué asociarse?</a>
              <a href="#" className="text-gray-300 hover:text-coop-green transition-colors">Prensa</a>
              <a href="/formulario" className="text-gray-300 hover:text-coop-green transition-colors">Contacto</a>
            </div>
          </div>

          {/* Redes Sociales */}
          <div className="box__footer">
            <h5 className="text-xl font-bold mb-4">Redes Sociales</h5>
            <hr className="border-coop-green border-t-2 w-16 mb-4" />
            <div className="flex flex-col space-y-3">
              <a href="#" className="flex items-center text-gray-300 hover:text-coop-green transition-colors">
                <i className="fab fa-facebook-square mr-3 text-xl"></i> Facebook
              </a>
              <a href="#" className="flex items-center text-gray-300 hover:text-coop-green transition-colors">
                <i className="fab fa-twitter-square mr-3 text-xl"></i> Twitter
              </a>
              <a href="#" className="flex items-center text-gray-300 hover:text-coop-green transition-colors">
                <i className="fab fa-linkedin mr-3 text-xl"></i> LinkedIn
              </a>
              <a href="#" className="flex items-center text-gray-300 hover:text-coop-green transition-colors">
                <i className="fab fa-instagram-square mr-3 text-xl"></i> Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            Todos los derechos reservados © 2022 <b className="text-white">Andy Rosado Design Web | Cooperativa Dinámica 2022 ©</b>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
