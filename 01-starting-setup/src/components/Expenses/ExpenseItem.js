import React, { useState } from 'react';
import './ExpenseItem.css'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'

const ExpenseItem = (props) => {

  // Make the state for the props that needs to be changes
  const [title, setTitle] = useState(props.title)

  // The click handler function
  const clickHandler = () => {
    setTitle('Updated')
    console.log('Clicked !!!');
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  )
}
export default ExpenseItem;
