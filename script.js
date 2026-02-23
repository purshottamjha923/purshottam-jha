var typed = new Typed(".text", {
  strings: ["Frontend Website Developer."],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});


// ========== GREETING ===========
const greet = document.getElementById("greeting");

const display = ["Good Morning", "Good Afternoon", "Good Evening"];

function greeting() {

  const hour = new Date().getHours(); // current hour (0-23)

  if (hour < 12) {
    greet.innerText = display[0];   // Morning
  } 
  else if (hour < 18) {
    greet.innerText = display[1];   // Afternoon
  } 
  else {
    greet.innerText = display[2];   // Evening
  }
}

// Function call
greeting();