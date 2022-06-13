//프로그래머스 - Level 1 - 2022 KAKAO BLIND RECRUITMENT - 신고 결과 받기

let id_list = ["con", "ryan"];
let report = ["ryan con", "ryan con", "ryan con", "ryan con"];
let k = 3;

// let id_list = ["muzi", "frodo", "apeach", "neo"];
// let report = ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"];
// let k = 2;
//answer == [2,1,1,0]
solution(id_list, report, k);
//소스
// function solution(id_list, report, k) {
//     let answer = new Array(id_list.length);
//     let dec = new Array(id_list.length);
//     let rep = new Array(id_list.length);
//     let sum = new Array(id_list.length);
//     let sum1 = new Array(id_list.length);
//     let report_set = new Set(report);
//     for(let i = 0; i < id_list.length; i++){
//         answer[i] = 0
//         sum[i] = 0;
//         sum1[i] = 0;
//         dec[i] = new Array(id_list.length);
//         rep[i] = new Array(id_list.length);
//         for(let j = 0; j < id_list.length; j++){
//             dec[i][j] = 0;
//             rep[i][j] = 0;
//         }
//     }
//     const reportArr = [...report_set];
//     let overlap = reportArr.map((cur) => {
//         cur = cur.split(' ');
//         dec[id_list.indexOf(cur[0])][id_list.indexOf(cur[1])]++;
//         rep[id_list.indexOf(cur[1])][id_list.indexOf(cur[0])]++;
//         return answer, dec, rep;
//     });
//     for(let j = 0; j < id_list.length; j++){
//         for(let i = 0; i < id_list.length; i++){
//             sum[j] = sum[j] + dec[i][j]
//             sum1[i] = sum1[i] + rep[j][i]
//         }
//         if(sum[j]-k >= 0){
//             answer[j]++;
//         }
//         if(sum1[j]-k >= 0 && sum[j]-k >= 0){
//             answer[j]++;
//         }
//     }
//     overlap;
//     // console.table(answer)
//     console.table(dec)
//     console.table(rep)
//     // console.log(sum)
//     console.log('answer : ',answer);
//     // console.log(dec)
//     return answer;
// }



function solution(id_list, report, k) {

    const leng = id_list.length;
    let answer = new Array(leng).fill(0);
    let arr = new Array(leng).fill(0).map(() => new Array(leng).fill(0).map(() => new Array(2).fill(0)));
    let arr1 = new Array(leng).fill(0)
    let report_set = new Set(report);
    const reportArr = [...report_set];
    reportArr.map((cur) => {
        cur = cur.split(' ');
        //x축 신고한 / y축 받은
        arr[id_list.indexOf(cur[1])][id_list.indexOf(cur[0])][0]++;
        arr[id_list.indexOf(cur[0])][id_list.indexOf(cur[1])][1]++;
    });
    for(let j = 0; j < leng; j++){
        for(let i = 0; i < leng; i++){
            arr1[j]+=arr[i][j][0];
            // arr1[i][1]+=arr[i][j][1];
            // 좌 - 신고한 내역 처리 / 우 - 신고 체크여부
            console.log(arr1[i][1]%k)
            if(arr1[j]%k == 0 && ( arr1[j][0] > 0) && !(arr[j][i][1] == 0)){
                console.log(i, j)
                answer[j]++;
            }
        }
    }
    console.table(arr)
    console.table(arr1)
    console.table(answer)
    return answer;
}