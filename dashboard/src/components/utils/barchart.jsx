import { Bar } from "react-chartjs-2";
import"./barchart.css";
const BarChart = ({ chartData }) => {
  return (
    <div className="bar-container">
      <h2 style={{ textAlign: "center" }}>Bar Chart</h2>
      <Bar
        data={{
          labels: ["Thurday", "Friday", "Saturday", "Sunday", "Monday", "tuesday","Wednesday","Thursday"],
          datasets: [
            {
              
              data: [0,1.0, 0,0,0,0,0,0,0],
              borderWidth: 1,
            },
          ],
        }}
        options={{
          plugins: {
            title: {
              display: true,
              // text: "Bar Chart",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart;
