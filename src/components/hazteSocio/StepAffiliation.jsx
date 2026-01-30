import React from 'react';

export default function StepAffiliation({ data, onChange, errors, next, back }) {
  return (
    <form className="space-y-6 p-8" onSubmit={e => { e.preventDefault(); next(); }}>
      <h2 className="text-2xl font-bold mb-4 text-coop-green">Datos de Afiliación</h2>
      <div>
        <select value={data.type} onChange={e => onChange('type', e.target.value)} className="w-full p-4 rounded-lg border text-lg">
          <option value="">Tipo de socio</option>
          <option value="ahorrante">Ahorrante</option>
          <option value="credito">Crédito</option>
        </select>
        {errors.type && <p className="text-red-500 text-sm mt-1">{errors.type}</p>}
      </div>
      <div>
        <input type="number" min="1000" placeholder="Monto inicial (mínimo RD$1000)" value={data.amount} onChange={e => onChange('amount', e.target.value)} className="w-full p-4 rounded-lg border text-lg" />
        {errors.amount && <p className="text-red-500 text-sm mt-1">{errors.amount}</p>}
      </div>
      <div>
        <input type="text" placeholder="Sucursal" value={data.branch} onChange={e => onChange('branch', e.target.value)} className="w-full p-4 rounded-lg border text-lg" />
        {errors.branch && <p className="text-red-500 text-sm mt-1">{errors.branch}</p>}
      </div>
      <div className="flex gap-4 mt-8">
        <button type="button" onClick={back} className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold">Atrás</button>
        <button type="submit" className="bg-coop-green text-white px-8 py-3 rounded-lg font-semibold">Siguiente</button>
      </div>
    </form>
  );
}
