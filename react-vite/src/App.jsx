const highlights = [
  {
    title: "Componentes reutilizables",
    description: "Organiza tu UI con una base lista para crecer.",
  },
  {
    title: "Tailwind listo",
    description: "Utiliza utilidades para construir interfaces rápidas.",
  },
  {
    title: "Tipografías globales",
    description: "Montserrat, Open Sans y Fraunces configuradas.",
  },
];

function App() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <section className="mx-auto flex max-w-4xl flex-col gap-10">
        <header className="flex flex-col gap-4">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            CoopDinamic Starter
          </p>
          <h1 className="font-fraunces text-4xl font-semibold sm:text-5xl">
            Proyecto React con Vite + Tailwind CSS
          </h1>
          <p className="max-w-2xl text-lg text-slate-300">
            Base inicial con estructura de carpetas, fuentes globales y
            configuración de Tailwind lista para personalizar tu interfaz.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
            >
              <h2 className="font-montserrat text-xl font-semibold">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
