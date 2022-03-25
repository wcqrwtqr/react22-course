import React, { useState } from 'react'
import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import ExpensesFitler from './ExpensesFilter'
import Card from '../UI/Card'

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
    console.log(`one level up :: Year selected ${selectedYear}`)
  }

  // Adding the filter logic to get the drop down list filter the expenses
  const filteredExpenses = props.items.filter(el => (
    el.date.getFullYear() == filteredYear.toString()
  ))

  let expensesContenet = <p>No expenses found.</p>;
  if (filteredExpenses.length > 0) {
    expensesContenet = filteredExpenses.map(el => (
      <ExpenseItem
        key={el.id}
        title={el.title}
        amount={el.amount}
        date={el.date} />
    ))
  }



  return (
    <div>
      <Card className='expenses'>
        <ExpensesFitler selected={filteredYear}
          onChangeFilter={filterChangeHandler} />

        {expensesContenet}

      </Card>
    </div>
  )
}

export default Expenses;
