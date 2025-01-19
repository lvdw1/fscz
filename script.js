$(document).ready(function() {
  $("#flipbook").turn({
    width: 800,     // Must match #flipbook width
    height: 500,    // Must match #flipbook height
    autoCenter: true,
    display: 'double',  // So two pages show at once
    duration: 1000      // Flip speed (ms)
  });
});
