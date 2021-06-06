import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseTitle from "./ExpenseTitle";
import Card from '../UI/Card';

function ExpenseItem(props) {
  const month = props.expenseDate.toLocaleString("en-US", { month: "long" });
  const day = props.expenseDate.toLocaleString("en-US", { day: "2-digit" });
  const year = props.expenseDate.getFullYear();
  return (
    
    <Card className="expense-item">
      <ExpenseDate month={month} day={day} year={year} />

      <div className="expense-item__description">
        <ExpenseTitle title={props.expenseTitle} />

        <div className="expense-item__price">{props.expenseAmount}</div>
      </div>
    </Card>
  );
}
export default ExpenseItem;
