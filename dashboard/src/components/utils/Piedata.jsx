import React from "react";
import PieChart from "./piechart";

const YourComponent = () => {
  const vehiclesData = {
    labels: ["New", "In Transit", "Received"],
    datasets: [
      {
        data: [100, 0, 0],
        backgroundColor: ["orange", "black", "yellow"],
      },
    ],
  };

  const ordersData = {
    labels: ["Pending", "In Transit", "Received"],
    datasets: [
      {
        data: [100, 0, 0],
        backgroundColor: ["orange", "black", "yellow"],
      },
    ],
  };

  const paymentsData = {
    labels: ["Pending", "Completed"],
    datasets: [
      {
        data: [100, 0],
        backgroundColor: ["orange", "black"],
      },
    ],
  };

  const complaintsData = {
    labels: ["No Data"],
    datasets: [
      {
        data: [100, 0],
        backgroundColor: ["black"],
      },
    ],
  };

  return (
    <div className="chart-row">
      <PieChart title="" data={vehiclesData} />
      <PieChart title="" data={ordersData} />
      <PieChart title="" data={paymentsData} />
      <PieChart title="" data={complaintsData} />
    </div>
  );
};

export default YourComponent;
