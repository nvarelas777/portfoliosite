 import _ from 'lodash';
 import './style.css'

// Get the navba
var navbar = document.getElementById("nav-bar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

function fadeIn() {
  var element = document.getElementById("header-block");
  element.classList.add("fadeIn");
}

window.onload = fadeIn();


var navHome = document.getElementById('sec-home');
navHome.addEventListener("click", function(){
  document.getElementById('section-home').scrollIntoView({behavior: 'smooth'});
})

var navProjects = document.getElementById('sec-projects');
navProjects.addEventListener('click', function(){
  document.getElementById('section-projects').scrollIntoView({behavior: 'smooth'});
})

var navSkills = document.getElementById('sec-skills');
navSkills.addEventListener('click', function() {
  document.getElementById('section-skills').scrollIntoView({behavior: 'smooth'});
})

var navContact = document.getElementById('sec-contact');
navContact.addEventListener('click', function(){
  document.getElementById('section-contact').scrollIntoView({behavior: 'smooth'});
})