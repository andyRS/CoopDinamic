import React, { useState } from 'react';
import Stepper from '../components/hazteSocio/Stepper';
import StepWelcome from '../components/hazteSocio/StepWelcome';
import StepPersonal from '../components/hazteSocio/StepPersonal';
import StepAffiliation from '../components/hazteSocio/StepAffiliation';
import StepConfirm from '../components/hazteSocio/StepConfirm';
import StepSuccess from '../components/hazteSocio/StepSuccess';
import { initialData } from '../components/hazteSocio/schema';
import { loadDraft, saveDraft, clearDraft } from '../components/hazteSocio/storage';

const steps = [
  'Inicio',
  'Datos',
  'Afiliación',
  'Confirmar',
];

function validateStep(step, data) {
  const errors = {};
  if (step === 1) {
    if (!data.firstName) errors.firstName = 'El nombre es requerido.';
    if (!data.lastName) errors.lastName = 'El apellido es requerido.';
    if (!/^\d{11}$/.test(data.cedula)) errors.cedula = 'La cédula debe tener 11 dígitos.';
    if (!/^\d{10}$/.test(data.phone)) errors.phone = 'El teléfono debe tener 10 dígitos.';
    if (!/^\S+@\S+\.\S+$/.test(data.email)) errors.email = 'Email inválido.';
  }
  if (step === 2) {
    if (!data.type) errors.type = 'Selecciona el tipo de socio.';
    if (!data.branch) errors.branch = 'La sucursal es requerida.';
    if (!data.amount || Number(data.amount) < 1000) errors.amount = 'El monto debe ser al menos RD$1000.';
  }
  if (step === 3) {
    if (!data.termsAccepted) errors.termsAccepted = 'Debes aceptar los términos.';
    if (!data.privacyAccepted) errors.privacyAccepted = 'Debes aceptar la privacidad.';
  }
  return errors;
}

export default function HazteSocio() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState(() => ({ ...initialData, ...loadDraft() }));
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  function handleChange(field, value) {
    const updated = { ...data, [field]: value };
    setData(updated);
    saveDraft(updated);
  }

  function next() {
    const errs = validateStep(step, data);
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setStep(s => s + 1);
    }
  }

  function back() {
    setStep(s => Math.max(0, s - 1));
  }

  function submit() {
    const errs = validateStep(step, data);
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSuccess(true);
      clearDraft();
      // Aquí puedes enviar a backend, WhatsApp, email, etc.
    }
  }

  function clear() {
    setStep(0);
    setData(initialData);
    setSuccess(false);
    clearDraft();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border p-8">
        <Stepper step={success ? steps.length : step} />
        {!success && step === 0 && <StepWelcome next={next} />}
        {!success && step === 1 && <StepPersonal data={data} onChange={handleChange} errors={errors} next={next} back={back} />}
        {!success && step === 2 && <StepAffiliation data={data} onChange={handleChange} errors={errors} next={next} back={back} />}
        {!success && step === 3 && <StepConfirm data={data} onChange={handleChange} errors={errors} next={submit} back={back} />}
        {success && <StepSuccess clear={clear} />}
      </div>
    </div>
  );
}
