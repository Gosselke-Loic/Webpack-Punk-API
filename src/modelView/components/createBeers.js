/**
 * Create a card for each beer
 * @param {object} value one beer for datas
 * @param {HTMLDivElement} htmlDiv div in html file to display all of cards
 * @returns model card for each beer
 */
 function createBeer(value, htmlDiv) {

    let div0 = document.createElement("div");
    div0.className= "card thor shadow-lg col-3 mt-3";

    let divImg = document.createElement("div");
    divImg.className= "text-center";

    let img = document.createElement("img");
    img.className = "card-img-top w-25 mt-3 mb-2";
    img.src = value.image_url;
    divImg.appendChild(img);
    div0.appendChild(divImg);

    let div1 = document.createElement("div");
    div1.className = "card-header text-center";
    
    let h2 = document.createElement("h2");
    h2.className = "fw-bold text-decoration-underline";
    h2.innerHTML = value.name;
    div1.appendChild(h2);
    div0.appendChild(div1);

    let div2 = document.createElement("div");
    div2.className= "card-body";

    let div3 = document.createElement("div");
    div3.className= "card-text h-auto mb-3";
    
    let p1 = document.createElement("p");
    p1.className = "text-justify fw-bold ms-2 mb-3"; 
    p1.innerHTML = "Description:"+ "<br>" + value.description;
    div3.appendChild(p1);
    div2.appendChild(div3)
    div0.appendChild(div2);

    let div4 = document.createElement("div");
    div4.className= "card-footer d-flex justify-content-center";
    
    let button = document.createElement("button");
    button.className = "btn btn-primary";
    button.textContent= "More Info!";
    button.setAttribute("type", "button");
    button.setAttribute("data-bs-toggle", "modal");
    button.setAttribute("data-bs-target", "#modalBeer");
    button.setAttribute("data-bs-value", value.id);
    div4.appendChild(button);
    div0.appendChild(div4);

    htmlDiv.appendChild(div0);
    return htmlDiv;
}

export default createBeer;