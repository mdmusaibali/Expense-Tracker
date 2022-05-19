import "./ExpenseItem.css";
// import deleteIcon from './com'
function ExpenseItem(props) {
  const day = new Intl.DateTimeFormat("en-IN", { day: "2-digit" }).format(
    props.expenseDate
  );
  const month = new Intl.DateTimeFormat("en-IN", { month: "long" }).format(
    props.expenseDate
  );
  const year = props.expenseDate.getFullYear();
  const deleteExpense = (e) => {
    props.onDelete(e.target.closest(".expense-item").dataset.id);
  };
  return (
    <li data-id={props.id} className="expense-item">
      <div>
        <div className="expense-item-date">
          {day} {month} {year}
        </div>
        <div className="expense-item-title">{props.expenseTitle}</div>
      </div>
      <div className="expense-price">
        <div className="expense-item-amount">₹{props.expenseAmount}</div>
        <img
          onClick={deleteExpense}
          className="expense-delete"
          src="https://img.icons8.com/fluency/48/000000/filled-trash.png"
        />
      </div>
    </li>
  );
}
export default ExpenseItem;
