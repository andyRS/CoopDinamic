const Header = () => (
  <header className="mb-[30px] flex h-[148px] flex-wrap items-center border-b border-[rgba(255,255,226,0.8)] bg-white xl:h-[5vw]">
    <div className="ml-[30px] basis-[65%] p-[10px] text-brandGreen drop-shadow-[1px_1px_0_#ccc]">
      <h1 className="relative top-[-21px] font-robotoBold text-[45px] italic text-brandGreen drop-shadow-[1px_1px_1px_#000] transition-all duration-300 sm:text-[55px]">
        CoopDinámica
      </h1>
      <img
        alt="Logo"
        className="relative top-[-36px] left-[368px] block w-[39px] overflow-hidden rounded-[12px] border border-[#ccc] shadow-logo sm:left-[359px] sm:w-[62px] sm:rounded-[36px]"
        src="/img/Logo.png"
      />
    </div>
    <div className="flex w-full justify-start px-[10px] sm:w-auto">
      <div className="relative w-[260px] whitespace-nowrap sm:w-[300px]">
        <input
          className="h-[50px] w-full rounded-[5px] border border-[#333] bg-white pl-[45px] text-[10pt] text-[#63717f] placeholder:text-[#333] focus:bg-[#5da96d] focus:outline-none"
          id="search"
          placeholder="Buscar..."
          type="search"
        />
        <i className="fa fa-search absolute left-[220px] top-1/2 -translate-y-1/2 text-[#252525] sm:left-[268px]" />
      </div>
    </div>
  </header>
);

export default Header;
