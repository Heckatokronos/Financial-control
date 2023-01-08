import React from 'react'

import Expenses from "./Components/Expense/Expenses";
import NewExpense from './Components/NewExpenses/NewExpense';

function App() {

  const addNewHandler = expense => {
    console.log('In App.js')
    console.log(expense)
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addNewHandler} />
      <Expenses />
    </div>
  );
}

export default App;
