
//when using rest and spread operators it is of no use to use an array and push values to it the rest operator does that for you

let average = (...numbers) => {
    let getAverage = numbers.reduce((sum,number) =>{sum + number},0)/numbers.length;
}
average(1,2,3,4,5);