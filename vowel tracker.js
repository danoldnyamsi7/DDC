/*
==============================================================================================================================================
                                                                Needs to be ameliorated
==============================================================================================================================================
function showVowel(name){
     let container = [name];
     for(let i=0; i<name; i++){
         if(container[i]== 'a' || container[i]== 'e' || container[i]== 'i' || container[i]== 'o' || container[i]== 'u'){
             console.log(i);
         }
     }
 }
 showVowel(prompt('enter name'));
===============================================================================================================================================
                                                                    
===============================================================================================================================================
*/

function showVowel(input) {
    let arr = [];
    for (let i=0; i<input.length; i++){
        arr[i] = input[i];
        if(input[i] == 'a' || input[i] == 'e' || input[i] == 'i' || input[i] == 'o' || input[i] =='u'){
            console.log(arr[i]);
        }
    }
}
showVowel('Nouba Nyamsi Joel Danold');



