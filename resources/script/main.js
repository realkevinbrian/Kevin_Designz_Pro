//navbar
navbarHandler();
function navbarHandler() {
    let links_wrapper = document.querySelector("#navbar__links");

    links_wrapper.addEventListener("click", elem => {
        //if you click on the element it will add the active class to the specified clicked element
        //1-we have to match and set condition to just click on a tag links

        let link = elem.target;

        if (link.classList !== "active") {

            link.classList.add("active");
        }
        else if (link.classList === "active") {
            link.className = "";
        }
    });
}



