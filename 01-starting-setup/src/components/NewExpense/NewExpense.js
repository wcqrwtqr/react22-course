import React from 'react'
import './NewExpense.css'
import ExpesneForm from './ExpenseForm'

const NewExpense = (props) =>{
  const saveExpenseDataHandler = (enteredExpenseData) =>{
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    console.log(expenseData);
    props.onAddExpense(expenseData)
  }

  return (
    <div className="new-expense">
      <ExpesneForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  )
}

export default NewExpense
