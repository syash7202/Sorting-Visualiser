function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const barHeights = [];
for (let i = 0; i < 50; i++) {
  barHeights.push(getRandomInt(200, 500)); //between 200 and 500
}

function createBars() {
  const barContainer = document.getElementById("bar-container");
  barContainer.innerHTML = ""; // Clear previous bars

  for (let i = 0; i < barHeights.length; i++) {
    const bar = document.createElement("div");
    bar.className = "bar"; // adding class
    bar.style.height = `${barHeights[i]}px`; //bar height in percent
    barContainer.appendChild(bar);
  }
}

createBars();

const addButton = document.getElementById("add-bar-button");
addButton.addEventListener("click", () => {
  // Generate a new random height and add it to the array
  const newHeight = getRandomInt(10, 100);
  barHeights.push(newHeight);

  createBars(); // Update the displayed bars
});

console.log(barHeights);

// ------------------------------------------
//      function for animations
// ------------------------------------------

async function swap(el1, el2) {
  const style1 = window.getComputedStyle(el1);
  const style2 = window.getComputedStyle(el2);

  const height1 = style1.getPropertyValue("height");
  const height2 = style2.getPropertyValue("height");
  el1.style.height = height2;
  el2.style.height = height1;
}
