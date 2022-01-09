import React from "react";
import "./NavBar.css";

function NavBar(props) {
  const { generateArray, handleSort, handleAlgo, handleArray, arrLen } = props;
  return (
    <nav>
      <div className="name">Sorting Visualizer</div>
      <div className="center-item">
        <div>
          <label>Length</label>
          <input
            type="range"
            min="20"
            max={200}
            id="arrLen"
            value={arrLen}
            onChange={generateArray}
          ></input>
        </div>
        <select onChange={handleAlgo}>
          <option value="mergeSort">Merge Sort</option>
          <option value="quickSort">Quick Sort</option>
          <option value="insertionSort">Insertion Sort</option>
        </select>
        <select onChange={handleArray}>
          <option value="random">Random</option>
          <option value="sorted">Sorted</option>
          <option value="reverse">Reverse</option>
        </select>
      </div>
      <div className="right-item">
        <button onClick={generateArray}>Randomize</button>
        <button onClick={handleSort}>Sort</button>
      </div>
    </nav>
  );
}

export default NavBar;
