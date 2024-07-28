import React, { useState } from 'react';
import AddTransaction from './components/AddTransaction';
import TransactionList from './components/TransactionList';
import TransactionSummary from './components/TransactionSummary';

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <div className="min-h-screen bg-gray-600 p-8 flex justify-center items-center">
      <div className="max-w-xl w-full">
        <h1 className="text-4xl font-bold text-center mb-8">Personal Finance Tracker</h1>
        <TransactionSummary transactions={transactions} />
        <AddTransaction addTransaction={addTransaction} />
        <div className="overflow-y-auto h-64">
          <TransactionList transactions={transactions} />
        </div>
      </div>
    </div>
  );
};

export default App;
