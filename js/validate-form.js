import { useState } from 'react';

const initialValues = {
  nombre: '',
  correo: '',
  cedula: '',
  telefono: '',
  asunto: '',
  mensaje: '',
};

const regex = {
  nombre: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/,
  correo: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/,
  cedula: /^\d{11}$/,
  telefono: /^\d{3}\d{3}\d{4}$/,
  asunto: /^[,\.\a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]*$/,
  mensaje: /^[,\.\a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]*$/,
};

const validateFields = (values) => {
  const errors = {};

  if (!values.nombre) {
    errors.nombre = 'Campo obligatorio';
  } else if (!regex.nombre.test(values.nombre)) {
    errors.nombre = 'No se permiten carateres especiales o numeros';
  }

  if (!values.cedula) {
    errors.cedula = 'Campo obligatorio';
  } else if (!regex.cedula.test(values.cedula)) {
    errors.cedula = 'Ingrese una cedula valida';
  }

  if (!values.correo) {
    errors.correo = 'Campo obligatorio';
  } else if (!regex.correo.test(values.correo)) {
    errors.correo = 'Por favor ingrese un correo válido';
  }

  if (!values.telefono) {
    errors.telefono = 'Campo obligatorio';
  } else if (!regex.telefono.test(values.telefono)) {
    errors.telefono = 'Por favor ingrese un numero de telefono valido';
  }

  if (!values.asunto) {
    errors.asunto = 'Campo obligatorio';
  } else if (!regex.asunto.test(values.asunto)) {
    errors.asunto = 'No se permiten caracteres especiales';
  }

  if (!values.mensaje) {
    errors.mensaje = 'Campo obligatorio';
  } else if (!regex.mensaje.test(values.mensaje)) {
    errors.mensaje = 'No se permiten caracteres especiales';
  }

  return errors;
};

const useContactFormValidation = () => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [formMessage, setFormMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validateFields(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstError = Object.values(nextErrors)[0];
      setFormMessage(`Error: ${firstError}`);
      return;
    }

    setFormMessage('');
  };

  const handleReset = () => {
    setValues(initialValues);
    setErrors({});
    setFormMessage('');
  };

  return {
    errors,
    formMessage,
    handleChange,
    handleReset,
    handleSubmit,
    values,
  };
};

const ContactForm = () => {
  const { errors, formMessage, handleChange, handleReset, handleSubmit, values } =
    useContactFormValidation();

  return (
    <form id="formulario" onSubmit={handleSubmit}>
      <input
        id="nombre"
        name="nombre"
        value={values.nombre}
        onChange={handleChange}
        className={errors.nombre ? 'is-error' : ''}
        placeholder="Nombre"
      />
      <input
        id="cedula"
        name="cedula"
        value={values.cedula}
        onChange={handleChange}
        className={errors.cedula ? 'is-error' : ''}
        placeholder="Cédula"
      />
      <input
        id="correo"
        name="correo"
        value={values.correo}
        onChange={handleChange}
        className={errors.correo ? 'is-error' : ''}
        placeholder="Correo"
      />
      <input
        id="telefono"
        name="telefono"
        value={values.telefono}
        onChange={handleChange}
        className={errors.telefono ? 'is-error' : ''}
        placeholder="Teléfono"
      />
      <input
        id="asunto"
        name="asunto"
        value={values.asunto}
        onChange={handleChange}
        className={errors.asunto ? 'is-error' : ''}
        placeholder="Asunto"
      />
      <textarea
        id="mensaje"
        name="mensaje"
        value={values.mensaje}
        onChange={handleChange}
        className={errors.mensaje ? 'is-error' : ''}
        placeholder="Mensaje"
      />
      <div id="form-messages">{formMessage}</div>
      <button type="submit">Enviar</button>
      <button type="button" onClick={handleReset}>
        Limpiar
      </button>
    </form>
  );
};

export { ContactForm, useContactFormValidation };
