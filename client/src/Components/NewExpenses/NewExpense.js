import React from 'react'

import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

export default function NewExpense(props) {

    const saveExpenseDataHandler = (eneteredExpenseData) => {
        const expenseData = {
            ...eneteredExpenseData,
            id: Math.random().toString(),
        }
        props.onAddExpense()
        console.log(expenseData)
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseDate={saveExpenseDataHandler} />
        </div>
    )
}