function person(age){
let person;
if(age>0 && age<=2){
    person=`baby`;
    console.log(person);
}
else if(age>2 && age<=13){
    person=`child`;
    console.log(person);
}
else if(age>13 && age<=19){
    person=`teenager`;
    console.log(person);
}
else if(age>19 && age<=65){
    person=`adult`;
    console.log(person);
}
else if(age>65){
    person=`elder`;
    console.log(person);
}
else {
console.log(`out of bounds`);
}

}

person(20);
person(1);
person(100);
person(-1);
