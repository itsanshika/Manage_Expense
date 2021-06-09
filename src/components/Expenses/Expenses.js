import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from '../UI/Card';
import ExpenseChart from './ExpensesChart';

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");

  function filterChoosen(filterOption) {
    setFilterYear(filterOption);
    console.log(filterOption);
  }

  const filterExpenses = props.item.filter(
    (expense) => expense.date.getFullYear().toString() === filterYear.toString()
  );


  return (
    <div>
    <Card className="expenses">
      <ExpenseFilter selectedYear={filterYear} onFilterChoice={filterChoosen} />
     <ExpenseChart expenses={filterExpenses} />
     {filterExpenses.length===0 ? <div className="noitem">No Expense Exist in List</div> : filterExpenses.map((expense) => (
        <ExpenseItem
        key={expense.id}
          expenseDate={expense.date}
          expenseTitle={expense.title}
          expenseAmount={expense.amount}
        />
      ))}
      
    </Card>
    </div>
  );
}
export default Expenses;
