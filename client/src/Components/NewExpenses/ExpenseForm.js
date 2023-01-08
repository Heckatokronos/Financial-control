import React, { useState } from 'react'

import './ExpenseForm.css'



export default function ExpenseForm(props) {

    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // })



    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value }
        // })
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredAmount: event.target.value }
        // })
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredDate: event.target.value }
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault()

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        }

        props.onSaveExpenseDate(expenseData)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Название</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler} />

                </div>
                <div className='new-expense__control'>
                    <label> Сумма </label>
                    <input type='number' value={enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label> Дата </label>
                    <input type='date' value={enteredDate} min='2022-01-01' max='2030-12-31' onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="submit"> Добавить затраты </button>
            </div>
        </form>
    )
}