import Accordion from '../ui/Accordion'

const FAQSection = () => {
  const faqItems = [
    {
      title: '¿Qué es una Cooperativa?',
      content: (
        <p>
          Una cooperativa es una empresa de propiedad conjunta, democráticamente controlada. 
          Una empresa cooperativa es un negocio por su propia personalidad que pertenece y es 
          controlada por las personas que utilizan los productos, suministros y servicios que 
          esta provee. A diferencia de otras empresas, las cooperativas entregan retornos a sus 
          miembros. Los retornos de una Cooperativa pueden ser en especie, es decir, en la misma 
          naturaleza del producto de los servicios producidos por la misma.
        </p>
      ),
    },
    {
      title: '¿Cuáles son los valores de las cooperativas?',
      content: (
        <div>
          <p className="mb-3">Los valores cooperativos incluyen:</p>
          <p className="mb-2">• <strong>Ayuda mutua:</strong> Nuestra responsabilidad como miembros es contribuir equitativamente y controlar democráticamente el capital de su cooperativa.</p>
          <p className="mb-2">• <strong>Responsabilidad propia:</strong> Cada persona debe de demostrar su responsabilidad propia, actuando con autonomía y libre albedrío.</p>
          <p className="mb-2">• <strong>Democracia:</strong> Nuestros miembros tienen igual derecho al voto (un socio, un voto) sin importar su aportación.</p>
          <p className="mb-2">• <strong>Igualdad:</strong> Independientemente del origen, raza, sexo, religión todos los miembros tienen los mismos derechos y obligaciones.</p>
          <p className="mb-2">• <strong>Equidad:</strong> Es la virtud de la aplicación de la justicia en nuestras acciones. Equilibrio o imparcialidad con criterio propio.</p>
          <p>• <strong>Solidaridad:</strong> Nuestros miembros creen en un mundo justo en el cual reine el bienestar económico de todas las personas.</p>
        </div>
      ),
    },
    {
      title: '¿Qué es un socio estratégico de una cooperativa?',
      content: (
        <p>
          Los <strong>Socios estratégicos</strong>, son aquellos que no son socios a través del proceso normal 
          de afiliación. Sin embargo, se cuentan para ser parte de la cooperativa a través de su capacidad de 
          pago con inversiones desde <strong>RD$50,000</strong> hasta sumas ilimitadas. Socios Estratégicos son 
          considerados socios estratégicos, en vista de que muestran su confianza en la Cooperativa, haciendo 
          aportes que fortalecen el patrimonio cooperativo, lo cual nos permite disponer de fondos propios para 
          prestarlos a los socios que necesitan recursos.
        </p>
      ),
    },
    {
      title: '¿Cómo la cooperativa consigue dinero para prestarnos?',
      content: (
        <div>
          <p className="mb-3">
            • La primera fuente de recursos o fondos que obtiene la cooperativa son los aportes, que equivalen 
            a lo que serían "acciones" en una empresa comercial. Por eso al afiliarse se exigen RD$1,000 de 
            aportes y luego RD$700.00 mensuales, que incluyen RD$500 de aportes y el resto de ahorros.
          </p>
          <p className="mb-3">
            • La segunda fuente de fondos, son los "Bonos de Capitalización", estos bonos tienen la intención 
            de acelerar la disponibilidad de fondos para prestarlo a los socios, en vista de la lentitud natural 
            en la captación de los aportes. Estos bonos pagan un 6% anual y no penalizamos al socio cuando decide 
            liquidarlos antes de los 6 meses o el año, que se asume cuando son creados.
          </p>
          <p className="mb-3">
            • La tercera fuente de recursos, son los "Bonos CFCD", que son unos bonos en múltiplos de RD$650,000. 
            Con un mínimo de duración de 6 meses renovables, con tasas que parten del 12% hasta un 20% anual, 
            dependiendo del volumen que acumule cada socio en su cartera de inversión.
          </p>
          <p className="mb-3">
            • La cuarta fuente de fondos, proviene de los excedentes de nuestras operaciones entre lo que pagamos 
            por los ahorros, el costo de nuestras operaciones y lo que cobramos a nuestros socios y clientes.
          </p>
          <p>• No hemos recibido donaciones directas, aún.</p>
        </div>
      ),
    },
    {
      title: '¿Qué es un Bono de capitalización?',
      content: (
        <p>
          • Es un bono especial, múltiplo de RD$10,000, similar a un certificado financiero, que se emite 
          por periodos de 6 meses a un año. Sirve para acelerar la disponibilidad de capital de trabajo 
          para prestar a nuestros socios.
        </p>
      ),
    },
    {
      title: '¿Cuánto me pagan por un bono de $10,000?',
      content: (
        <p>• A la fecha estamos pagando un 6% anual por estos bonos.</p>
      ),
    },
    {
      title: '¿Para grandes préstamos, cómo consigue fondos la cooperativa?',
      content: (
        <p>
          • Creamos unos Bonos Especiales, en múltiplos de RD$650,000. A un mínimo de 6 meses, renovable 
          y premiamos el cúmulo de estos Bonos, luego de acumular más de 4 Bonos, se incrementan las tasas 
          anuales. Los intereses se pagan mensualmente, pero en una cuenta de ahorros en la misma cooperativa, 
          condicionado a solo retirar el 80% de los intereses acumulados, al cumplir 61 días de haberlos pagado.
        </p>
      ),
    },
    {
      title: '¿Cuándo ha habido crisis, por qué la cooperativa no nos exonera de las cuotas o de los intereses?',
      content: (
        <div>
          <p className="mb-3">
            • La cooperativa no recibe donaciones del Estado, ni de los socios. Tiene una primera responsabilidad 
            que es cuidar los ahorros y depósitos de los socios. Pagando religiosamente los intereses que ganen 
            los mismos por sus depósitos y bonos.
          </p>
          <p className="mb-3">
            • La segunda responsabilidad es "cubrir los costos de sus operaciones": <strong>Local, Software, 
            internet, empleados, costos financieros, costos bancarios, etc.</strong> No solo cubrir estos costos, 
            sino generar excedentes o ganancias para capitalizarnos o para distribuir entre los socios.
          </p>
          <p className="mb-3">
            • Entonces, si nosotros exoneráramos los intereses que son los recursos con que se pagan los intereses 
            y los costos operacionales, pondríamos en crisis financiera a la empresa de todos que es la cooperativa.
          </p>
          <p>
            • <strong>En pocas palabras:</strong> De los intereses que cobramos, es que pagamos los intereses 
            de los socios que ahorran; los salarios de empleados, local, Sw, comunicación, etc.
          </p>
        </div>
      ),
    },
    {
      title: '¿Con ingresos mínimos se puede ahorrar?',
      content: (
        <p>
          Sí, se puede. Si nos lo proponemos, con cualquier ingreso se pueden ahorrar doscientos a cuatrocientos 
          pesos al mes, no importa el sacrificio. Ya que el primer obstáculo para el ahorro es crear el hábito, 
          la consistencia, la perseverancia. Luego que ya lo has hecho durante un año, entonces se van creando 
          estímulos a metas mayores, se le da un nombre o un propósito a dicho ahorro.
        </p>
      ),
    },
  ]

  return (
    <section id="porque-asociarse" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Preguntas Frecuentes
        </h2>
        <Accordion items={faqItems} />
      </div>
    </section>
  )
}

export default FAQSection
