import SearchBox from '../ui/SearchBox'

const Header = () => {
  return (
    <header className="flex flex-row flex-wrap items-center bg-white h-[148px] border-b border-[rgba(255,255,226,0.8)] mb-[30px]">
      {/* Logo */}
      <div className="flex-[0_0_65%] p-2.5 text-coop-green ml-[30px] drop-shadow-[1px_1px_0px_#ccc]">
        <h1 className="relative font-bold italic text-[55px] transition-all duration-300 
                       drop-shadow-[1px_1px_1px_#000,1px_2px_3px_#000] top-[-21px] font-roboto-bold">
          CoopDinámica
        </h1>
        <img 
          className="block relative w-[39px] mt-[-85px] left-[368px] overflow-hidden 
                     shadow-custom border border-[#ccc] rounded-xl top-[-36px]" 
          src="/img/Logo.png" 
          alt="Logo" 
          title="Cooperativa Dinamica"
          width="500"
          height="500"
        />
      </div>

      {/* Search Box */}
      <SearchBox />
    </header>
  )
}

export default Header
