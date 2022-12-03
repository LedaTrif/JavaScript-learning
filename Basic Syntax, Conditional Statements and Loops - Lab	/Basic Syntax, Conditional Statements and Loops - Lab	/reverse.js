function reverse(n,arr) {
//     let slice=[];
//     for (let i = 0; i < n; i++) {
//         slice.push(arr[i]);   
// }
// let result=[];
//     for (let i=slice.length-1; i>=0; i--) {
//         result.push(slice[i]);
        
// }
// console.log(result.join(' '));

//2nd option

let result=[];
for (let i = n-1; i >=0; i--) {
    result.push(arr[i]);
}
console.log(result.join(' '));
}

reverse(4,[1,2,3,4,7,8]);
reverse(4,[3,5,7,9,8,6]);