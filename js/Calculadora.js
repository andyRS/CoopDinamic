import { useMemo, useState } from 'react';

const OPERATORS = {
  sumar: '+',
  dividir: '%',
  multiplicar: 'x',
  restar: '-',
};

const calculateResult = (operation, previousValue, currentValue) => {
  const prev = parseFloat(previousValue);
  const current = parseFloat(currentValue);

  if (Number.isNaN(prev) || Number.isNaN(current)) {
    return currentValue;
  }

  switch (operation) {
    case 'sumar':
      return prev + current;
    case 'restar':
      return prev - current;
    case 'dividir':
      return prev / current;
    case 'multiplicar':
      return prev * current;
    default:
      return current;
  }
};

const useCalculator = () => {
  const [currentValue, setCurrentValue] = useState('');
  const [previousValue, setPreviousValue] = useState('');
  const [operation, setOperation] = useState(undefined);

  const addNumber = (value) => {
    if (value === '.' && currentValue.includes('.')) {
      return;
    }

    setCurrentValue((prev) => `${prev}${value}`);
  };

  const compute = (nextOperation) => {
    if (operation && currentValue) {
      const result = calculateResult(operation, previousValue, currentValue);
      setPreviousValue(String(result));
      setCurrentValue('');
    } else if (currentValue) {
      setPreviousValue(currentValue);
      setCurrentValue('');
    }

    setOperation(nextOperation);
  };

  const clearEntry = () => {
    setCurrentValue((prev) => prev.toString().slice(0, -1));
  };

  const clearAll = () => {
    setCurrentValue('');
    setPreviousValue('');
    setOperation(undefined);
  };

  const display = useMemo(
    () => ({
      currentValue,
      previousValue,
      operationSymbol: OPERATORS[operation] || '',
    }),
    [currentValue, previousValue, operation]
  );

  return {
    addNumber,
    clearAll,
    clearEntry,
    compute,
    display,
  };
};

export { OPERATORS, useCalculator };
