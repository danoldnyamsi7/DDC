

let input = Number(prompt('how many numbers will you need'));
let numbers = [];
for(let i=1; i<=input; i++){
    let digits = Number(prompt('number : ' + i));
    numbers.push(digits);
}

let sum = numbers.reduce((total,items) =>{
    return total + items;
},0);

let nod = numbers.length;
alert('the average of ' + numbers + ' is : ' + sum/nod);

