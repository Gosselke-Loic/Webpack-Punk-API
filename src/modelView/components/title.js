/**
 * Render title of the page
 * @param {HTMLDivElement} htmlDiv 
 * @returns Appenchild of the title
 */
function title(htmlDiv) {

    let div = document.createElement("div");
    div.classList= "text-center headerBg rounded shadow-lg p-4";
    
    let h1 = document.createElement("h1");
    h1.classList= "text-decoration-underline fw-bold";
    h1.textContent = "List of Beers";

    div.appendChild(h1);
    htmlDiv.appendChild(div);

    return htmlDiv;
}

export default title;