import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {

  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')
  const [isNewFormOpen, setIsNewFormOpen] = useState(true);

  // Dealing with title input
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
  }

  // Dealing with Amount
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
  }

  // Dealing with Date
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
  }

  // Change the state from true to false to have a way to show the correct form
  const toggleFormState = () => {
    setIsNewFormOpen(current => !current)
  }

  // handling the submission of the form data
  const submitHandler = (event) => {
    event.preventDefault()
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }
    props.onSaveExpenseData(expenseData)
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
  }

  // let newFormView =
  if (isNewFormOpen) {
    return (
      <div>
        <button onClick={toggleFormState}>New form</button>
      </div>
    )
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__contol">
          <label>Title</label>
          <input name="Title" type="text" value={enteredTitle}
            onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__contol">
          <label>Amount</label>
          <input name="Amount" type="number" min='0.01' setp='0.01'
            value={enteredAmount}
            onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__contol">
          <label>Date</label>
          <input name="Date" type="date" min='2019-01-01' max='2022-12-31'
            value={enteredDate}
            onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type='button' onClick={toggleFormState}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )

}
export default ExpenseForm
