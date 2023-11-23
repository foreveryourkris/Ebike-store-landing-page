// let nav = document.getElementById("topNav");
// let main = document.getElementById("main");
// let menu = document.getElementsByClassName("menuitems");
// let close = document.getElementById("closebtn");

// nav.style.height = "50px";
// main.style.marginTop = "50px";

// for(i = 0; i < menu.length; i++) {
//     menu[i].style.marginTop = "100px";
// };

// close.addEventListener("click", function() {
//     let menuIcon = close.children;
//     for (i = 0; i < menuIcon.length; i++) {
//         menuIcon[i].classList.toggle("active");
//     }
// });

// function navToggle() {
//     if (nav.style.height <= "275px") {
//         nav.style.height = "50px";
//         main.style.marginTop = "50px";

//         for(let i = 0; i < menu.length; i++) {
//             menu[i].style.opacity = "0.0";
//             menu[i].style.marginTop = "100px";
//         }
//         document.body.style.backgroundColor = "rgba(0,0,0,0.0)";
//     }
//     else if (nav.style.height <= "50px") {
//         nav.style.height = "275px";
//         main.style.marginTop = "275px";

//         for (let i = 0; i < menu.length; i++) {
//             menu[i].style.opacity = "1.0";
//             menu[i].style.marginTop = "0px";
//         };
//         document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
//     }
// };


const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});






