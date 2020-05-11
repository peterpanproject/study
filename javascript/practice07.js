function solution(numbers, hand) {
  var answer = [];
  let currentL = "*";
  let currentR = "#";
  const a = [1, 4, 7, "*"];
  const b = [2, 5, 8, 0];
  const c = [3, 6, 9, "#"];
  for (let i = 0; i < numbers.length; i++) {
    // c[3,6,9,#]
    // b[2,5,8,0]
    // a[1,4,7,*]
    if (a.includes(numbers[i])) {
      console.log(
        `왼손위치:${currentL} 오른손위치: ${currentR} 눌러야 할 숫자: ${numbers[i]} 사용한 손: L`
      );
      currentL = numbers[i];
      answer.push("L");
    }
    if (b.includes(numbers[i])) {
      let difL = "";
      let difR = "";
      if (b.includes(currentL)) {
        difL = Math.abs(b.indexOf(numbers[i]) - b.indexOf(currentL)) - 1;
      } else {
        difL = Math.abs(b.indexOf(numbers[i]) - a.indexOf(currentL));
      }
      if (b.includes(currentR)) {
        difR = Math.abs(b.indexOf(numbers[i]) - b.indexOf(currentR)) - 1;
      } else {
        difR = Math.abs(b.indexOf(numbers[i]) - c.indexOf(currentR));
      }
      difL < difR
        ? (console.log(
            `왼손위치:${currentL} 오른손위치: ${currentR} 눌러야 할 숫자: ${numbers[i]} 사용한 손: L`
          ),
          (currentL = numbers[i]),
          answer.push("L"))
        : difL > difR
        ? (console.log(
            `왼손위치:${currentL} 오른손위치: ${currentR} 눌러야 할 숫자: ${numbers[i]} 사용한 손: R`
          ),
          (currentR = numbers[i]),
          answer.push("R"))
        : hand == "right"
        ? (console.log(
            `왼손위치:${currentL} 오른손위치: ${currentR} 눌러야 할 숫자: ${numbers[i]} 사용한 손: R`
          ),
          (currentR = numbers[i]),
          answer.push("R"))
        : (console.log(
            `왼손위치:${currentL} 오른손위치: ${currentR} 눌러야 할 숫자: ${numbers[i]} 사용한 손: L`
          ),
          (currentL = numbers[i]),
          answer.push("L"));
    }
    if (c.includes(numbers[i])) {
      console.log(
        `왼손위치:${currentL} 오른손위치: ${currentR} 눌러야 할 숫자: ${numbers[i]} 사용한 손: R`
      );
      currentR = numbers[i];
      answer.push("R");
    }
  }
  console.log(answer);
}

solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right");
// solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left");
// solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right");
