import { MantineProvider, Text } from "@mantine/core";
import Dashboard from "./components/dashboardLayout";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data } from "./components/utils/Data";
Chart.register(CategoryScale);
import BarChart from "./components/utils/barchart";
import Adduser from "./components/adduser";
import ViewUserForm from "./components/utils/viewuser";
import { Route, Routes } from "react-router-dom";

export default function App() {

  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        data: Data.map((data) => data.userGain),
        backgroundColor: ["#ecf0f1", "#50AF95", "#f3ba2f", "#2a71d0"],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  });
  return (

    <Routes>
      {/* index === path="/" */}
      <Route path="/" element={<Dashboard />}>
        <Route path="/add-user" element={<Adduser />} />
        <Route path="/view-user" element={<ViewUserForm />} />
      </Route>
    </Routes>
  );
}
