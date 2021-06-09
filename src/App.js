//ROOT component
//component in react is a javascript funtion.
import React,{useState} from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

import Card from "./components/UI/Card";
function App() {

  

  const dummy = [];

  const [ prevdata,setnewdata]=useState(dummy);

  function addExpenseHandlerfinal(expenseData) {
    console.log("in App.js");
    console.log(expenseData);
    setnewdata((prevd)=>
    {
      return [expenseData,...prevd];
    }
    );
  }

  return (
    <Card>
      <NewExpense onSavingData={addExpenseHandlerfinal} />

      <Expenses item={prevdata} />
    </Card>

    //JSX CODE
  );
}

export default App;
