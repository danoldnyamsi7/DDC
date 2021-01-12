
// let toBeReversed = prompt('enter text to be reversed'), accumulator='';
// for(let i = toBeReversed.length ; i>=0; i++){
//     accumulator += toBeReversed[i];
// }
// alert('the reverse of your entry is : ' + accumulator );

function reverseString(str){
    let newString = '';
    for(let i = str.length-1; i>=0; i--){
        newString += str[i];
    }
    return newString;
}
reverseString('oh my Goodness');
