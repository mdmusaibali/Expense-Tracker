import "./ExpenseChartBar.css";
function ExpenseChartBar(props) {
  let barHeight = "0%";
  if (props.maxValue > 0) {
    barHeight =
      Math.round((Number(props.value) / Number(props.maxValue)) * 100) + "%";
  }

  return (
    <div className="expenses-chart-bar-box">
      <div className="expenses-chart-label">{props.label}</div>
      <div className="expenses-chart-bar">
        <div
          className="expenses-chart-bar-fill"
          style={{ width: barHeight }}
        ></div>
      </div>
    </div>
  );
}
export default ExpenseChartBar;
