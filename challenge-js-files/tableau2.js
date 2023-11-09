export function createChart() {
  const canvas = document.createElement("canvas");
  canvas.id = "chart";
  const targetElement = document.getElementById("table2");
  targetElement.parentNode.insertBefore(canvas, targetElement);
  const ctx = canvas.getContext("2d");

  //countrys
  let tdElements = document.querySelectorAll("#table2 tbody td:nth-of-type(1)");
  //   //countrydata
  let tddata = document.querySelectorAll("#table2 tbody td:not(:first-child)");
  //years
  let thElements = document.querySelectorAll("#table2 thead th");

  let country = [];
  let years = [];
  let countryData = [];

  // Extract years
  for (let i = 2; i < thElements.length; i++) {
    years.push(thElements[i].textContent);
  }

  //   Extract country names
  for (let i = 0; i < tdElements.length; i++) {
    let cellValue = tdElements[i].textContent;
    country.push(cellValue);
  }

  //   // Extract data
  for (let i = 0; i < tdElements.length; i++) {
    // Iterate over countries
    let countryRow = [];
    let dataIndex = i * (years.length + 1);

    for (let j = 0; j < years.length + 1; j++) {
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
  console.table("Country:", country);
  console.table("Data:", countryData);

  // Organisez les données en fonction des années
  const datasets = years.map((year, i) => {
    return {
      label: year,
      data: countryData.map((row) => row[i]),
      backgroundColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
        Math.random() * 255
      }, 0.2)`,
      borderColor: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
        Math.random() * 255
      })`,
      borderWidth: 1,
    };
  });

  const data = {
    labels: country,
    datasets: datasets,
  };

  const config = {
    type: "bar",
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  let chart = new Chart(ctx, config);
}
