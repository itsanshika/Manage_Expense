import React ,{useState} from "react";
import "./ExpenseForm.css";

function ExpenseForm( props ) { //this prop is mySaveExpenseData

    const [enterTitle,setenterTitle]=useState('');
    const [enterAmount,setenterAmount]=useState('');
    const [enterDate,setenterDate ]=useState('');

function titleChangeHandler(event)
{
setenterTitle(event.target.value);
}

function amountChangeHandler(event)
{
    setenterAmount(event.target.value);
}
function dateChangeHandler(event)
{
    setenterDate(event.target.value);
}

function submitHandler(event)
{
  event.preventDefault(); //avoid page reloading on submitting button's click!

  const expenseData= //creating object combining all the date ,amount and title.
  {
title: enterTitle,
amount: enterAmount,
date: new Date(enterDate)
  };
//  console.log(expenseData);
 
props.mySaveExpenseData(expenseData);

 //clearing up the form and then sending these values back to form using their value property.
 setenterAmount('');
 setenterDate('');
 setenterTitle('');
  
}

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">

        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enterTitle} onChange={titleChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={enterAmount}  min="0.01" step="0.01" onChange={amountChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input type="date"  value={enterDate} min="2019-01-01"   max="2023-01-01" onChange={dateChangeHandler} />
        </div>

      </div>
      <div className="new-expense__actions">
      <button type="submit">Add</button>
      </div>
     
    </form>
  );
}

export default ExpenseForm;
