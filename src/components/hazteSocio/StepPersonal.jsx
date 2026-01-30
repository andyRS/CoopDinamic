import React from 'react';

export default function StepPersonal({ data, onChange, errors, next, back }) {
  return (
    <form className="space-y-6 p-8" onSubmit={e => { e.preventDefault(); next(); }}>
      <h2 className="text-2xl font-bold mb-4 text-coop-green">Datos Personales</h2>
      <div>
        <input type="text" placeholder="Nombre" value={data.firstName} onChange={e => onChange('firstName', e.target.value)} className="w-full p-4 rounded-lg border text-lg" />
        {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
      </div>
      <div>
        <input type="text" placeholder="Apellido" value={data.lastName} onChange={e => onChange('lastName', e.target.value)} className="w-full p-4 rounded-lg border text-lg" />
        {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
      </div>
      <div>
        <input type="text" placeholder="Cédula" value={data.cedula} onChange={e => onChange('cedula', e.target.value)} className="w-full p-4 rounded-lg border text-lg" />
        {errors.cedula && <p className="text-red-500 text-sm mt-1">{errors.cedula}</p>}
      </div>
      <div>
        <input type="tel" placeholder="Teléfono" value={data.phone} onChange={e => onChange('phone', e.target.value)} className="w-full p-4 rounded-lg border text-lg" />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
      </div>
      <div>
        <input type="email" placeholder="Email" value={data.email} onChange={e => onChange('email', e.target.value)} className="w-full p-4 rounded-lg border text-lg" />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>
      <div className="flex gap-4 mt-8">
        <button type="button" onClick={back} className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold">Atrás</button>
        <button type="submit" className="bg-coop-green text-white px-8 py-3 rounded-lg font-semibold">Siguiente</button>
      </div>
    </form>
  );
}
