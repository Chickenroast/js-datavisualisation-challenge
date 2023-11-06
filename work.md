tables et leurs elements :

thead : titre / class elements tableau
tbody : ensemble des elements du graphique
tr : body de la rangée
th : numero de la rangée
td : chaque element de la rangée

thElements ---> premier element tr du tbody
creer un filtre th elements pour exclure l'espace vide
dans th element push un td à la fois de chaque country en excluant le country

creer un div sur js
creer un canva sur index.html

utilise les appendchild pour prendre les info de la data de la table
et donc tu creer une nouvelle table par dessus le tableau de base

const getid table 1 et table 2

puis tu fais un for pour qu'il lise le tableau et qu'il remette les données à jour

ROW = la colonne

CELL = les cellules

sauvegarde :

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
// "#table1 tbody tr:nth-of-type(1) th"
// );

let tdElements = document.querySelectorAll("#table1 tbody td:nth-of-type(1)");
let tddata = document.querySelectorAll("#table1 td");
let thElements = document.querySelectorAll(
"#table1 tbody tr:nth-of-type(1) th"
);

// let tdElements = row.document.querySelectorAll("#table1 td:nth-of-type(1)");
// let tddata = row.cells.document.querySelectorAll("#table1 td");
// let thElements = row.document.querySelectorAll(
// "#table1 tbody tr:nth-of-type(1) th"
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

///////////////////////////////////////
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
