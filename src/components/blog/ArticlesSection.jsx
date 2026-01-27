import ArticleCard from "./ArticleCard";

const articles = [
  {
    image:
      "https://blog.foto24.com/wp-content/uploads/2021/08/Fotograf%C3%ADas_Paisajes_Marinos_1200x675_port.jpg",
    title: "Artículo Prueba",
    date: "Hace 5 minutos",
  },
];

const ArticlesSection = () => (
  <section className="mx-auto w-full max-w-6xl px-4 py-10">
    <h2 className="mb-6 text-2xl font-robotoBold text-brandGreen sm:text-3xl">Últimos artículos</h2>
    <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
      <div className="grid gap-6 sm:grid-cols-2">
        {articles.map((article) => (
          <ArticleCard key={article.title} {...article} />
        ))}
      </div>
      <aside className="rounded-2xl border border-[#ccc] bg-white p-6 shadow-lg">
        <h3 className="text-lg font-robotoBold text-brandGreen">Conoce más sobre nosotros</h3>
        <a
          className="mt-4 inline-flex items-center justify-center rounded-full bg-brandMenu px-5 py-2 text-sm font-semibold text-white transition hover:bg-brandMenuHover"
          href="#"
        >
          CoopDinámica
        </a>
      </aside>
    </div>
  </section>
);

export default ArticlesSection;
