async function selectionSort() {
  const bars = document.querySelectorAll(".bar");
  const n = bars.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      bars[j].style.backgroundColor = "red";

      if (
        parseInt(bars[j].style.height) < parseInt(bars[minIndex].style.height)
      ) {
        bars[minIndex].style.backgroundColor = "#00ff48";
        minIndex = j;
      } else {
        bars[j].style.backgroundColor = "#00ff48";
      }

      await sleep(100); // Delay for visualization
    }

    if (minIndex !== i) {
      await swap(bars[i], bars[minIndex]);
    }

    bars[i].style.backgroundColor = "yellow";
  }

  bars[n - 1].style.backgroundColor = "yellow"; // Last element is in its correct position
}

document
  .getElementById("selection-sort-button")
  .addEventListener("click", selectionSort);
