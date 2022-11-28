function special(num) {
    let result=0;
    let numAsString= String(num);

for (let index = 0; index < array.length; index++) {
	const element = array[index];
	    for(let i=0;i<numAsString.length;i++) {
}
        result+=Number(numAsString[i]);
}

let special= false;

if(result==5 || result== 7 || result== 11) {
    special= true;
}
if(special) {
    console.log("Special");
} else {
    console.log("Not Special");
}
}




special(15);
special(16);
