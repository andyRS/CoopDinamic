import React from 'react';

export default function StepSuccess({ clear }) {
  return (
    <div className="text-center p-8">
      <h2 className="text-3xl font-bold mb-4 text-coop-green">¡Solicitud enviada con éxito!</h2>
      <p className="mb-6 text-lg text-gray-700">Gracias por afiliarte a CoopDinámica. Pronto nos pondremos en contacto contigo.</p>
      <button onClick={clear} className="bg-coop-green text-white text-xl px-8 py-4 rounded-xl shadow hover:bg-coop-dark-green transition-all">Volver al inicio</button>
    </div>
  );
}
