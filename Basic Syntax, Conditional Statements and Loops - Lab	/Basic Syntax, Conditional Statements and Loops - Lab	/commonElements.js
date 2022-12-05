//find common elements in an array
// print lines with the element name as String
function findCommonElements(arr1, arr2) {
    // let combinedArray= arr1.join(arr2);

    // console.log(combinedArray);
       
    for (let i=0; i<arr1.length; i++) {
        for (let j=0; j<arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                console.log(arr1[i]);
                return arr1[i];
            }
        }
        
}
}
findCommonElements([1,2,3,4,5],[8,2,7,4,9]);

