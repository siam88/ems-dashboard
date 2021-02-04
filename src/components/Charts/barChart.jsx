import React from "react";
import { Bar } from "react-chartjs-2";

export const BarChart = () => {
  return (
    <>
      <Bar
        height={400}
        width={400}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
        data={{
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          borderWidth: 1,
          datasets: [
            {
              label: "#Cost of this month",
              data: [12, 16, 3, 5, 2, 3, 30, 32, 4, 1, 55, 64],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(77, 75, 192, 0.2)",
                "rgba(192, 75, 75, 0.2)",
                "rgba(26, 115, 232, 0.2)",
                "rgba(26, 232, 61, 0.2)",
                "rgba(232, 187, 26, 0.2)",
                "rgba(232, 92, 26, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
                "rgba(77, 75, 192, 1)",
                "rgba(192, 75, 75, 1)",
                "rgba(26, 115, 232, 1)",
                "rgba(26, 232, 61, 1)",
                "rgba(232, 187, 26,1)",
                "rgba(232, 92, 26, 1)",
              ],
            },

            {
              label: "#Revenue of this month",
              data: [14, 20, 5, 15, 12, 30, 12, 15, 40, 11, 55, 70],
              backgroundColor: [
                "rgba(255, 99, 132, 0.5)",
                "rgba(54, 162, 235, 0.5)",
                "rgba(255, 206, 86, 0.5)",
                "rgba(75, 192, 192, 0.5)",
                "rgba(153, 102, 255, 0.5)",
                "rgba(255, 159, 64, 0.5)",
                "rgba(77, 75, 192, 0.5)",
                "rgba(192, 75, 75, 0.5)",
                "rgba(26, 115, 232, 0.5)",
                "rgba(26, 232, 61, 0.5)",
                "rgba(232, 187, 26, 0.5)",
                "rgba(232, 92, 26, 0.5)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
                "rgba(77, 75, 192, 1)",
                "rgba(192, 75, 75, 1)",
                "rgba(26, 115, 232, 1)",
                "rgba(26, 232, 61, 1)",
                "rgba(232, 187, 26,1)",
                "rgba(232, 92, 26, 1)",
              ],
            },
          ],
        }}
      />
    </>
  );
};
