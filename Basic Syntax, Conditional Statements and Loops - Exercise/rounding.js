function round(a, b){
a= Number(a); //Parse to number
b= Number(b); //Parse to number
if(b>15){
    b=15;
}
a=a.toFixed(b);
console.log(parseFloat(a));// cut all zeros after decimal, 10,500 --> 10,5
}

round(3.14567788,2);
round(10.5,3);
