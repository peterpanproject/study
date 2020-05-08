function solution(n, lost, reserve) {
  let answer = n - lost.length;
  for (let i = 0; i < lost.length; i++) {
    for (let j = 0; j < reserve.length; j++) {
      reserve[j] == lost[i] && (answer++, reserve.splice(j, 1), lost.splice(i, 1));
    }
  }
  for (let i = 0; i < lost.length; i++) {
    let matched = reserve.find(
      (el) => el == lost[i] + 1 || el == lost[i] || el == lost[i] - 1
    );
    if (matched && reserve) {
      answer++;
      reserve = reserve.filter((el) => el !== matched);
    }
  }

  console.log(answer);
  return answer;
}

solution(10, [3, 9, 10], [3, 8, 9]);
