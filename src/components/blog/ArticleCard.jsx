const ArticleCard = ({ image, title, date }) => (
  <article className="flex flex-col gap-4 rounded-2xl border border-[#ccc] bg-white p-5 shadow-lg">
    <div className="overflow-hidden rounded-xl">
      <img alt={title} className="h-48 w-full object-cover sm:h-56" src={image} />
    </div>
    <div className="space-y-2">
      <h3 className="text-xl font-robotoBold text-brandGreen">{title}</h3>
      <span className="text-sm text-[#63717f]">{date}</span>
    </div>
    <a className="text-sm font-semibold text-brandMenu hover:text-brandMenuHover" href="#">
      Leer más
    </a>
  </article>
);

export default ArticleCard;
