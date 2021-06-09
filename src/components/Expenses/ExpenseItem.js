import React, { useState } from "react"; //USESTATE=>  A react hook, allows us to reflect the changes
//most of React hooks strat with 'use' keyword and called inside react componnet function always;
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseTitle from "./ExpenseTitle";
import Card from "../UI/Card";

// useState(); //calling useState here is error;

function ExpenseItem(props) {
  //useState takes initial value as an arguement and it doesnt assign values directly using assigning operator instead it calles the function to do so;
  //this returns in the form of array where first value is calue itself and second value is updating function.
  //const [title, setTitle] = useState(props.expenseTitle);

  // let title = props.expenseTitle;
  // function clickhandler() {
    //   title1 ='Updated'; //this doesnt trigger rerendering of the component.
    // // console.log(title1);

   // setTitle("Updated");
    //for assigning new value we will call the set function and passing new value as a paramter,
    // also this just not only assign the value but re-execute the component of tat useState.
  //}

  const month = props.expenseDate.toLocaleString("en-US", { month: "long" });
  const day = props.expenseDate.toLocaleString("en-US", { day: "2-digit" });
  const year = props.expenseDate.getFullYear();

  return (

    <div>
      <Card className="expense-item">
        <ExpenseDate month={month} day={day} year={year} />

        <div className="expense-item__description">
          <ExpenseTitle title={props.expenseTitle} />

          <div className="expense-item__price">{props.expenseAmount}</div>
        </div>
        {/* <button onClick={clickhandler}>Click Me!</button> */}

        {/* all these 'on' props want the funtion to be executed  */}
        {/* in that we have to just mention the name of the function without executing it (i.e. adding ()) */}
        {/* concept of state comes into picture when somethings changes and has to be re-evaluated! */}
      </Card>
    </div>
  );
}
export default ExpenseItem;
