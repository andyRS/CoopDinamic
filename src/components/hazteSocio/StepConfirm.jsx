import React from 'react';

export default function StepConfirm({ data, onChange, errors, next, back }) {
  return (
    <form className="space-y-6 p-8" onSubmit={e => { e.preventDefault(); next(); }}>
      <h2 className="text-2xl font-bold mb-4 text-coop-green">Confirmación</h2>
      <div className="flex items-center gap-2">
        <input type="checkbox" checked={data.termsAccepted} onChange={e => onChange('termsAccepted', e.target.checked)} />
        <span>Acepto los <a href="#" className="text-coop-blue underline">términos y condiciones</a></span>
      </div>
      {errors.termsAccepted && <p className="text-red-500 text-sm mt-1">{errors.termsAccepted}</p>}
      <div className="flex items-center gap-2">
        <input type="checkbox" checked={data.privacyAccepted} onChange={e => onChange('privacyAccepted', e.target.checked)} />
        <span>Acepto la <a href="#" className="text-coop-blue underline">política de privacidad</a></span>
      </div>
      {errors.privacyAccepted && <p className="text-red-500 text-sm mt-1">{errors.privacyAccepted}</p>}
      <div className="flex gap-4 mt-8">
        <button type="button" onClick={back} className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold">Atrás</button>
        <button type="submit" className="bg-coop-green text-white px-8 py-3 rounded-lg font-semibold">Enviar</button>
      </div>
    </form>
  );
}
