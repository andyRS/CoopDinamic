import { useCalculator } from './Calculadora';

const CalculatorDisplay = ({ operators = [], numbers = [] }) => {
  const { addNumber, clearAll, clearEntry, compute, display } = useCalculator();

  return (
    <div className="calculadora">
      <div className="display">
        <div id="valor-anterior">
          {display.previousValue} {display.operationSymbol}
        </div>
        <div id="valor-actual">{display.currentValue}</div>
      </div>
      <div className="teclado">
        <button type="button" onClick={clearAll} className="operador">
          AC
        </button>
        <button type="button" onClick={clearEntry} className="operador">
          ⌫
        </button>
        {operators.map((operator) => (
          <button
            key={operator.value}
            type="button"
            className="operador"
            onClick={() => compute(operator.value)}
          >
            {operator.label}
          </button>
        ))}
        {numbers.map((number) => (
          <button
            key={number}
            type="button"
            className="numero"
            onClick={() => addNumber(number)}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CalculatorDisplay;
