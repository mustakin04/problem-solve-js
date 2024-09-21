let number=[1,2,3,4,5,6,7,8,9,10];
// console.log(number);
// stor=number.reverse();
// console.log(stor);
let stor=[];
for(let i=0; i<number.length; i++)
{
    console.log(number[i]);
    stor.unshift(number[i]);
}
console.log(stor);
