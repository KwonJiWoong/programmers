//프로그래머스 - Level 1 - 월간 코드 챌린지 시즌3 - 없는 숫자 더하기


let numbers = [1,2,3,4,6,7,8,0];
//answer == 14

solution(numbers);
//소스
function solution(numbers){
    let answer = numbers.reduce((acc, cur) => {
        return acc + cur;
    }, 0);
    return 45 - answer;
}