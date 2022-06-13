//프로그래머스 - Level 1 - 탐욕법(Greedy) - 체육복

// const n = 5;
// const lost = [2, 4];
// const reserve = [3];

const n = 5;
const lost = [2, 4];
const reserve = [1, 3, 5];

//answer == 5

solution(n, lost, reserve);
//소스
function solution(n, lost, reserve){
    let answer = Math.max(lost.filter(x => !reserve.includes(x)).length - reserve.filter(x => !lost.includes(x)).length, 0);
    return Math.min(n, n - answer);
}