import React ,{useState} from "react";
import "./ExpenseForm.css";

function ExpenseForm() {

    const [entertitle,setenterTitle]=useState('');
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

  return (
    <form>
      <div className="new-expense__controls">

        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number"  min="0.01" step="0.01" onChange={amountChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input type="date"  min="2019-01-01"   max="2023-01-01" onChange={dateChangeHandler} />
        </div>

      </div>
      <div className="new-expense__actions">
      <button type="submit">Add</button>
      </div>
     
    </form>
  );
}

export default ExpenseForm;
