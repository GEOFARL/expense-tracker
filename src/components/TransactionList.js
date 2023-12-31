import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

export const TransactionList = () => {
  const { transactions, deleteTransaction } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction
            text={transaction.text}
            key={transaction.id}
            amount={transaction.amount}
            deleteTransaction={() => deleteTransaction(transaction.id)}
          />
        ))}
      </ul>
    </>
  );
};
