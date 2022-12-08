
let img = document.querySelector(".img");

let imgCont = document.querySelector(".img-cont");

let main = document.querySelector(".toop");


let xDirection;
let yDirection;

window.addEventListener('mousemove' , (e) => {
    // console.log(e.offsetX)

    console.log(e.clientY)
    
       if((e.clientY > 153) && (e.clientY < 655) ){

        if ((e.clientX > 118) && (e.clientX < 1320)) {
        xDirection = Math.ceil((e.clientX* 100)/1000);
        yDirection = Math.floor((e.clientY * 100)/1000)
        img.style.transform = `translate(${-xDirection}px , ${-yDirection}px)`;
       }
       else {
        img.style.transform = "translate(0)"
       }

       } 
       else {
        img.style.transform = "translate(0)"
       }
    

    // if((e.offsetY > 0)) {
    //     yDirection = Math.floor(e.offsetY/1000 * 100);
    //     img.style.transform = `translateY(${-yDirection}px)`;
    //     console.log(imgCont.offsetTop)
    // }

})