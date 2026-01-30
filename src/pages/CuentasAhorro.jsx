import React from 'react';


import { useState } from 'react';

const CuentasAhorro = () => {
  const [form, setForm] = useState({
    nombre: '',
    cedula: '',
    correo: '',
    telefono: '',
    monto: '',
  });
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Validación simple
    if (!form.nombre || !form.cedula || !form.correo || !form.telefono) {
      setError('Por favor completa todos los campos obligatorios.');
      return;
    }
    setError('');
    setEnviado(true);
    // Aquí se puede hacer fetch/post a una API
  };

  return (
    <div className="container mx-auto py-10 max-w-xl">
      <h2 className="text-2xl font-bold mb-4">Cuenta de Ahorro</h2>
      <p className="mb-6">Conoce los beneficios de abrir una cuenta de ahorro en CoopDinámica. Para solicitarla, haz clic en el botón:</p>
      <a href="/solicitud-online" className="inline-block bg-coop-green text-white px-6 py-2 rounded hover:bg-coop-blue transition mb-8">Solicitar este producto</a>
    </div>
  );
};

export default CuentasAhorro;
