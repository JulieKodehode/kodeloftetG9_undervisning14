/*
Hente noe fra HTML
Modifisere det i JS
Sende det tilbake til HTML
*/

// const projectCard = document.getElementById("projectCard");

// En variabel som lagrer at vi henter et element som har ID-navnet projectCard.
const projectCard = document.querySelector("#projectCard");
console.log(projectCard);

// En variabel som lagrer at vi lager et nytt element som er h3.
const projectCardHeading = document.createElement("h3");
console.log(projectCardHeading);

// En variabel som lagrer at vi lager et nytt img element.
const projectCardImage = document.createElement("img");
console.log(projectCardImage);

// En variabel som lagrer at vi lager et nytt p element.
const projectCardInfo = document.createElement("p");
console.log(projectCardInfo);

// Gir elementet som ble laget noe tekst innhold.
projectCardHeading.textContent = "Mitt prosjekt 2";

// Gir h3-elementet som be laget en class.
projectCardHeading.classList.add("projectTitle");

// Gir img-elmentet som ble laget en src.
projectCardImage.src = "cheeseknight.png";

// Gir img-elmentet som ble laget en alt.
projectCardImage.alt = "Cartoon bilde av en mus som er en ridder";

// Gir img-elmentet som ble laget en class.
projectCardImage.classList.add("projectImage");

// Gir p-elementet som ble laget tekst innhold.
projectCardInfo.textContent = "I dette prosjektet bruke jeg ...."

// h3-elementet vi lagde blir lagt til div-elementet vi hentet
projectCard.appendChild(projectCardHeading);

// img-elementet vi lagde blir lagt til div-elementet vi hentet
projectCard.appendChild(projectCardImage);

// p-elementet vi lagde blir lagt til div-elementet vi hentet
projectCard.appendChild(projectCardInfo);

//
//

const businessCard = document.querySelector("#businessCard");

businessCard.innerHTML = `
    <h3 class="projectTitle">Julius Hauge</h3>
    <img class="projectImage" src="cheeseknight.png" alt="Cartoon" />
    <p>Fullstack utvikler</p>
`