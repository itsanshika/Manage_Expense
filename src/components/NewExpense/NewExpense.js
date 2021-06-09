import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  //this prop is onSavingData

  function saveExpenseHandler(recievedExpenseData) {
    const expenseData = {
      ...recievedExpenseData,
      id: Math.random().toString(16).slice(2),
    };
    //console.log(expenseData);
    props.onSavingData(expenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm mySaveExpenseData={saveExpenseHandler} />

      {/* //mySaveExpenseData is recieving data from expense form and calling that function when triggered! */}
    </div>
  );
}

export default NewExpense;
