const Loader = () => (
  <div className="fixed inset-0 z-[9999] flex h-screen w-screen items-center justify-center bg-brandLoader transition-all duration-[1500ms]">
    <div className="relative text-brandBlue">
      <span className="block h-10 w-10 animate-loader rounded-full" />
      <span className="absolute left-[-3.5em] top-0 block h-10 w-10 animate-loader rounded-full [animation-delay:-0.32s]" />
      <span className="absolute left-[3.5em] top-0 block h-10 w-10 animate-loader rounded-full [animation-delay:-0.16s]" />
    </div>
  </div>
);

export default Loader;
