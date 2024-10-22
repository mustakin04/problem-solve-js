// function number(){
//     return 10;
// }
// // number();
// console.log(number())

const latest={
    name:"Mustakin",
    id:"193-18-3007",
    myfunction:function(){
        return this;
    }
}
latest.myfunction();
console.log(latest)