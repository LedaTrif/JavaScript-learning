function sumDigits(input) {
    let sum=0;
    let numbberAsString= input.toString();
    for (const char of numbberAsString) { // const a of b : takes a from a longer string "b"
        sum+= Number(char); // returns numbers and sums together
    }
    console.log(sum);
    
}

sumDigits(245678) 