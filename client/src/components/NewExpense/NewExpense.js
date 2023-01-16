import React, { memo, useState } from 'react'

import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = memo((props) => {

  const [isEditing, setIsEditing] = useState(false)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
    setIsEditing(false);
  }

  const startEditingHandler = () => {
    setIsEditing(true)
  }

  const stopEditingHandler = () => {
    setIsEditing(false);
  }

  return (
    <div className='new-expense'>
      {!isEditing && <button onClick={startEditingHandler}> Добавить новую покупку</button>}
      {isEditing && <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={stopEditingHandler}
      />}
    </div>
  )
})

export default NewExpense