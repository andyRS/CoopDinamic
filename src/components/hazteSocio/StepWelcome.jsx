import React from 'react';

export default function StepWelcome({ next }) {
  return (
    <div className="text-center p-8">
      <h2 className="text-3xl font-bold mb-4 text-coop-green">¡Bienvenido!</h2>
      <p className="mb-6 text-lg text-gray-700">Comienza tu proceso de afiliación a CoopDinámica. Solo te tomará unos minutos.</p>
      <button onClick={next} className="bg-coop-green text-white text-xl px-8 py-4 rounded-xl shadow hover:bg-coop-dark-green transition-all">Comenzar</button>
    </div>
  );
}
