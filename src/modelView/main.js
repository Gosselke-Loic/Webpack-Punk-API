import getBeers from "../service/serviceBeer";
import createBeer from "./components/createBeers";
import modalTemplate from "./components/modal";
import title from "./components/title";

//style bootstrap html body
const body = document.body;
body.classList = "container-fluid bg-secondary";

//Parent element to appenchild of the all elements
const display = document.createElement("div");
display.id = "display";
display.classList = "row gap-3 mt-3 justify-content-center"

//Appenchild Parent Div on the html body
body.appendChild(display);

//Render title
title(display)

//Render All the beers and display into html
const beers = await getBeers();
for (const item of beers){
    createBeer(item, display);
}

//Create and appendChild the modal into the html page
modalTemplate(display);

//Call the modall
let modal = document.getElementById("modalBeer");

//Take the value of the button, find the correct beer from the value of the button and display the informations into the modal
modal.addEventListener("show.bs.modal", (e) => {
    let buttons = e.relatedTarget;

    let idButton = buttons.getAttribute("data-bs-value");

    let modalname = modal.querySelector("#name");

    let modalMaker = modal.querySelectorAll(".modalData");

    const id = beers.find(element => element.id == idButton)
    console.log(id);

    modalname.textContent = id.name;
    modalMaker[0].textContent = `Maker: ${id.contributed_by}`;
    modalMaker[1].textContent = `Date: ${id.first_brewed}`;
    modalMaker[2].textContent = `Tagline: ${id.tagline}`;
    modalMaker[3].textContent =  `Tips: ${id.brewers_tips}`;
    modalMaker[4].textContent = `Alcohol Volume: ${id.abv}%`;
});