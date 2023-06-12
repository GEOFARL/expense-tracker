import React from 'react';

export const Transaction = ({ text, amount }) => {
  const sign = amount > 0 ? '+' : '-';
  return (
    <li className={`${amount > 0 ? 'plus' : 'minus'}`}>
      {text}
      <span>{`${sign}${Math.abs(amount)}`}</span>
      <button className="delete-btn">x</button>
    </li>
  );
};
