import Accordion from '../ui/Accordion'

const FAQSection = () => {
  const faqItems = [
    {
      title: '¿Qué es una cooperativa?',
      content: (
        <p className="font-montserrat text-base md:text-lg leading-relaxed text-gray-800">
          Una cooperativa es una empresa de propiedad conjunta y control democrático. Es un negocio que pertenece y es gestionado por las personas que utilizan sus productos y servicios. A diferencia de otras empresas, las cooperativas reparten beneficios a sus miembros, ya sea en efectivo o en especie, según los servicios que ofrece.
        </p>
      ),
    },
    {
      title: '¿Cuáles son los valores de las cooperativas?',
      content: (
        <div className="font-montserrat text-base md:text-lg text-gray-800">
          <p className="mb-3">Los valores cooperativos incluyen:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Ayuda mutua:</strong> Contribuir y controlar democráticamente el capital de la cooperativa.</li>
            <li><strong>Responsabilidad propia:</strong> Actuar con autonomía y compromiso personal.</li>
            <li><strong>Democracia:</strong> Todos los miembros tienen igual derecho al voto (un socio, un voto).</li>
            <li><strong>Igualdad:</strong> Todos los miembros tienen los mismos derechos y obligaciones, sin distinción.</li>
            <li><strong>Equidad:</strong> Aplicar la justicia de manera imparcial y equilibrada.</li>
            <li><strong>Solidaridad:</strong> Buscar el bienestar económico y social de todos los miembros.</li>
          </ul>
        </div>
      ),
    },
    {
      title: '¿Qué es un socio estratégico de una cooperativa?',
      content: (
        <p className="font-montserrat text-base md:text-lg leading-relaxed text-gray-800">
          Los <strong>socios estratégicos</strong> son personas que, sin pasar por el proceso tradicional de afiliación, forman parte de la cooperativa mediante inversiones desde <strong>RD$50,000</strong> en adelante. Su confianza y aportes fortalecen el patrimonio cooperativo, permitiendo disponer de más fondos para préstamos a los socios.
        </p>
      ),
    },
    {
      title: '¿Cómo obtiene la cooperativa dinero para prestar?',
      content: (
        <div className="font-montserrat text-base md:text-lg text-gray-800 space-y-2">
          <ul className="list-decimal pl-6 space-y-1">
            <li>Los <strong>aportes</strong> de los socios, similares a acciones en una empresa comercial. Al afiliarse, se requieren RD$1,000 de aportes iniciales y luego RD$700 mensuales (RD$500 de aportes y el resto en ahorros).</li>
            <li>Los <strong>Bonos de Capitalización</strong>, que aceleran la disponibilidad de fondos para préstamos. Pagan un 6% anual y pueden liquidarse sin penalidad antes de 6 meses o un año.</li>
            <li>Los <strong>Bonos CFCD</strong>, en múltiplos de RD$650,000, con duración mínima de 6 meses y tasas de 12% a 20% anual, según el volumen de inversión.</li>
            <li>Los <strong>excedentes</strong> de las operaciones, es decir, la diferencia entre lo que se paga por ahorros, los costos operativos y lo que se cobra a socios y clientes.</li>
            <li>No se han recibido donaciones directas hasta la fecha.</li>
          </ul>
        </div>
      ),
    },
    {
      title: '¿Qué es un bono de capitalización?',
      content: (
        <p className="font-montserrat text-base md:text-lg leading-relaxed text-gray-800">
          Es un bono especial, en múltiplos de RD$10,000, similar a un certificado financiero, emitido por periodos de 6 meses a un año. Sirve para aumentar el capital de trabajo disponible para préstamos a los socios.
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
