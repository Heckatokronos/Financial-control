import React, { memo } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = memo((props) => {
  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2 className='expense-item h2'>{props.title}</h2>
          <div className='expense-item__price'>₽{props.amount}</div>
        </div>
      </Card>
    </li>
  );
})

export default ExpenseItem