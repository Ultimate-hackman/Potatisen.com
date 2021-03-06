import { Line } from "react-chartjs-2";
import dayjs from "dayjs";
import React, { FunctionComponent } from "react";
import getStressPoints from "../../lib/calendar/getStressPoints";
import Ugg from "../../lib/types/Ugg";
import Language from "../../lib/types/Language";
import { Test } from "../../lib/calendar/testData";

export interface LineChartProps {
  ugg: Ugg;
  language: Language;
  span: number;
  data: Test[];
}

const LineChart: FunctionComponent<LineChartProps> = (props) => {
  const day = dayjs().locale("sv");
  const chartData = [];
  const labels = [];

  const {
    ugg,
    language,
    span,
    data,
  } = props;

  for (let i = 0; i < span; i += 1) {
    const date = day.add(i, "day");

    chartData.push(getStressPoints(data, date));
    labels.push(date.format("D MMM"));
  }

  return (
    <Line
      height={200}
      width={600}
      options={{
        matainAspectRatio: true,
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
        labels,
        datasets: [{
          lineTension: 0,
          label: `Kommande arbets nivå (${ugg}, ${language})`,
          data: chartData,
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
          cubicInterpolationMode: "default",

        }],
      }}
    />
  );
};

export default LineChart;
