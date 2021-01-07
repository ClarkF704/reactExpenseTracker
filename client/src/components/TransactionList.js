import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction'

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul id='list' className='list'>
        {transactions.map((transactions) => (
          <Transaction key={transactions.id} transactions={transactions}/>
        ))}
      </ul>
    </>
  );
};
