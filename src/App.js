import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Tooltip,
  Title,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import logo from "./images/logo.svg";
import "./index.css";

ChartJS.register(Tooltip, Title, BarElement, CategoryScale, LinearScale);

function App() {
  const state = {
    labels: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
    datasets: [
      {
        label: "",
        backgroundColor: "hsl(10, 79%, 65%)",
        borderRadius: 10,
        hoverBackgroundColor: "hsl(186, 34%, 60%)",
        data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
      },
    ],
  };
  return (
    <>
      <div className="page">
        <article className="balance-card">
          <h2 className="balance-title">
            <span className="balance-text">My balance</span>
            $921.48
          </h2>
          <img src={logo} alt="logo" />
        </article>

        <article className="top-card">
          <h1 className="bar-title">Spending - Last 7 days</h1>
          <Bar data={state} />

          <article className="bottom-card">
            <h2 className="profit-title">
              <span className="total-text">Total this month</span>
              $478.33
            </h2>
            <h3 className="box-0">
              +2.4%
              <span className="percentag-profit">from last month</span>
            </h3>
          </article>
        </article>
      </div>
    </>
  );
}

export default App;
