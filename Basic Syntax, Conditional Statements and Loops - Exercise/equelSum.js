function equalSum(array, separator) {

    let hasEqualSum=false;

    for (let i=0; i<separator; i++) {

        let leftSum=0;
        let rightSum=0;
    

        for (let j=index-1; j>=0; j--) {
            leftSum+=array[j];
        }
 for(let num=index+1; num<array.length; num++) {
    rightSum+=array[num];
}
if(leftSum===rightSum) {
    hasEqualSum=true;
    console.log(index);
}

else {
    console.log(`$"no"`);
}
    }
}

equalSum([1, 2, 3, 3], 3);


//Equal Sums
// Write a function that determines if there exists an element in the array of numbers 
//such that the sum of the elements on its left is equal to the sum of the elements on its right. 
// If there are NO elements to the left/right, their sum is 0. 
// Print the index that satisfies the required condition or "no" if there is no such index.
