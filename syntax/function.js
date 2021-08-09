function f123(){
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
}

f123();


console.log(Math.round(1.6));
console.log(Math.round(1.4));

// function sum(first, second){
//     console.log(first+second);
// }
// sum(2,4);


function sum(first, second){
    console.log('A')
    return first+second;  //return 으로 결과 출력후 밑에 B는 출력되지 않는다.
    console.log('B')
}
console.log(sum(2,4));