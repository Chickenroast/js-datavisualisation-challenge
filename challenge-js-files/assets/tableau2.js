document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.createElement("canvas");
  canvas.id = "chart";
  const targetElement = document.getElementById("table2");
  targetElement.parentNode.insertBefore(canvas, targetElement);
  const ctx = canvas.getContext("2d");

  //countrys
  let tdElements = document.querySelectorAll("#table2 tbody td:nth-of-type(1)");
  //countrydata
  let tddata = document.querySelectorAll("#table2 tbody td:not(:first-child)");
  //years
  let thElements = document.querySelectorAll("#table2 thead th");

  let country = [];
  let years = [];

  // Extract years
  for (let i = 2; i < thElements.length; i++) {
    years.push(thElements[i].textContent);
  }
  console.log("Years:", years);

  // Extract country names
  for (let i = 0; i < tdElements.length; i++) {
    let cellValue = tdElements[i].textContent;
    country.push(cellValue);
  }
  console.log("Country:", country);

  // Extract data
  let countryData = [];

  for (let i = 0; i < country.length; i++) {
    // Iterate over countries
    let countryRow = [];

    for (let j = 0; j < years.length; j++) {
      let cellValue = tddata[i * years.length + j].textContent;
      let value = parseInt(cellValue);

      if (!isNaN(value)) {
        countryRow.push(value);
      }
    }

    countryData.push(countryRow);
  }
  console.log("Country Data:", countryData);

  // Create data for the bar chart
  const data = {
    labels: country,
    datasets: years.map((year, i) => ({
      label: year,
      data: countryData.map((row) => row[i]),
      backgroundColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
        Math.random() * 255
      }, 0.2)`,
      borderColor: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
        Math.random() * 255
      })`,
      borderWidth: 1,
    })),
  };
  console.log("Final Data:", data);

  let chart = new Chart(ctx, {
    type: "bar",
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});
