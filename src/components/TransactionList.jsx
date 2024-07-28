import React from 'react';

const TransactionList = ({ transactions }) => {
  return (
    <div>
      <h2 className="text-xl mb-4 text-white">Transaction History</h2>
      <ul className="list-none p-0">
        {transactions.map((transaction, index) => (
          <li
            key={index}
            className={`p-2 mb-2 rounded ${
              transaction.type === 'income' ? 'bg-green-100' : 'bg-red-100'
            }`}
          >
            <span>{transaction.text}</span>
            <span className="float-right">
              {transaction.type === 'income' ? '+' : '-'}${transaction.amount}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
