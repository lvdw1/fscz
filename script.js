$(document).ready(function () {
  // Initialize turn.js
  $('#flipbook').turn({
    width: 800,        // Total width for the flipbook
    height: 500,       // Total height for the flipbook
    autoCenter: true,  // Center the flipbook on the page
    display: 'double', // Show two pages side by side
    duration: 1000,    // Duration of the page turn animation
    gradients: true,   // Enable gradient effect
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
