import "./ExpenseFilter.css";
function ExpenseFilter(props) {
  const changeYear = function (e) {
    props.onChangeYear(e.target.value);
  };
  return (
    <div className="expense-filter">
      <h1 className="expense-filter-text">Filter by year</h1>
      <select
        onChange={changeYear}
        value={props.currentYear}
        className="expense-filter-select"
      >
        <option>2022</option>
        <option>2021</option>
        <option>2020</option>
      </select>
    </div>
  );
}
export default ExpenseFilter;
