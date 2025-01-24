$(document).ready(function () {
  // Initialize turn.js
  const flipbookWidth = 0.90*$(window).width()
  const flipbookHeight = 0.6*$(window).height()
  $('#flipbook').turn({
    width: flipbookWidth,        // Total width for the flipbook
    height: flipbookHeight,       // Total height for the flipbook
    autoCenter: true,  // Center the flipbook on the page
    display: 'double', // Show two pages side by side
    duration: 1000,    // Duration of the page turn animation
    gradients: true,   // Enable gradient effect
    acceleration: true,
  });

  // Add keydown event listener for flipping pages with arrow keys
  $(document).keydown(function (e) {
    if (e.key === 'ArrowRight') {
      // Flip to the next page
      $('#flipbook').turn('next');
    } else if (e.key === 'ArrowLeft') {
      // Flip to the previous page
      $('#flipbook').turn('previous');
    }
  });
});
