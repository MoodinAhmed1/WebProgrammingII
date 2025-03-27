


var options = {
    strings: ["Dreamers, Thinkers, and Doers"],  // The full sentence you want to type
    typeSpeed: 50,  // Speed of typing in milliseconds
    backSpeed: 0,  // No backspacing, so it types the entire sentence
    backDelay: 1000,  // Delay before starting to type
    showCursor: true,  // Show the blinking cursor
    loop: true,  // Do not loop the typing effect
    fadeOut: true,  // Optional: fade out when done typing
    fadeOutClass: "typed-fade-out",  // Add fade-out class
    fadeOutDelay: 500  // Delay before fading out
};

var typed = new Typed("#typed", options);  // Initialize the typing effect on the element with id="typed"