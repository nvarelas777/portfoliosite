 import _ from 'lodash';
 import './style.css'

// Get the navba
var navbar = document.getElementById("nav-bar");

// Get the offset position of the navbar

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
var navExpand = document.getElementById("nav-bar-expand");

navExpand.addEventListener('click', function() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
});

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

//Event Listeners for Scrolling

var projectsOffset = document.querySelector('#section-projects').offsetTop - 86;
var skillsOffset = document.querySelector('#section-skills').offsetTop - 86;
var contactOffset = document.querySelector('#section-contact').offsetTop - 86;

var navHome = document.getElementById('sec-home');
navHome.addEventListener("click", function(){
  document.getElementById('section-home').scrollIntoView({behavior: 'smooth'});
})

var navProjects = document.getElementById('sec-projects');
navProjects.addEventListener('click', function(){
  window.scroll({top: projectsOffset, behavior: 'smooth'});
})

var navSkills = document.getElementById('sec-skills');
navSkills.addEventListener('click', function() {
  window.scroll({top: skillsOffset, behavior: 'smooth'});
})

var navContact = document.getElementById('sec-contact');
navContact.addEventListener('click', function(){
  window.scroll({top: contactOffset, behavior: 'smooth'});
})

var footerHome = document.getElementById('footer-home');
footerHome.addEventListener('click', function() {
  document.getElementById('section-home').scrollIntoView({behavior: 'smooth'});
})

var footerProjects = document.getElementById('footer-projects');
footerProjects.addEventListener('click', function() {
  window.scroll({top:projectsOffset, behavior: 'smooth'});
})

var footerSkills = document.getElementById('footer-skills');
footerSkills.addEventListener('click', function() {
  window.scroll({top:skillsOffset, behavior: 'smooth'});
})

var footerContact = document.getElementById('footer-contact');
footerContact.addEventListener('click', function() {
  window.scroll({top:skillsOffset, behavior: 'smooth'});
})