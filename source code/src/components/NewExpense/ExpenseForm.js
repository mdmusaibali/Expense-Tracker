import { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm(props) {
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");

  const handleTitleChange = function (e) {
    setTitle(e.target.value);
  };
  const handleAmountChange = function (e) {
    setAmount(e.target.value);
  };
  const handleDateChange = function (e) {
    setDate(e.target.value);
  };

  //pass form data back to NewExpense.js
  const handleSubmit = function (e) {
    e.preventDefault();
    const expenseData = {
      id: Math.random(),
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    setTitle("");
    setAmount("");
    setDate("");
    props.saveExpenseData(expenseData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-inputs">
        <div className="form-input-box">
          <input
            className="form-input"
            name="title"
            type="text"
            value={enteredTitle}
            placeholder="Title"
            onChange={handleTitleChange}
          ></input>
          <label className="form-label" htmlFor="title">
            Title
          </label>
        </div>
        <div className="form-input-box">
          <input
            className="form-input"
            name="amount"
            type="number"
            placeholder="Amount"
            value={enteredAmount}
            onChange={handleAmountChange}
          ></input>
          <label className="form-label" htmlFor="amount">
            Amount
          </label>
        </div>
        <div className="form-input-box">
          <input
            className="form-input"
            name="date"
            type="date"
            onChange={handleDateChange}
            value={enteredDate}
          ></input>
        </div>
      </div>
      <div className="form-buttons">
        <button className="form-button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className="form-button">Add Expense</button>
      </div>
    </form>
  );
}
export default ExpenseForm;
