export function getMergeSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

function mergeSortHelper(
  mainArray,
  startIdx,
  endIdx,
  auxiliaryArray,
  animations
) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  animations
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, i]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, i]);
    // We overwrite the value at index k in the original array with the
    // value at index i in the auxiliary array.
    animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([j, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([j, j]);
    // We overwrite the value at index k in the original array with the
    // value at index j in the auxiliary array.
    animations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}

export function getQuickSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  quickSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

function quickSortHelper(
  mainArray,
  startIdx,
  endIdx,
  auxiliaryArray,
  animations
) {
  if (startIdx >= endIdx) return;
  const partition = doPartition(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations
  );
  quickSortHelper(
    mainArray,
    startIdx,
    partition - 1,
    auxiliaryArray,
    animations
  );
  quickSortHelper(mainArray, partition + 1, endIdx, auxiliaryArray, animations);
}

function doPartition(mainArray, startIdx, endIdx, auxiliaryArray, animations) {
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  let i = startIdx;
  let j = middleIdx;
  let k = endIdx;
  let last_small = startIdx;

  const partition = mainArray[j];

  animations.push([i, j]);
  animations.push([i, j]);
  animations.push([i, partition]);

  animations.push([j, i]);
  animations.push([j, i]);
  animations.push([j, mainArray[i]]);

  mainArray[j] = mainArray[i];
  mainArray[i] = partition;

  for (let j = i + 1; j <= k; j++) {
    if (mainArray[j] < partition) {
      const temp = mainArray[j];
      last_small++;

      animations.push([j, last_small]);
      animations.push([j, last_small]);
      animations.push([j, mainArray[last_small]]);

      animations.push([last_small, j]);
      animations.push([last_small, j]);
      animations.push([last_small, temp]);

      mainArray[j] = mainArray[last_small];
      mainArray[last_small] = temp;
    }
  }

  animations.push([i, last_small]);
  animations.push([i, last_small]);
  animations.push([i, mainArray[last_small]]);

  animations.push([last_small, i]);
  animations.push([last_small, i]);
  animations.push([last_small, partition]);

  mainArray[i] = mainArray[last_small];
  mainArray[last_small] = partition;

  return last_small;
}

export function getInsertionSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  insertionSortHelper(array, 0, array.length - 1, animations);
  return animations;
}

function insertionSortHelper(mainArray, startIdx, endIdx, animations) {
  const i = startIdx;
  const j = endIdx;
  for (let k = i + 1; k <= j; k++) {
    for (let inner = k; inner > 0; inner--) {
      if (mainArray[inner] < mainArray[inner - 1]) {
        const temp = mainArray[inner];

        animations.push([inner, inner - 1]);
        animations.push([inner, inner - 1]);
        animations.push([inner, mainArray[inner - 1]]);

        animations.push([inner - 1, inner]);
        animations.push([inner - 1, inner]);
        animations.push([inner - 1, temp]);

        mainArray[inner] = mainArray[inner - 1];
        mainArray[inner - 1] = temp;
      }
    }
  }
}
