var s ="2three45sixseventhreethree";

solution(s);
function solution(s) {
    let number = [/zero/g,/one/g,/two/g,/three/g,/four/g,/five/g,/six/g,/seven/g,/eight/g,/nine/g];
    for(let i = 0; i < 10; i++){
        s = s.replace(number[i],i);
    }
    return Number(s);
    // let number = ["zero","one","two","three","four","five","six","seven","eight","nine"];
    // for(let i = 0; i < 10; i++){
    //     s = s.split(number[i]).join(i);
    // }
    // return Number(s);
}