import React, { Component, useState } from "react";
import "./SortingVisualizer.css";
import {
  getMergeSortAnimations,
  getQuickSortAnimations,
  getInsertionSortAnimations,
} from "../sortingAlgorithms/sortingAlgorithm";
import NavBar from "../NavBar";
import SideBar from "../SideBar";

const PRIMARY_COLOR = "turquoise";
const SECONDARY_COLOR = "red";

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
      algo: "mergeSort",
      arrType: "random",
      arrSize: 200,
    };
  }

  componentDidMount() {
    this.resetArray(this.state.arrType);
  }

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 1);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * 1);
      }
    }
  }

  quickSort() {
    const animations = getQuickSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 1);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * 1);
      }
    }
  }

  insertionSort() {
    const animations = getInsertionSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 1);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * 1);
      }
    }
  }

  resetArray(arrType) {
    const array = [];
    this.state.arrSize = document.getElementById("arrLen").value;
    for (let i = 0; i < this.state.arrSize; i++) {
      array.push(randomIntFromInterval(1, 500));
    }

    if (arrType === "sorted") {
      array.sort(function (a, b) {
        return a - b;
      });
      this.setState({ array });
    } else if (arrType === "random") {
      this.setState({ array });
    } else if (arrType === "reverse") {
      array.sort(function (a, b) {
        return a - b;
      });
      array.reverse();
      this.setState({ array });
    }

    console.log(array);
  }

  handleSort(algo) {
    algo === "insertionSort"
      ? this.insertionSort()
      : algo === "mergeSort"
      ? this.mergeSort()
      : algo === "quickSort"
      ? this.quickSort()
      : console.log("Nothing");
  }

  handleAlgo = (event) => {
    this.state.algo = event.target.value;
  };

  handleArray = (event) => {
    this.state.arrType = event.target.value;
  };

  render() {
    const { array } = this.state;
    return (
      <div className="array-container">
        <div className="array-body-left">
          {array.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{ height: `${value}px` }}
            ></div>
          ))}
          <div className="array-body">
            <div>
              <SideBar
                generateArray={() => this.resetArray(this.state.arrType)}
                handleSort={() => this.handleSort(this.state.algo)}
                handleAlgo={this.handleAlgo}
                handleArray={this.handleArray}
                arrLen={this.state.arrSize}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
