const ContactForm = () => (
  <section className="mx-auto max-w-6xl px-4 py-12">
    <h2 className="mb-8 text-2xl font-robotoBold text-brandGreen sm:text-3xl">Formulario de contacto</h2>
    <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
      <div className="space-y-6 rounded-2xl bg-white p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <i className="fas fa-map-marker-alt text-xl text-brandGreen" />
          <p className="text-sm text-[#63717f]">Av. 26 de Julio Nro. 8 Cuidad - Pais</p>
        </div>
        <div className="flex items-start gap-4">
          <i className="fas fa-envelope text-xl text-brandGreen" />
          <p className="text-sm text-[#63717f]">coopdinamica@correo.com</p>
        </div>
        <div className="flex items-start gap-4">
          <i className="fas fa-phone text-xl text-brandGreen" />
          <p className="text-sm text-[#63717f]">(+1) 809-455-2020 · (+1) 809-555-3030</p>
        </div>
        <div className="flex gap-4 text-brandMenu">
          <a className="hover:text-brandMenuHover" href="#">
            <i className="fab fa-facebook" />
          </a>
          <a className="hover:text-brandMenuHover" href="#">
            <i className="fab fa-twitter" />
          </a>
          <a className="hover:text-brandMenuHover" href="#">
            <i className="fab fa-instagram" />
          </a>
        </div>
      </div>
      <form className="grid gap-4 rounded-2xl bg-white p-6 shadow-lg" id="formulario">
        <label className="text-sm font-semibold text-brandGreen" htmlFor="nombre">
          Nombre
        </label>
        <input
          className="rounded-lg border border-[#333] px-4 py-3 text-sm placeholder:text-[#63717f] focus:border-brandGreen focus:outline-none"
          id="nombre"
          name="nombre"
          placeholder="Nombre"
          type="text"
        />
        <label className="text-sm font-semibold text-brandGreen" htmlFor="cedula">
          Cédula
        </label>
        <input
          className="rounded-lg border border-[#333] px-4 py-3 text-sm placeholder:text-[#63717f] focus:border-brandGreen focus:outline-none"
          id="cedula"
          name="cedula"
          placeholder="Cédula sin guiones"
          type="text"
        />
        <label className="text-sm font-semibold text-brandGreen" htmlFor="correo">
          Correo electrónico
        </label>
        <input
          className="rounded-lg border border-[#333] px-4 py-3 text-sm placeholder:text-[#63717f] focus:border-brandGreen focus:outline-none"
          id="correo"
          name="correo"
          placeholder="Correo electrónico"
          type="email"
        />
        <label className="text-sm font-semibold text-brandGreen" htmlFor="telefono">
          Teléfono
        </label>
        <input
          className="rounded-lg border border-[#333] px-4 py-3 text-sm placeholder:text-[#63717f] focus:border-brandGreen focus:outline-none"
          id="telefono"
          name="telefono"
          placeholder="Teléfono sin guiones"
          type="tel"
        />
        <label className="text-sm font-semibold text-brandGreen" htmlFor="asunto">
          Asunto
        </label>
        <input
          className="rounded-lg border border-[#333] px-4 py-3 text-sm placeholder:text-[#63717f] focus:border-brandGreen focus:outline-none"
          id="asunto"
          name="asunto"
          placeholder="Asunto"
          type="text"
        />
        <label className="text-sm font-semibold text-brandGreen" htmlFor="mensaje">
          Mensaje
        </label>
        <textarea
          className="min-h-[140px] rounded-lg border border-[#333] px-4 py-3 text-sm placeholder:text-[#63717f] focus:border-brandGreen focus:outline-none"
          id="mensaje"
          name="mensaje"
          placeholder="Mensaje"
        />
        <div className="flex flex-wrap gap-3 pt-2">
          <button className="rounded-full bg-brandMenu px-6 py-2 text-sm font-semibold text-white transition hover:bg-brandMenuHover" type="submit">
            Enviar
          </button>
          <button className="rounded-full border border-brandMenu px-6 py-2 text-sm font-semibold text-brandMenu transition hover:bg-brandMenu hover:text-white" type="reset">
            Limpiar campos
          </button>
        </div>
      </form>
    </div>
  </section>
);

export default ContactForm;
