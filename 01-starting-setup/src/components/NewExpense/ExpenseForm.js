import React, {useState} from 'react'
import './ExpenseForm.css'

const ExpenseForm = ()=>{

  // Using overall useState
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // })
  const [enteredTitle,setEnteredTitle] = useState('')
  const [enteredAmount,setEnteredAmount] = useState('')
  const [enteredDate,setEnteredDate] = useState('')


  // Dealing with title input
  // const [enteredTitle, setEnteredTitle] = useState('')
  const titleChangeHandler = (event) =>{
    setEnteredTitle(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // })
    // setUserInput((prevState)=>{
    //   return {...prevState, enteredTitle: event.target.value}
    // })
  }

  // Dealing with Amount
  // const [enteredAmount, setEnteredAmount] = useState('')
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // })
    // setUserInput((prevState)=>{
    //   return {...prevState, enteredAmount: event.target.value}
    // })
  }

  // Dealing with Date
  // const [enteredDate,setenteredDate] = useState('')
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // })
    // setUserInput((prevState)=>{
    //   return {...prevState, enteredDate: event.target.value}
    // })
  }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__contol">
          <label>Title</label>
          <input name="Title" type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__contol">
          <label>Amount</label>
          <input name="Amount" type="number" min='0.01' setp='0.01' onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__contol">
          <label>Date</label>
          <input name="Date" type="date" min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )

}
export default ExpenseForm
