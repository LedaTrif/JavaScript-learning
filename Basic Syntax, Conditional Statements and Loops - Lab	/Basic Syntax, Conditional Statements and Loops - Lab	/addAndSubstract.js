function addAndSubstract(arr) {
    // TODO change value of odd and even numbers in array
    //if even: + index of the number (num%2==0 + num[i])
    //if odd: - index of the number  (num%2!=0 - num[i])
    //add the number to the array (push modified num)
    //sum numbers of modified array
    let modifiedSum=0;
    let originalSum=0;
for(i=0; i<arr.length; i++) {  
    originalSum+=arr[i];

    let num=arr[i];
    if(num%2==0){
        num+=i;       
    }
    else if(num%2!=0){
        num-=i;
    }
    modifiedSum+=num;
}
    //print sum of modified array
    //print sum of original array
    console.log(modifiedSum);
    console.log(originalSum);
}

addAndSubstract([5,15,23,56,35]);
addAndSubstract([-5,11,3,0,2]);
        



    