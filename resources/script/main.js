let img = document.getElementById("product_image");


img.addEventListener("mousemove", elem =>{

    let x = elem.screenX;
    let y = elem.screenY;


    img.style.transform = `translate3D(${Math.sqrt(x) * 4 + 40}px, ${Math.sqrt(y) * 2}px, ${Math.sqrt(y) * y - x}px) scale(0.9, 0.9)`;
    console.log(img.style.filter = `drop-shadow(${Math.sqrt(x) - 10}px ${Math.sqrt(y) - 15}px 6px rgba(24, 24, 24, 0.356)`);

    img.style.alignItems = "center";
    img.style.alignContent = "center";
    img.style.justifyContent = "center";
    // img.style.transform = "";
    
    
    
    // console.log(img.style.transform = `translateX(40px)`);
    
})

img.addEventListener("mouseleave", leave =>{

    img.style.alignItems = "center";
    img.style.alignContent = "center";
    img.style.justifyContent = "center";
    img.style.transform = "scale(1, 1)"
    img.style.transition = "transform 0.5s"

})