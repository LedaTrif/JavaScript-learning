// each element sum with next element until end (while arrat has more than 1 element).

function sum(arr) {

    let sum = [];
    for( let n of arr ) {
        sum.push(n);
    }
    while (sum.length >1) {
        let temp=[];
    for (let i = 0; i < sum.length-1; i++) {
        temp.push(sum[i]+ sum[i+1]);
    }
    sum=temp;
   
}
console.log(sum);
}

sum([2,10,3]);
sum([5,0,4,1,2]);
sum([1]);

