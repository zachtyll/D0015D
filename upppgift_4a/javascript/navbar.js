/* Toggle between adding and removing the "responsive" class to banner when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("main-banner");
    if (x.className === "banner") {
      x.className += " responsive";
    } else {
      x.className = "banner";
    }
  } 