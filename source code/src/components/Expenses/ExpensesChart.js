import ExpenseChartBar from "./ExpenseChartBar";
import "./ExpensesChart.css";
function ExpensesChart(props) {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  props.items.map((item) => {
    chartDataPoints[item.date.getMonth()].value += Number(item.amount);
  });
  const dataPointValues = chartDataPoints.map((dataPoint) => dataPoint.value);
  const maxAmount = Math.max(...dataPointValues);
  return (
    <div className="expenses-chart">
      {chartDataPoints.map((bar) => {
        return (
          <ExpenseChartBar
            key={bar.label}
            maxValue={maxAmount}
            value={bar.value}
            label={bar.label}
          />
        );
      })}
    </div>
  );
}
export default ExpensesChart;
