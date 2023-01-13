import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Туалетная бумага',
    amount: 99,
    date: new Date(2022, 7, 14),
  },
  { id: 'e2', title: 'Приставка PS5', amount: 59499, date: new Date(2022, 2, 12) },
  {
    id: 'e3',
    title: 'Обслуживание системника',
    amount: 3749,
    date: new Date(2022, 2, 28),
  },
  {
    id: 'e4',
    title: 'Новый монитор',
    amount: 39999,
    date: new Date(2022, 5, 12),
  },
];

export default function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

