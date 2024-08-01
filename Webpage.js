//Kaibo Huang
//Date: 2024/06/03
//JS File for Timeline
//Challenge Features: 
//- Utlize Javascript for some meaningful purpose (for the timeline)
//- Include an element that moves down as the user scrolls down

(function() {
  "use strict";

  // Define variables to store the DOM elements
  var items = document.querySelectorAll(".timeline li");

  // Function to check if an element is in viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to add "in-view" class to elements in viewport
  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // Event listeners to trigger the callback function on scroll
  window.addEventListener("load", callbackFunc); // Listen for page load
  window.addEventListener("resize", callbackFunc); // Listen for window resize
  window.addEventListener("scroll", callbackFunc); // Listen for scroll
})();
