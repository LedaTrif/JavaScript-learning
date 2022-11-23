//Write a function that displays numbers from given start to given end and their sum. 
//The input comes as two number parameters. Print the result like the examples below:


function sum(num1,num2){

    let sum=0;
    let sequense='';
    for(i=num1; i<=num2; i++){
        console.log(i);
        sequense+=i + " ";
        sum +=i;
        

}
console.log(sequense);
console.log(sum);

}

sum(5, 10);

