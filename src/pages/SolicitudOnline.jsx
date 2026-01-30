import React, { useState } from 'react';
import Navigation from '../components/layout/NavigationModern';
import { FiSend } from 'react-icons/fi';

const tiposSolicitud = [
  { value: 'ahorro', label: 'Cuenta de Ahorro' },
  { value: 'ahorros_programados', label: 'Ahorros Programados' },
  { value: 'certificado', label: 'Certificado Financiero' },
  { value: 'prestamo_expreso', label: 'Préstamo Expreso' },
  { value: 'hipotecario', label: 'Crédito Hipotecario' },
  { value: 'vehiculo', label: 'Crédito Vehículo' },
  { value: 'educativo', label: 'Crédito Educativo' },
  { value: 'empresarial', label: 'Crédito Empresarial' },
  { value: 'capital_trabajo', label: 'Capital de Trabajo' },
  { value: 'linea_credito', label: 'Línea de Crédito' },
];

const camposPorTipo = {
  ahorro: [ 'monto', 'periodo_objetivo' ],
  ahorros_programados: [ 'monto', 'periodo_objetivo' ],
  certificado: [ 'monto', 'plazo' ],
  prestamo_expreso: [ 'monto', 'plazo', 'ingresos' ],
  hipotecario: [ 'monto', 'plazo', 'ingresos' ],
  vehiculo: [ 'monto', 'plazo', 'ingresos' ],
  educativo: [ 'monto', 'plazo', 'ingresos' ],
  empresarial: [ 'monto', 'plazo', 'ingresos' ],
  capital_trabajo: [ 'monto', 'plazo', 'ingresos' ],
  linea_credito: [ 'monto', 'plazo', 'ingresos' ],
};

