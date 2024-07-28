import React, { useState } from 'react';

const AddTransaction = ({ addTransaction }) => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('income');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount) return;
    addTransaction({ text, amount: parseFloat(amount), type });
    setText('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <h2 className="text-xl mb-4 text-white">Add New Transaction</h2>
      <div className="mb-4">
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="Enter text..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <input
          type="number"
          className="w-full p-2 border rounded"
          placeholder="Enter amount..."
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <select
          className="w-full p-2 border rounded"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>
      <button className="w-full p-2 bg-blue-500 text-white rounded" type="submit">
        Add Transaction
      </button>
    </form>
  );
};

export default AddTransaction;
