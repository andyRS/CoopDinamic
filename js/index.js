import CalculatorDisplay from './Display';

const Calculator = () => {
  const operators = [
    { label: '+', value: 'sumar' },
    { label: '-', value: 'restar' },
    { label: 'x', value: 'multiplicar' },
    { label: '%', value: 'dividir' },
    { label: '=', value: 'igual' },
  ];

  const numbers = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'];

  return <CalculatorDisplay operators={operators} numbers={numbers} />;
};

export default Calculator;
