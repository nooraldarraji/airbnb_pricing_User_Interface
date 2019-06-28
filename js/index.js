// Your code goes here

// Mouseover

let nB = document.querySelector(".des p");
nB.addEventListener('mouseover', function(event) {
    event.target.style.color = '#5cbf2ae6';
    setTimeout(function() {
        event.target.style.color = "";
    }, 300);
});

// Double Click

const fB = document.querySelector(".logo-heading");
fB.addEventListener('dblclick', function(event) {
    event.target.style.color = 'red';
    setTimeout(function() {
        event.target.style.color = "";
    }, 300);
})

// .main-navigation .nav-container .nav a
let navbarr = document.querySelector(".main-navigation .nav-container .nav");
navbarr.addEventListener('mouseover', function(event) {
    event.target.style.color = '#5cbf2ae6';
    setTimeout(function() {
        event.target.style.color = "";
    }, 300);
});