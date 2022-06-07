//프로그래머스 - Level 2 - 게임 맵 최단거리(코딩테스트 연습 - 찾아라 프로그래밍 마에스터 - 게임 맵 최단거리)
var maps = [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]];
function solution(maps) {
    let answer = 2;
    let maps_copy = [...maps];
    let now = [0, 0];
    let maps_n = maps.length - 1;
    let maps_m = maps[0].length - 1;
    if(maps_copy[maps_n][maps_m - 1] == 0 && maps_copy[maps_n - 1][maps_m] == 0){
        answer = -1;
    }else{
        for(let i = 1; i < maps_n; i++){
            for(let j = 1; j < maps_m; j++){
                if(answer > (maps_n * maps_m)){
                    return answer = -1;
                }else{
                    if(maps_copy[now[0]][now[1] + 1] == 1){
                        answer++;
                        now[1]++;
                        maps_copy[now[0]][now[1]] = 0;
                    }
                    else if(maps_copy[now[0] + 1][now[1]] == 1){
                        answer++;
                        now[0]++;
                        maps_copy[now[0]][now[1]] = 0;
                    }
                    else if(maps_copy[now[0] - 1][now[1]] == 1){
                        answer++;
                        now[0]--;
                        maps_copy[now[0]][now[1]] = 0;
                    }
                    else if(maps_copy[now[0]][now[1] - 1] == 1){
                        answer++;
                        now[1]--;
                        maps_copy[now[0]][now[1]] = 0;
                    }
                    else{
                        return answer = -1;
                    }
                }
               
            }
        }
    }
    return answer;
}
solution(maps);