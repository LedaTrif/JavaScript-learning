/*function sumDigits(input) {
    let sum=0;
    let numbberAsString= input.toString();
    for (const char of numbberAsString) { // const a of b : takes a from a longer string "b"
        sum+= Number(char); // returns numbers and sums together
    }
    console.log(sum);
    
}

sumDigits(245678) 
*/

//option 2
/*function sumDigits(input) {
    let sum=0;
    let numbberAsString= input.toString();
    
    numberAsString.split("").forEach(function (char) { sum+= Number(char); });  
    console.log(sum);
}*/


//option 3
/*function sumDigits(input) {
    let sum=0;
    let numbberAsString= input.toString();

    numberAsString.split("").map(function (char) { sum += Number(char);
    console.log(sum);
    }
*/

/*option4 basic*/

function sumDigits(input) {
    let sum=0;
    let numbberAsString= input.toString();

    for (let index=0; index<numbberAsString.length; index++) {
        sum += Number(numbberAsString[index]);
    }
    console.log(sum);
}

    sumDigits(245678) 