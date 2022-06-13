//프로그래머스 - Level 1 - 정렬 - K번째수


let array = [1, 5, 2, 6, 3, 7, 4];
let commands = 	[[2, 5, 3], [4, 4, 1], [1, 7, 3]];
//answer == [5, 6, 3]

solution(array, commands);
function solution(array, commands){
    let answer = commands.reduce((acc, cur) => {
        let chk = new Array();
        if(cur[0] == cur[1]){
            chk = [...array];
            acc.push(chk[cur[0] - 1])
        }else{
            chk = [...array].slice(cur[0] - 1,cur[1]).sort(function(a, b){
                return a - b;
            })
            acc.push(chk[cur[2] - 1])
        }
        return acc;
    }, []);
    return answer;
}