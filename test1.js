let numbers = [];
let testLength1 = Math.floor(Math.random()*10);

for(let i = 0; i < testLength1; i++){
    numbers[i] = Math.floor(Math.random()*100);
}
console.log(numbers);
function solution(numbers) {
    var answer = '';
    for(let i = 0; i < numbers.length; i++){
        for(let j = 9; j < 1; j--){
            numbers[i].startsWidth(j);
        }
    }
    return answer;
}
switch (key) {
    case value:
        
        break;

    default:
        break;
}