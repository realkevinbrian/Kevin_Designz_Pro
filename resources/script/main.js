let img = document.getElementById("product_image");
// menu.style.display = "flex";

img.addEventListener("mousemove", elem =>{

    let x = elem.screenX;
    let y = elem.screenY;
    img.style.transform = `translate3D(${Math.sqrt(x) * 4 + 40}px, ${Math.sqrt(y) * 2}px, ${Math.sqrt(y) * y - x}px) scale(0.9, 0.9)`;
    img.style.filter = `drop-shadow(${Math.sqrt(x) - 10}px ${Math.sqrt(y) - 15}px 6px rgba(24, 24, 24, 0.356)`;
    img.style.alignItems = "center";
    img.style.alignContent = "center";
    img.style.justifyContent = "center";
})

img.addEventListener("mouseleave", leave =>{

    img.style.alignItems = "center";
    img.style.alignContent = "center";
    img.style.justifyContent = "center";
    img.style.transform = "scale(1, 1)"
    img.style.transition = "transform 0.5s"

})



//burger menu 
let navbar = document.getElementById("navbar");
let logo = document.getElementById("logo");
let burger_btn = document.querySelector("#burger_menu");
let menu = document.querySelector("#navbar__links");

//add event listener
burger_btn.addEventListener("click", menuOpener);

function menuOpener(e){

    let burgers = Array.from(burger_btn.children);

    //to open
    if(burgers[2].style.transform === ""
       && burgers[0].style.transform === ""
    ){
        console.log("Open")
         //all the burger lines
    burgers[1].style.display = "none";
    burgers[0].style.transform = "rotate(45deg)";
    burgers[2].style.transform = "rotate(-45deg) translateY(-8px) translateX(7px)";
    burgers[2].style.width = "80%";
    burgers[1].style.width = "100%";
    menu.style.position = "relative";
    menu.style.zIndex = "1000000";
    menu.style.width = "80%";
    menu.style.height = "100%";
    navbar.style.flexDirection = "column";
    logo.style.display = "flex";
    logo.style.flexDirection = "row";
    logo.style.justifyContent = "space-between"
    menu.style.display = "flex";
    menu.style.flexDirection = "column";
    }
    //to close
    else{
    
    burgers[1].style.display = "block";
    burgers[0].style.transform = "";
    burgers[2].style.transform = "";
    menu.style.transition = "all 0.2s";
    menu.style.display = "none";
    }
    
    

}


burger_btn.addEventListener("mouseover", menu_Hover);

function menu_Hover(e){

    let burgers = Array.from(burger_btn.children);
    //all the burger lines
    burgers[1].style.width = "50%";
}


burger_btn.addEventListener("mouseleave", menu_UnHover);

function menu_UnHover(e){

    let burgers = Array.from(burger_btn.children);

    //all the burger lines
    burgers[1].style.width = "100%";
}

