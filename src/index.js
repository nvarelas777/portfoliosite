import _ from "lodash";
import "./style.css";

// Get the offset position of the navbar
// Add the sticky class to the navbar when you reach its scroll position.
// Remove "sticky" when you leave the scroll position
(function() {
  window.onload = function() {
    var loader = document.getElementById("loader");

    setTimeout(function() {
      loader.classList.add("fadeOut");
    }, 2000);
  };

  //SrollReveal().reveal('.section-header-text')
  ScrollReveal().reveal(".item_fade", {
    delay: 100,
    duration: 600
  });

  (function() {
    //Expand mobile nav-bar on click
    var navExpand = document.getElementById("nav-bar-expand");
    navExpand.addEventListener("click", function() {
      var x = document.getElementById("myLinks");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    });

    //Collapse mobile nav-bar on click
    var links = document.getElementById("myLinks");
    links.addEventListener("click", function() {
      links.style.display = "none";
    });

    //
    var links = document.querySelectorAll("#myLinks > a");
    var x = document.getElementById("myLinks");
    links.forEach(function(link) {
      link.addEventListener("click", function() {
        x.style.display = "none";
      });
    });
  })();

  //Event Listeners for Scrolling
  var navHome = document.getElementById("sec-home");
  navHome.addEventListener("click", function() {
    document.getElementById("section-home").scrollIntoView({
      behavior: "smooth"
    });
  });

  var navProjects = document.getElementById("sec-projects");
  navProjects.addEventListener("click", function() {
    window.scroll({
      top: document.querySelector("#section-projects").offsetTop - 90,
      behavior: "smooth"
    });
  });

  var navSkills = document.getElementById("sec-skills");
  navSkills.addEventListener("click", function() {
    window.scroll({
      top: document.querySelector("#section-skills").offsetTop - 90,
      behavior: "smooth"
    });
  });

  var navContact = document.getElementById("sec-contact");
  navContact.addEventListener("click", function() {
    window.scroll({
      top: document.querySelector("#section-contact").offsetTop - 90,
      behavior: "smooth"
    });
  });

  var btnContact = document.getElementById("btn-home-contact");
  btnContact.addEventListener("click", function() {
    window.scroll({
      top: document.querySelector("#section-contact").offsetTop - 90,
      behavior: "smooth"
    });
  });

  var footerHome = document.getElementById("footer-home");
  footerHome.addEventListener("click", function() {
    document.getElementById("section-home").scrollIntoView({
      behavior: "smooth"
    });
  });

  var footerProjects = document.getElementById("footer-projects");
  footerProjects.addEventListener("click", function() {
    window.scroll({
      top: document.querySelector("#section-projects").offsetTop - 90,
      behavior: "smooth"
    });
  });

  var footerSkills = document.getElementById("footer-skills");
  footerSkills.addEventListener("click", function() {
    window.scroll({
      top: document.querySelector("#section-skills").offsetTop - 90,
      behavior: "smooth"
    });
  });

  var footerContact = document.getElementById("footer-contact");
  footerContact.addEventListener("click", function() {
    window.scroll({
      top: document.querySelector("#section-contact").offsetTop - 90,
      behavior: "smooth"
    });
  });
})();
