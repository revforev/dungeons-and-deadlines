// ===========================================================THEME========================================
function changeBackgroundColor() {
      document.body.style.backgroundColor = "white";
    }

// =======================================================TOGGLE DROPDOWN====================================
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// =======================================================TIME OF THE DAY START================================================

function toggleDisplayByTime(classNameMorning, classNameAfternoon, classNameEvening) {
  var currentDate = new Date();
  var currentHour = currentDate.getHours();
  var elementsMorning = document.getElementsByClassName(classNameMorning);
  var elementsAfternoon = document.getElementsByClassName(classNameAfternoon);
  var elementsEvening = document.getElementsByClassName(classNameEvening);

  if (currentHour >= 6 && currentHour < 12) {
    toggleClass(elementsMorning);
    toggleClass(elementsAfternoon, true);
    toggleClass(elementsEvening, true);
  } else if (currentHour >= 12 && currentHour < 18) {
    toggleClass(elementsAfternoon);
    toggleClass(elementsMorning, true);
    toggleClass(elementsEvening, true);
  } else {
    toggleClass(elementsEvening);
    toggleClass(elementsMorning, true);
    toggleClass(elementsAfternoon, true);
  }
}

function toggleClass(elements, hide) {
  for (var i = 0; i < elements.length; i++) {
    if (hide) {
      elements[i].classList.add('hidden');
    } else {
      elements[i].classList.remove('hidden');
    }
  }
}

toggleDisplayByTime('morning-start', 'afternoon-start', 'evening-start');

// =======================================================STATS================================================

let energy = 0
let health = 0
let speed = 0
// add + "Mbps" to dom
let coins = 0

function energyIncrease() {
  energy += 3
  console.log(energy)
  return energy
}

function healthIncrease() {
  health += 3
  console.log(health)
  return health
}

function speedIncrease() {
  speed += 3
  console.log(speed)
  return speed
}


function coinsIncrease() {
  coins += 3
  console.log(coins)
  return coins
}


// ======================================================STATS UI================================================

// Get references to the HTML elements
const energyEl = document.getElementById("energy");
const healthEl = document.getElementById("health");
const speedEl = document.getElementById("speed");
const coinsEl = document.getElementById("coins");

// Update the HTML content with the live values
energyEl.textContent += energy;
healthEl.textContent += health;
speedEl.textContent += speed;
coinsEl.textContent += coins;


// ===================================================PHASES====================================================



  function navigateForward() {
	let phases = ["innit", "Logo", "Greeting", "Q-i", "Stats-i", "Briefing", "Instructions", "Map-1", "Stage-1-X", "Stats-1-X", "Map-2", "Stage-2-X", "Stats-2-X", "Map-3", "Shop-3-X", "Stats-3-X", "Map-4", "Stage-4-X", "Stats-4-X", "Map-5", "Stage-5-X", "Stats-4-X", "Map-6", "Stage-6-X", "Stats-6-X", "Map-7", "Stage-7-X", "Stats-7-X", "Times-Up", "Wakeup", "Ending", "Postlude", "Credits"];

    let currentPhaseIndex = 0; // Initialize the current phase index to 0 (first phase)
    // Get the current phase element from the DOM based on its ID
    let currentPhaseId = phases[currentPhaseIndex];
    let currentPhaseElement = document.getElementById(currentPhaseId);

    // Hide the current phase (apply the display: none class)
    currentPhaseElement.classList.add("hidden");

    // Move to the next phase
    currentPhaseIndex++;

    // Check if the currentPhaseIndex is within the valid range of phases array
    if (currentPhaseIndex >= 0 && currentPhaseIndex < phases.length) {
      // Get the next phase element from the DOM based on its ID
      let nextPhaseId = phases[currentPhaseIndex];
      let nextPhaseElement = document.getElementById(nextPhaseId);

      // Show the next phase (remove the display: none class)
      nextPhaseElement.classList.remove("hidden");
    } else {
      console.log("You have reached the end of the phases.");
      // Decrement the index to be at the last valid phase
      currentPhaseIndex--;
    }
  }

  function navigateBackward() {
	let phases = ["innit", "Logo", "Greeting", "Q-i", "Stats-i", "Briefing", "Instructions", "Map-1", "Stage-1-X", "Stats-1-X", "Map-2", "Stage-2-X", "Stats-2-X", "Map-3", "Shop-3-X", "Stats-3-X", "Map-4", "Stage-4-X", "Stats-4-X", "Map-5", "Stage-5-X", "Stats-4-X", "Map-6", "Stage-6-X", "Stats-6-X", "Map-7", "Stage-7-X", "Stats-7-X", "Times-Up", "Wakeup", "Ending", "Postlude", "Credits"];

    let currentPhaseIndex = 0; // Initialize the current phase index to 0 (first phase)
    // Get the current phase element from the DOM based on its ID
    let currentPhaseId = phases[currentPhaseIndex];
    let currentPhaseElement = document.getElementById(currentPhaseId);

    // Hide the current phase (apply the display: none class)
    currentPhaseElement.classList.add("hidden");

    // Move to the previous phase
    currentPhaseIndex--;

    // Check if the currentPhaseIndex is within the valid range of phases array
    if (currentPhaseIndex >= 0 && currentPhaseIndex < phases.length) {
      // Get the previous phase element from the DOM based on its ID
      let previousPhaseId = phases[currentPhaseIndex];
      let previousPhaseElement = document.getElementById(previousPhaseId);

      // Show the previous phase (remove the display: none class)
      previousPhaseElement.classList.remove("hidden");
    } else {
      console.log("You are already at the first phase.");
      // Increment the index to be at the first valid phase
      currentPhaseIndex++;
    }
  }


// Make a function to restart the game

function reloadPage() {
  location.reload();
}


