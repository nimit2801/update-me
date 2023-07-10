// first n number return an array
// input: [10, 11, 9, 100, 1, 500, 50] n=3
// change the input to [10, 11, 9]
// get the smallest nnumber out of n numbers
// 10, 11, 9
// 10, 11
// 11
// 9, 10, 11
//

function funcToSort(arr: number[], num: number): void {
  let answerArray: [Number];
  console.log(arr);
  let arrN = [];
  for (let i = 0; i < num; i++) {
    const element = arr[i];
    arrN.push(element);
    console.log(element);
  }
  for (let i = 0; i < arrN.length - 1; i++) {}

  // const smallest = x
  //   for arrN
  // smallest < elementJ
  //   return smallest

  //   return answerArray;
}

const num = [10, 11, 9, 100, 200, 500, 50];
const nToBeSorted = 3;
funcToSort(num, nToBeSorted);
