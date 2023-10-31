document.addEventListener("DOMContentLoaded", function () {
  // Créez un élément canvas pour le graphique
  const canvas = document.createElement("canvas");
  canvas.id = "chart";
  const targetElement = document.getElementById("table1");
  targetElement.parentNode.insertBefore(canvas, targetElement);
  const ctx = canvas.getContext("2d");

  const thead = table.createTHead();

  let chart = new Chart(ctx, {
    // The type of chart we want to create
    type: "line", // also try bar or other graph types

    // The data for our dataset
    data: {
      labels: [
        "Jun 2016",
        "Jul 2016",
        "Aug 2016",
        "Sep 2016",
        "Oct 2016",
        "Nov 2016",
        "Dec 2016",
        "Jan 2017",
        "Feb 2017",
        "Mar 2017",
        "Apr 2017",
        "May 2017",
      ],
      // Information about the dataset
      datasets: [
        {
          label: "Year",
          backgroundColor: "lightblue",
          borderColor: "royalblue",
          data: [
            26.4, 39.8, 66.8, 66.4, 40.6, 55.2, 77.4, 69.8, 57.8, 76, 110.8,
            142.6,
          ],
        },
      ],
    },

    // Configuration options
    options: {
      layout: {
        padding: 10,
      },
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Precipitation in Toronto",
      },
      scales: {
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Precipitation in mm",
            },
          },
        ],
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Month of the Year",
            },
          },
        ],
      },
    },
  });
});
