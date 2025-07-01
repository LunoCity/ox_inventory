import React from 'react';
import { useAppSelector } from '../../store';
import { selectCash, selectBank } from '../../store/inventory';

const MoneyDisplay: React.FC = () => {
  const cash = useAppSelector(selectCash);
  const bank = useAppSelector(selectBank);

  return (
    <div className="money-display">
      <p>Cash: ${cash}</p>
      <p>Bank: ${bank}</p>
    </div>
  );
};

export default MoneyDisplay;
