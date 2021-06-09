import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  //this prop is onSavingData

  const [clicked, setclick] = useState(false);

  function saveExpenseHandler(recievedExpenseData) {
    const expenseData = {
      ...recievedExpenseData,
      id: Math.random().toString(16).slice(2),
    };
    //console.log(expenseData);
    props.onSavingData(expenseData);
  }

  function addExpenseHandler() {
 setclick(true);
    //console.log(clicked.toString());
  }

  function deleteExpenseHandler()
  {
    setclick(false);
  }


  return (
    <div className="new-expense">
      {clicked === true ? (
        <ExpenseForm mySaveExpenseData={saveExpenseHandler} clickedfunction= {deleteExpenseHandler} />
      ) : <button onClick={addExpenseHandler}>Add New Expense</button>}
      
      {/* //mySaveExpenseData is recieving data from expense form and calling that function when triggered! */}
    </div>
  );
}

export default NewExpense;
