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

//menu bar
menuOpener();
function menuOpener(){


    //elements
    let menu = document.querySelector(".menu__container");
    let bar = document.querySelectorAll(".bar");
    let links = document.querySelector("#navbar__links");
    
    //bars
    bar[0].style.transform = "rotate(0deg) translate(0px, 0px)";
    bar[2].style.transform = "rotate(0deg) translate(0px, 0px)";
    menu.addEventListener("click", elem=>{

        if(
        bar[0].style.transform === "rotate(0deg) translate(0px, 0px)"&
        bar[2].style.transform === "rotate(0deg) translate(0px, 0px)"
        ){
            // bar[1].style.display= "none";
            // menu.style.border ="2px solid white";
            bar[1].style.opacity = "0.0";
            bar[0].style.transform = "rotate(-45deg) translate(-9px, 5px)";
            bar[2].style.transform = "rotate(45deg) translate(-5px, -5px)";
            links.style.display = "flex";

        }else{  
            // menu.style.border ="2px solid transparent";
            links.style.display = "none";
            bar[1].style.opacity = "1";
            bar[0].style.transform = "rotate(0deg) translate(0px, 0px)";
            bar[2].style.transform = "rotate(0deg) translate(0px, 0px)";
    
        
        }

        links.addEventListener("click" ,elem=>{
            links.style.display = "none";
            bar[1].style.opacity = "1";
            bar[0].style.transform = "rotate(0deg) translate(0px, 0px)";
            bar[2].style.transform = "rotate(0deg) translate(0px, 0px)";
           
            
        })

    })
    //test
    // console.log(links)
    
    window.onresize = function(){
    if(window.matchMedia("(min-width: 769px)").matches){
    
        console.log("Matched");
        links.style.display = "flex";
    }else{
        console.log("unMatched");
    }
}


//end
}







