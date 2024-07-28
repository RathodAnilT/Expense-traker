import React from 'react';

const TransactionSummary = ({ transactions }) => {
  const income = transactions
    .filter((transaction) => transaction.type === 'income')
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const expenses = transactions
    .filter((transaction) => transaction.type === 'expense')
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const balance = income - expenses;

  return (
    <div className="mb-8">
      <h2 className="text-xl mb-4 text-white">Summary</h2>
      <div className="p-4 bg-gray-100 rounded">
        <p className="mb-2">
          <strong>Income: </strong>${income}
        </p>
        <p className="mb-2">
          <strong>Expenses: </strong>${expenses}
        </p>
        <p className="mb-2">
          <strong>Balance: </strong>${balance}
        </p>
      </div>
    </div>
  );
};

export default TransactionSummary;
