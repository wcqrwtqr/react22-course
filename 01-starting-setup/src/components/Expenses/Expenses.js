import React, { useState } from 'react'
import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import ExpensesFitler from './ExpensesFilter'
import Card from '../UI/Card'

const Expenses = (props) => {

  const [filteredYear, setSelectedYear] = useState('2020')

  const filterChangeHandler = (selectedYear) => {
    setSelectedYear(selectedYear)
    console.log(`one level up :: Year selected ${selectedYear}`)
  }

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFitler selected={filteredYear}
          onChangeFilter={filterChangeHandler} />

        {props.items.map(el => (
          <ExpenseItem
            key={el.id}
            title={el.title}
            amount={el.amount}
            date={el.date} />
        ))}

      </Card>
    </div>
  )
}

export default Expenses;
