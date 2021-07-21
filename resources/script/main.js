import {navbar_burger} from "./navbar.js"
navbar_burger ();
//links
let links = document.getElementsByClassName("link");

let linksArray = Array.from(links);
let iconEl = document.createElement("i");


// console.log(linksArray)

for(let link of linksArray){

    link.addEventListener("mouseover", el=>{

        
        iconEl.classList= "bx bx-right-arrow-alt";
        iconEl.style.color = "#000041";
        iconEl.style.fontSize = "1.4rem"

        //append to the link

        el.target.appendChild(iconEl);

    })
}