const SolicitudOnline = () => {
  const [form, setForm] = useState({
    nombre: '',
    cedula: '',
    fecha_nacimiento: '',
    nacionalidad: '',
    direccion: '',
    telefono: '',
    email: '',
    tipo: '',
    monto: '',
    plazo: '',
    periodo_objetivo: '',
    ingresos: '',
  });
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleTipoChange = e => {
    setForm({ ...form, tipo: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Validación básica
    if (!form.nombre || !form.cedula || !form.fecha_nacimiento || !form.telefono || !form.email || !form.tipo) {
      setError('Por favor completa todos los campos obligatorios.');
      return;
    }
    setError('');
    setEnviado(true);
    // Aquí puedes hacer fetch/post a una API
  };

  const camposDinamicos = camposPorTipo[form.tipo] || [];

  return (
    <>
      <Navigation />
      <div className="min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-coop-green/10 to-coop-blue/10 py-10 px-2">
        <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-coop-green/40">
        <h2 className="text-3xl md:text-4xl font-extrabold text-coop-green mb-2 text-center drop-shadow">Solicitud Online</h2>
        <p className="text-gray-800 text-center mb-8 font-medium">Solicita productos y servicios de CoopDinámica de forma rápida y segura.</p>
        {enviado ? (
          <div className="bg-green-100 text-green-800 p-4 rounded-lg text-center text-lg font-semibold shadow mb-4 animate-fade-in">¡Solicitud enviada correctamente! Pronto nos pondremos en contacto.</div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && <div className="bg-red-100 text-red-700 p-2 rounded-lg text-center font-medium shadow animate-fade-in">{error}</div>}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-bold mb-1 text-coop-green">Nombre completo *</label>
                <input type="text" name="nombre" value={form.nombre} onChange={handleChange} className="w-full border-2 border-coop-green/40 text-gray-900 placeholder-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:border-coop-green focus:bg-green-50 transition" required placeholder="Ej: Juan Pérez" />
              </div>
              <div>
                <label className="block font-bold mb-1 text-coop-green">Cédula *</label>
                <input type="text" name="cedula" value={form.cedula} onChange={handleChange} className="w-full border-2 border-coop-green/40 text-gray-900 placeholder-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:border-coop-green focus:bg-green-50 transition" required placeholder="Ej: 001-0000000-0" />
              </div>
              <div>
                <label className="block font-bold mb-1 text-coop-green">Fecha de nacimiento *</label>
                <input type="date" name="fecha_nacimiento" value={form.fecha_nacimiento} onChange={handleChange} className="w-full border-2 border-coop-green/40 text-gray-900 rounded-lg px-4 py-3 focus:outline-none focus:border-coop-green focus:bg-green-50 transition" required />
              </div>
              <div>
                <label className="block font-bold mb-1 text-coop-green">Nacionalidad</label>
                <input type="text" name="nacionalidad" value={form.nacionalidad} onChange={handleChange} className="w-full border-2 border-coop-green/40 text-gray-900 placeholder-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:border-coop-green focus:bg-green-50 transition" placeholder="Ej: Dominicana" />
              </div>
              <div className="md:col-span-2">
                <label className="block font-bold mb-1 text-coop-green">Dirección</label>
                <input type="text" name="direccion" value={form.direccion} onChange={handleChange} className="w-full border-2 border-coop-green/40 text-gray-900 placeholder-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:border-coop-green focus:bg-green-50 transition" placeholder="Ej: Calle 1, No. 2" />
              </div>
              <div>
                <label className="block font-bold mb-1 text-coop-green">Teléfono *</label>
                <input type="tel" name="telefono" value={form.telefono} onChange={handleChange} className="w-full border-2 border-coop-green/40 text-gray-900 placeholder-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:border-coop-green focus:bg-green-50 transition" required placeholder="Ej: 809-000-0000" />
              </div>
              <div>
                <label className="block font-bold mb-1 text-coop-green">Correo electrónico *</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full border-2 border-coop-green/40 text-gray-900 placeholder-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:border-coop-green focus:bg-green-50 transition" required placeholder="Ej: correo@email.com" />
              </div>
              <div className="md:col-span-2">
                <label className="block font-bold mb-1 text-coop-green">Tipo de solicitud *</label>
                <select name="tipo" value={form.tipo} onChange={handleTipoChange} className="w-full border-2 border-coop-green/40 text-gray-900 rounded-lg px-4 py-3 focus:outline-none focus:border-coop-green focus:bg-green-50 transition" required>
                  <option value="">Selecciona una opción</option>
                  {tiposSolicitud.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
              {/* Campos dinámicos según tipo */}
              {camposDinamicos.includes('monto') && (
                <div>
                  <label className="block font-bold mb-1 text-coop-green">Monto solicitado/depositado</label>
                  <input type="number" name="monto" value={form.monto} onChange={handleChange} className="w-full border-2 border-coop-green/40 text-gray-900 placeholder-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:border-coop-green focus:bg-green-50 transition" min="0" placeholder="Ej: 10000" />
                </div>
              )}
              {camposDinamicos.includes('plazo') && (
                <div>
                  <label className="block font-semibold mb-1">Plazo (meses)</label>
                  <input type="number" name="plazo" value={form.plazo} onChange={handleChange} className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-coop-green transition" min="1" />
                </div>
              )}
              {camposDinamicos.includes('periodo_objetivo') && (
                <div>
                  <label className="block font-semibold mb-1">Periodo objetivo</label>
                  <input type="text" name="periodo_objetivo" value={form.periodo_objetivo} onChange={handleChange} className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-coop-green transition" />
                </div>
              )}
              {camposDinamicos.includes('ingresos') && (
                <div>
                  <label className="block font-semibold mb-1">Ingresos mensuales</label>
                  <input type="number" name="ingresos" value={form.ingresos} onChange={handleChange} className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-coop-green transition" min="0" />
                </div>
              )}
            </div>
            {/* Adjuntar documentos (simulado) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-semibold mb-1">Adjuntar cédula (opcional)</label>
                <input type="file" name="cedula_file" className="w-full border-2 border-gray-200 rounded-lg px-4 py-2" accept=".pdf,.jpg,.jpeg,.png" />
              </div>
              <div>
                <label className="block font-semibold mb-1">Adjuntar comprobante de ingresos (opcional)</label>
                <input type="file" name="comprobante_file" className="w-full border-2 border-gray-200 rounded-lg px-4 py-2" accept=".pdf,.jpg,.jpeg,.png" />
              </div>
            </div>
            <div className="pt-4 flex justify-center">
              <button type="submit" className="flex items-center gap-2 bg-coop-green text-white text-lg font-semibold px-8 py-3 rounded-xl shadow hover:bg-coop-blue transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-coop-green focus:ring-offset-2">
                <FiSend className="text-2xl" />
                Enviar Solicitud
              </button>
            </div>
          </form>
        )}
        </div>
      </div>
    </>
  );
};

export default SolicitudOnline;
