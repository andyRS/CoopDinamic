import React from 'react';

const steps = ['Inicio', 'Datos', 'Afiliación', 'Confirmar'];

export default function Stepper({ step }) {
  return (
    <div className="flex items-center justify-center mb-8">
      {steps.map((label, idx) => (
        <div key={label} className="flex items-center">
          <div className={`w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg border-2 transition-all
            ${step === idx ? 'bg-coop-green text-white border-coop-green' : step > idx ? 'bg-coop-green/80 text-white border-coop-green' : 'bg-gray-200 text-gray-500 border-gray-300'}`}
          >{idx + 1}</div>
          <span className={`ml-2 mr-4 text-base font-semibold ${step === idx ? 'text-coop-green' : 'text-gray-500'}`}>{label}</span>
          {idx < steps.length - 1 && <div className="w-12 h-2 bg-gray-200 rounded-full mx-2" />}
        </div>
      ))}
    </div>
  );
}
