import React ,{useState} from 'react';
import './Expenses.css';
import ExpenseItem from  './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
function Expenses(props)
{
    const [filterYear,setFilterYear]= useState('2020');

    function filterChoosen(filterOption)
{
    setFilterYear(filterOption);
  console.log(filterOption);
}

    return (
        <div className="expenses">
             <ExpenseFilter  selectedYear={filterYear} onFilterChoice={filterChoosen} />
            <ExpenseItem expenseDate={props.item[0].date} expenseTitle={props.item[0].title} expenseAmount={props.item[0].amount}/>
            <ExpenseItem expenseDate={props.item[1].date} expenseTitle={props.item[1].title} expenseAmount={props.item[1].amount}/>
            <ExpenseItem expenseDate={props.item[2].date} expenseTitle={props.item[2].title} expenseAmount={props.item[2].amount}/>
            <ExpenseItem expenseDate={props.item[3].date} expenseTitle={props.item[3].title} expenseAmount={props.item[3].amount}/>   
        </div>
    );

}
export default Expenses;