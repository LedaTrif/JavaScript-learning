function magicSum(array, magicNUmber) {
    for (let i = 0; i < array.length-1; i++) {
       let currentNum= array[i];
        for(let j=i+1; j < array.length; j++) {
            let nextNum= array[j];
            let sum= currentNum + nextNum;
            if(sum===magicNUmber) {
                console.log(`${currentNum}${nextNum}`);
        }
        
    }

}
}

magicSum([1,7,6,2,19,23],8);