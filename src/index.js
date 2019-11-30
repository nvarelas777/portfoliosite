 import _ from 'lodash';
 import './style.css'

// Get the navbar
var navbar = document.getElementById("nav-bar");

// Get the offset position of the navbar

// Add the sticky class to the navbar when you reach its scroll position. 
// Remove "sticky" when you leave the scroll position 
var navExpand = document.getElementById("nav-bar-expand");

navExpand.addEventListener('click', function() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
});

var links = document.getElementById("myLinks");
links.addEventListener('click', function() {
  links.style.display = "none";
})


var links = document.querySelectorAll('#myLinks > a');
var x = document.getElementById("myLinks");
links.forEach(function(link) {
  link.addEventListener('click', function(){
    x.style.display = 'none';
  })
})


function fadeIn() {
  var element = document.getElementById("header-block");
  element.classList.add("fadeIn");
}

window.onload = fadeIn();

var sections = document.getElementsByClassName("section_fade");
Array.prototype.forEach.call(sections, function (item) {
  document.addEventListener('scroll', function handler(e) {
    if (item.offsetHeight < window.pageYOffset) {
      item.classList.add("fadeInScroll");
      e.currentTarget.removeEventListener(e.type, handler);
    }
  })
});

//Event Listeners for Scrolling
var skillsOffset = document.querySelector('#section-skills').offsetTop - 86;
var projectsOffset = document.querySelector('#section-projects').offsetTop - 86;
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