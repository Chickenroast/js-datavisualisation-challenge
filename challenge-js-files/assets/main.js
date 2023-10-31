document.addEventListener("DOMContentLoaded", function () {
  // Créez un élément canvas pour le graphique
  const canvas = document.createElement("canvas");
  canvas.id = "chart";
  const targetElement = document.getElementById("table1");
  targetElement.parentNode.insertBefore(canvas, targetElement);
  const ctx = canvas.getContext("2d");

  let tdElements = document.querySelectorAll("#table1 tbody td:nth-of-type(1)");
  let tddata = document.querySelectorAll(
    "#table1 tbody td:not(:first-of-type)"
  );
  let country = [];
  // let years = [];

  for (let i = 0; i < tdElements.length; i++) {
    country.push(tdElements[i].textContent);
  }

  let chart = new Chart(ctx, {
    // The type of chart we want to create
    type: "line", // also try bar or other graph types

    // The data for our dataset
    data: {
      labels: country,
      // Information about the dataset
      datasets: [
        {
          label: "Year",
          backgroundColor: "lightblue",
          borderColor: "royalblue",
          data: [],
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
              labelString: "Numbers",
            },
          },
        ],
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Countrys",
            },
          },
        ],
      },
    },
  });
});
