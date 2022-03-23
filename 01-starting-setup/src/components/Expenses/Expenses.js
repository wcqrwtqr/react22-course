import React, {useState} from 'react'
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
        <ExpensesFitler selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date} />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date} />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date} />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date} />
      </Card>
    </div>
  )
}

export default Expenses;
