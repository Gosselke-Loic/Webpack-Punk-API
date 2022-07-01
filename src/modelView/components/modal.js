/**
 * Show the modal with the datas of the clicked beer
 * @param {HTMLDivElement} htmlDiv 
 * @returns A modal with the info of the clicked beer
 */
function modalTemplate(htmlDiv) {

    let fragment = document.createDocumentFragment();
    
    let div1 = document.createElement("div");
    div1.classList = "modal fade bg-white";
    div1.style.width = "20%"
    div1.tabIndex= "-1";
    div1.id = "modalBeer";

    let div2 = document.createElement("div");
    div2.classList = "modal-dialog";

    let div3 = document.createElement("div");
    div3.classList = "modal-content";

    let div4 = document.createElement("div");
    div4.classList = "modal-header";

    let h5 = document.createElement("h5");
    h5.id = "name";
    h5.classList = "modal-title";

    let button = document.createElement("button");
    button.type = "button";
    button.classList = "btn-close";
    button.setAttribute("data-bs-dismiss", "modal");

    div4.appendChild(h5);
    div4.appendChild(button);

    let div5 = document.createElement("div");
    div5.classList = "modal-body text-justify";

    let p1 = document.createElement("p");
    p1.classList = "modalData";
    let p2 = document.createElement("p");
    p2.classList = "modalData";
    let p3 = document.createElement("p");
    p3.classList = "modalData";
    let p4 = document.createElement("p");
    p4.classList = "modalData";
    let p5 = document.createElement("p");
    p5.classList = "modalData";

    div5.appendChild(p1);
    div5.appendChild(p2);
    div5.appendChild(p3);
    div5.appendChild(p4);
    div5.appendChild(p5);

    div1.appendChild(div2);
    div1.appendChild(div3);
    div1.appendChild(div4);
    div1.appendChild(div5);
    fragment.appendChild(div1);

    htmlDiv.appendChild(fragment);
    return htmlDiv;
}

export default modalTemplate;