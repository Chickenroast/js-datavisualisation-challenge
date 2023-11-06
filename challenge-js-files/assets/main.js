document.addEventListener("DOMContentLoaded", function () {
  // Créez un élément canvas pour le graphique
  const canvas = document.createElement("canvas");
  canvas.id = "chart";
  const targetElement = document.getElementById("table1");
  targetElement.parentNode.insertBefore(canvas, targetElement);
  const ctx = canvas.getContext("2d");

  let tdElements = document.querySelectorAll("#table1 tbody td:nth-of-type(1)");
  let tddata = document.querySelectorAll("#table1 td");
  let thElements = document.querySelectorAll(
    "#table1 tbody tr:nth-of-type(1) th"
  );

  let country = [];
  let years = [];

  // Extract years
  for (let i = 1; i < thElements.length; i++) {
    years.push(thElements[i].textContent);
  }

  // Extract country names
  for (let i = 0; i < tdElements.length; i++) {
    let cellValue = tdElements[i].textContent;
    if (cellValue === ":") {
      country.push(0); // Replace ":" with 0
    } else {
      country.push(cellValue);
    }
  }

  // Extract data
  let countryData = [];

  for (let i = 0; i < tdElements.length; i++) {
    let countryRow = [];
    let dataIndex = i * years.length;

    for (let j = 0; j < years.length; j++) {
      let cellValue = tddata[dataIndex + j].textContent;

      if (cellValue === ":") {
        countryRow.push(0);
      } else {
        let value = parseFloat(cellValue.replace(",", "."));
        if (!isNaN(value)) {
          countryRow.push(value);
        }
      }
    }
    countryData.push(countryRow);
  }

  // Print the extracted data for debugging
  console.table("Years:", years);
  console.table("Countries:", country);
  console.table("Data:", countryData);

  let chart = new Chart(ctx, {
    // The type of chart we want to create
    type: "line", // also try bar or other graph types

    // The data for our dataset
    data: {
      labels: country,
      // Information about the dataset
      datasets: [
        {
          label: years,
          backgroundColor: "lightblue",
          borderColor: "royalblue",
          data: countryData,
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
        text: "Years",
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
              labelString: "Countries",
            },
          },
        ],
      },
    },
  });
});
