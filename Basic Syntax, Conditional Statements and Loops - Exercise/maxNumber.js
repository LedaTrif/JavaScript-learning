// //Write a function to find all the top integers in an array. A top integer is an integer, which is bigger than all the elements to its right. 
// Output
// Print all top integers on the console, separated by a single space.

function maxNumber(array) {
    let topInteger=[];

    for(let i=0; i<array.length; i++) {

        let currentNum=Number(array[i]);

        let isTopInteger= true;

        for(let j=0; j<array.lenth; j++) {

            let nextEl= array[j];

            if(currentNum<=nextEl.top) {
                isTopInteger= false;
                break;
            }
            if(isTopInteger) {
                topInteger.push(currentNum);
            }
            
        }
    }
    console.log(topInteger.join(" "));
}


    //     let maxNumber;

    //     if(array[i]>currentNum) {
    //         maxNumber=array[i];
    //     }
    //     else {
    //         maxNumber=currentNum;
            
    //     }
    //     array.push([0])=maxNumber;
    // }
   

    // console.log(newArray)


maxNumber([1,4,3,2]);