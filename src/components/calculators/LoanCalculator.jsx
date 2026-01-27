const LoanCalculator = () => (
  <section className="px-4 py-12">
    <div className="mx-auto max-w-6xl">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-robotoBold text-brandGreen sm:text-3xl">Calculadora de Préstamos</h2>
          <div className="space-y-3">
            <input
              className="w-full rounded-lg border border-[#333] px-4 py-3 text-sm placeholder:text-[#63717f] focus:border-brandGreen focus:outline-none sm:text-base"
              id="monto"
              placeholder="Ingresar monto"
              type="text"
            />
            <input
              className="w-full rounded-lg border border-[#333] px-4 py-3 text-sm placeholder:text-[#63717f] focus:border-brandGreen focus:outline-none sm:text-base"
              id="tiempo"
              placeholder="Ingresar cantidad de meses"
              type="text"
            />
            <input
              className="w-full rounded-lg border border-[#333] px-4 py-3 text-sm placeholder:text-[#63717f] focus:border-brandGreen focus:outline-none sm:text-base"
              id="interes"
              placeholder="Ingresar tasa de interés mensual"
              type="text"
            />
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              className="rounded-full bg-brandMenu px-6 py-2 text-sm font-semibold text-white transition hover:bg-brandMenuHover"
              id="btnCalcular"
              type="button"
            >
              Calcular
            </button>
            <button
              className="rounded-full bg-[#ffc107] px-6 py-2 text-sm font-semibold text-black transition hover:bg-[#ffb000]"
              id="btnLimpiar"
              type="button"
            >
              Limpiar
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-left text-sm">
            <thead className="bg-[#212529] text-white">
              <tr>
                <th className="px-4 py-3 font-semibold">Fecha</th>
                <th className="px-4 py-3 font-semibold">Cuota</th>
                <th className="px-4 py-3 font-semibold">Capital</th>
                <th className="px-4 py-3 font-semibold">Interés</th>
                <th className="px-4 py-3 font-semibold">Saldo</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200" id="lista-tabla" />
          </table>
        </div>
      </div>
    </div>
  </section>
);

export default LoanCalculator;
