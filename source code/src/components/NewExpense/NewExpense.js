import { useState } from "react";
import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
function NewExpense(props) {
  const [formVisibility, setFormVisibility] = useState(false);
  const handleSaveExpenseData = function (expense) {
    props.onAddExpense(expense);
    handleFormVisibilityOff();
  };

  const handleFormVisibilityOn = function () {
    setFormVisibility(true);
  };

  const handleFormVisibilityOff = function () {
    setFormVisibility(false);
  };

  return (
    <Card classes="new-expense">
      {formVisibility && (
        <ExpenseForm
          onCancel={handleFormVisibilityOff}
          saveExpenseData={handleSaveExpenseData}
        />
      )}
      {!formVisibility && (
        <button className="form-button" onClick={handleFormVisibilityOn}>
          Add Expense
        </button>
      )}
    </Card>
  );
}
export default NewExpense;
