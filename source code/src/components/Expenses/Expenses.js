import { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";
function Expenses(props) {
  const [enteredYear, setExpenseYear] = useState("2022");

  const filterByYear = function (yearToSet) {
    setExpenseYear(yearToSet);
  };

  const filteredExpenses = props.items.filter(
    (item) => Number(item.date.getFullYear()) === Number(enteredYear)
  );

  const handlePassDataToApp = function (data_id) {
    props.onDelete(data_id);
  };

  return (
    <Card classes="expenses">
      <ExpenseFilter onChangeYear={filterByYear} currentYear={enteredYear} />
      <ExpensesChart items={filteredExpenses} />
      <ExpensesList items={filteredExpenses} onDelete={handlePassDataToApp} />
    </Card>
  );
}
export default Expenses;
