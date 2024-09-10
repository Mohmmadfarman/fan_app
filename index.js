const start = document.getElementById('start');
const stop = document.getElementById('stop');
const rotate = document.getElementById('rotate');
const fast = document.getElementById('fast');
const vfast = document.getElementById('vfast');

// Function to add keyframes to the document if they don’t already exist
function addKeyframes() {
  let styleSheet = document.querySelector("style#animation-styles");
  if (!styleSheet) {
    styleSheet = document.createElement("style");
    styleSheet.id = "animation-styles";
    styleSheet.innerHTML = `
      @keyframes fadeMove {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(styleSheet);
  }
}

// Function to start the animation with specified duration
function startAnimation(duration) {
  rotate.style.animation = `fadeMove ${duration} linear 0s infinite`;
  addKeyframes();
}

// Event listener functions
function startAnimationSlow() {
  startAnimation('1s');
}

function startAnimationFast() {
  startAnimation('0.5s');
}

function startAnimationVeryFast() {
  startAnimation('0.2s');
}

// Function to stop the animation
function stopAnimation() {
  rotate.style.animation = '';  // Stop the current animation
}

// Add event listeners to the buttons
start.addEventListener('click', startAnimationSlow);
fast.addEventListener('click', startAnimationFast);
vfast.addEventListener('click', startAnimationVeryFast);
stop.addEventListener('click', stopAnimation);
