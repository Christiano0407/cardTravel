console.group("App Travel Web");
//**  ==== Animation GSAP == Variables == ========= */
let tl = gsap.timeline((paused: true, reserved: true));

const bookNow = document.querySelector(".book");
const cancel = document.querySelector(".cancel");

//** === Animations  === */
bookNow.addEventListener("click", (e) => {
 tl.play();
});

cancel.addEventListener("click", (e) => {
 tl.reverse(); 
})


console.groupEnd();
