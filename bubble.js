// ------------------------------------------
//      Bubble sort algo
// ------------------------------------------

async function bubbleSort() {
  const bars = document.querySelectorAll(".bar");
  const delay = 100;
  let swapped;
  // Disable the button before starting sorting
  bubbleSortButton.disabled = true;

  do {
    for (let i = 0; i < bars.length - 1; i++) {
      swapped = false;
      for (let j = 0; j < bars.length - i - 1; j++) {
        // Highlight bars being compared
        bars[j].style.background = "red";
        bars[j + 1].style.background = "red";

        if (
          parseInt(bars[j].style.height) > parseInt(bars[j + 1].style.height)
        ) {
          await new Promise((resolve) => setTimeout(resolve, delay));
          swap(bars[j], bars[j + 1]);
          swapped = true;
        }

        // Reset background color
        bars[j].style.background = "#00ff48";
        bars[j + 1].style.background = "#00ff48";
      }
      // Set sorted bars to green
      bars[bars.length - i - 1].style.background = "yellow";
      if (!swapped) {
        break;
      }
    }
    bars[0].style.background = "yellow";
    // Enable the button after sorting is completed
    bubbleSortButton.disabled = false;
  } while (swapped);
}

const bubbleSortButton = document.getElementById("bubble-sort-button");
bubbleSortButton.addEventListener("click", bubbleSort);
