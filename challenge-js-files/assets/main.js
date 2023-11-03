document.addEventListener("DOMContentLoaded", function () {
  // Créez un élément canvas pour le graphique
  const canvas = document.createElement("canvas");
  canvas.id = "chart";
  const targetElement = document.getElementById("table1");
  targetElement.parentNode.insertBefore(canvas, targetElement);
  const ctx = canvas.getContext("2d");

  // let tdElements = document.querySelectorAll("#table1 tbody td:nth-of-type(1)");
  // let tddata = document.querySelectorAll("#table1 td");
  // let thElements = document.querySelectorAll(
  //   "#table1 tbody tr:nth-of-type(1) th"
  // );

  let tdElements = document.querySelectorAll("#table1 tbody td:nth-of-type(1)");
  let tddata = document.querySelectorAll("#table1 td");
  let thElements = document.querySelectorAll(
    "#table1 tbody tr:nth-of-type(1) th"
  );

  // let tdElements = row.document.querySelectorAll("#table1 td:nth-of-type(1)");
  // let tddata = row.cells.document.querySelectorAll("#table1 td");
  // let thElements = row.document.querySelectorAll(
  //   "#table1 tbody tr:nth-of-type(1) th"
  // );

  // console.log("th elements:", thElements[i].textContent, country, data);

  let country = [];
  let years = [];
  let data = [];

  for (let i = 1; i < thElements.length; i++) {
    if (thElements[i].textContent > 0) {
      years.push(thElements[i].textContent, [country], [data]);
      console.log("la: ", thElements[i].textContent, [country], [data]);
    }

    // console.log("th elements:", thElements[i].textContent, country, data);
  }

  for (let i = 0; i < tdElements.length; i++) {
    country.push(tdElements[i].textContent);

    for (let j = 1; j < tddata.length; j++) {
      // console.log("value boucle: ", tddata[i].textContent);
      let tmp = parseFloat(tddata[j].textContent);

      if (tmp) {
        data.push(parseFloat(tddata[j].textContent));
        // console.log(tddata[i].textContent);
      }

      // console.log("data test :", data);
    }
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
          label: years,
          backgroundColor: "lightblue",
          borderColor: "royalblue",
          data: data,
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
        text: "years",
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
