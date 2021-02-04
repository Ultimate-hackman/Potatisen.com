import dayjs from "dayjs";
import { Bar } from "react-chartjs-2";
import getStressPoints from "../../lib/calendar/getStressPoints";
import useTestData from "../../lib/calendar/testData";

export default function classChart(props) {
  const o91 = useTestData("O91");
  const o92 = useTestData("O92");
  const o93 = useTestData("O93");

  const day = dayjs();
  return (
    <Bar
      height={200}
      width={600}
      options={{
        matainAspectRatio: false,
        responsive: true,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
        legend: {
          labels: {
            fontSize: 20,
            fontColor: "black",

          },
        },
        layout: {
          padding: {
            width: "50%",
          },
        },
      }}
      data={{
        labels: ["O91", "O92", "093"],
        datasets: [{
          label: "Klasser",
          data: [getStressPoints(o91, day), getStressPoints(o92, day), getStressPoints(o93, day)],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,

        }],
      }}
    />
  );
}
