// ===== SHAPE CAREER CONSULTANT =====

// Navbar Shadow on Scroll

window.addEventListener("scroll", function () {

const header = document.querySelector("header");

if (window.scrollY > 50) {
    header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.15)";
} else {
    header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
}

});

// Smooth Fade Animation

const cards = document.querySelectorAll(
".about-card, .service-card, .contact-card"
);

const observer = new IntersectionObserver((entries) => {

entries.forEach((entry) => {

if (entry.isIntersecting) {

entry.target.style.opacity = "1";
entry.target.style.transform = "translateY(0)";

}

});

}, {
threshold: 0.2
});

cards.forEach(card => {

card.style.opacity = "0";
card.style.transform = "translateY(50px)";
card.style.transition = "0.6s ease";

observer.observe(card);

});
// ===== Scroll To Top Button =====

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";
topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "25px";
topBtn.style.right = "25px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#0d6efd";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.boxShadow = "0 8px 20px rgba(0,0,0,.2)";
topBtn.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

// ===== Welcome Animation =====

window.addEventListener("load",()=>{

document.body.style.opacity="0";

setTimeout(()=>{

document.body.style.transition="opacity .8s";

document.body.style.opacity="1";

},100);

});
function sendWhatsApp(){

let selected=[];

document.querySelectorAll('.service-select input[type="checkbox"]:checked')
.forEach(item=>{

selected.push("✅ "+item.value);

});

if(selected.length===0){

alert("Please select at least one service.");

return;

}

let message="Hello Sara Khan,%0A%0AI am interested in the following services:%0A%0A";

message+=selected.join("%0A");

message+="%0A%0APlease contact me.";

window.open(
"https://wa.me/918770380233?text="+message,
"_blank"
);

}
