import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from '../UI/Card';

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");

  function filterChoosen(filterOption) {
    setFilterYear(filterOption);
    console.log(filterOption);
  }

//   const filterExpenses = props.item.filter(
//     (expense) => expense.date.getFullYear().toString() === filterYear
//   );


  return (
    <div>
    <Card className="expenses">
      <ExpenseFilter selectedYear={filterYear} onFilterChoice={filterChoosen} />
      {props.item
        .filter((expense) => {
          return (
            new Date(expense.date).getFullYear().toString() ===
            filterYear.toString()
          );
        }).map((expense) => (
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
