import React, { useState } from 'react'

import ExpenseItem from "./ExpenseItems";
import './Expenses.css'
import Card from "../UI/Card/Card";
import { MyPurchases } from '../../Database/purchases';
import ExpenseFilter from './ExpenseFilter';

export default function Expenses() {

    const [filteredYear, setFilteredYear] = useState('2022')

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }

    return (
        <>
            <Card className="expenses">
                <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {
                    MyPurchases.map(({ id, date, title, amount }) =>
                        <ExpenseItem key={id} date={date} title={title} amount={amount} />
                    )
                }
            </Card>
        </>
    )


}