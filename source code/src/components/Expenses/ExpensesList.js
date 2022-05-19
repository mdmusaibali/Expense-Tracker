import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
function ExpensesList(props) {
  const handlePassDataToExpenses = function (data_id) {
    props.onDelete(data_id);
  };
  return (
    <ul className="expenses-list">
      {props.items.map((item) => {
        return (
          <ExpenseItem
            id={item.id}
            key={Math.random()}
            expenseTitle={item.title}
            expenseDate={item.date}
            expenseAmount={item.amount}
            onDelete={handlePassDataToExpenses}
          />
        );
      })}
    </ul>
  );
}
export default ExpensesList;
