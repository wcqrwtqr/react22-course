import React, { useState } from 'react'
import './Expenses.css'
// import ExpenseItem from './ExpenseItem'
import ExpensesFitler from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import Card from '../UI/Card'

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
    console.log(`one level up :: Year selected ${selectedYear}`)
  }

  // Adding the filter logic to get the drop down list filter the expenses
  const filteredExpenses = props.items.filter(el => (
    el.date.getFullYear().toString() === filteredYear
  ))


  return (
    <div>
      <Card className='expenses'>
        <ExpensesFitler selected={filteredYear}
          onChangeFilter={filterChangeHandler} />

        <ExpensesList items={filteredExpenses}/>

      </Card>
    </div>
  )
}

export default Expenses;
