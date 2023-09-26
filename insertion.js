// ------------------------------------------
//      Insertion sort algo
// ------------------------------------------

async function insertionSort() {
  const container = document.querySelector(".button-box");
  const bars = button - box.children;
  const n = bars.length;
  // Disable the button before starting sorting
  insertionSortButton.disabled = true;

  for (let i = 1; i < n; i++) {
    const keyHeight = parseInt(bars[i].style.height);
    let j = i - 1;

    bars[i].style.backgroundColor = "red";

    while (j >= 0 && parseInt(bars[j].style.height) > keyHeight) {
      bars[j + 1].style.height = bars[j].style.height;
      j--;
      await sleep(100); // Delay for visualization
    }

    bars[j + 1].style.height = `${keyHeight}px`;

    bars[i].style.backgroundColor = "#3498db";
  }
  bubbleSortButton.disabled = false;
}

const insertionSortButton = document.getElementById("insertion-sort-button");
bubbleSortButton.addEventListener("click", insertionSort());
