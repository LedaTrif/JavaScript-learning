//reverse in array from 1 to n 
//- swap current element with element in other half
//- use temp variable to store value during swap


function inPlace(arr) {
    for (let i = 0; i < arr.length/2; i++) {
        let k= arr.length-1-i;
        let temp= arr[i];
        arr[i]= arr[k];
        arr[k]= temp;
    }
    console.log(arr.join(' '));
}

inPlace([10,20,30,40,50,60,70,80]);
//[10,20,30,40,50,60,70,80,]; // lenght 7 /2--> 3.5 --> Math.Ceiling=4 is the midle 
//[10,20,30,40,50,60]; // lenght 6/2--> 3
//0  1 2 3 4 5 6 7 8 9 
// 0...lenght
//i< lenght/2
// 0 -> 6
// 1 -> 5
// 2 -> 4
// 3 -> 3
// 4 -> 2
// 5 -> 1


//let k = lenght-1-i; // index lenght from both sides