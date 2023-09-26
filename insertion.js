async function insertionSort() {
  const barsInsertion = document.querySelectorAll(".bar");
  const n = barsInsertion.length;

  for (let i = 1; i < n; i++) {
    const keyHeight = parseInt(barsInsertion[i].style.height);
    let j = i - 1;

    barsInsertion[i].style.backgroundColor = "red";

    while (j >= 0 && parseInt(barsInsertion[j].style.height) > keyHeight) {
      barsInsertion[j + 1].style.backgroundColor = "red";
      await swap(barsInsertion[j], barsInsertion[j + 1]);
      barsInsertion[j + 1].style.backgroundColor = "#00ff48";
      j--;
    }

    barsInsertion[j + 1].style.height = `${keyHeight}px`;
    barsInsertion[i].style.backgroundColor = "yellow";

    await sleep(200); // Delay for visualization
  }
}

document
  .getElementById("insertion-sort-button")
  .addEventListener("click", insertionSort);
