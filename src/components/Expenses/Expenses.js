import './Expenses.css';
import ExpenseItem from  './ExpenseItem';

function Expenses(props)
{
    return (
        <div className="expenses">
            <ExpenseItem expenseDate={props.item[0].date} expenseTitle={props.item[0].title} expenseAmount={props.item[0].amount}/>
            <ExpenseItem expenseDate={props.item[1].date} expenseTitle={props.item[1].title} expenseAmount={props.item[1].amount}/>
            <ExpenseItem expenseDate={props.item[2].date} expenseTitle={props.item[2].title} expenseAmount={props.item[2].amount}/>
            <ExpenseItem expenseDate={props.item[3].date} expenseTitle={props.item[3].title} expenseAmount={props.item[3].amount}/>   
        </div>
    );

}
export default Expenses;