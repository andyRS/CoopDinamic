import { useMemo, useState } from 'react';

const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

const calculateSchedule = ({ amount, interest, term }) => {
  if (!amount || !interest || !term) {
    return [];
  }

  const monthlyRate = interest / 100;
  const cuota =
    amount *
    ((Math.pow(1 + monthlyRate, term) * monthlyRate) /
      (Math.pow(1 + monthlyRate, term) - 1));

  const schedule = [];
  let balance = amount;
  let currentDate = new Date();
  currentDate.setMonth(currentDate.getMonth() + 1);

  for (let i = 0; i < term; i += 1) {
    const pagoInteres = balance * monthlyRate;
    const pagoCapital = cuota - pagoInteres;
    balance -= pagoCapital;

    schedule.push({
      fecha: formatDate(currentDate),
      cuota: cuota.toFixed(2),
      capital: pagoCapital.toFixed(2),
      interes: pagoInteres.toFixed(2),
      saldo: balance.toFixed(2),
    });

    currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate());
  }

  return schedule;
};

const useAmortization = () => {
  const [amount, setAmount] = useState('');
  const [interest, setInterest] = useState('');
  const [term, setTerm] = useState('');

  const schedule = useMemo(
    () =>
      calculateSchedule({
        amount: parseFloat(amount),
        interest: parseFloat(interest),
        term: parseInt(term, 10),
      }),
    [amount, interest, term]
  );

  const clearForm = () => {
    setAmount('');
    setInterest('');
    setTerm('');
  };

  return {
    amount,
    interest,
    term,
    schedule,
    setAmount,
    setInterest,
    setTerm,
    clearForm,
  };
};

const AmortizationTable = () => {
  const {
    amount,
    interest,
    term,
    schedule,
    setAmount,
    setInterest,
    setTerm,
    clearForm,
  } = useAmortization();

  return (
    <div className="amortizacion">
      <div className="amortizacion__form">
        <input
          type="number"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          placeholder="Monto"
        />
        <input
          type="number"
          value={interest}
          onChange={(event) => setInterest(event.target.value)}
          placeholder="Interés"
        />
        <input
          type="number"
          value={term}
          onChange={(event) => setTerm(event.target.value)}
          placeholder="Tiempo"
        />
        <button type="button" onClick={clearForm}>
          Limpiar
        </button>
      </div>
      <table className="amortizacion__tabla">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Cuota</th>
            <th>Capital</th>
            <th>Interés</th>
            <th>Saldo</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((row) => (
            <tr key={`${row.fecha}-${row.saldo}`}>
              <td>{row.fecha}</td>
              <td>{row.cuota}</td>
              <td>{row.capital}</td>
              <td>{row.interes}</td>
              <td>{row.saldo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { AmortizationTable, useAmortization };
