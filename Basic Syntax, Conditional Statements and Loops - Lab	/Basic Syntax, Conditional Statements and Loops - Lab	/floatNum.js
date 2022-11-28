function float(a, b, c){
    let sum= a+b+c;

    let sumAsString= String(sum);
    let type='Integer';

    for(let i=0; i<sumAsString.length; i++) {
        if(sumAsString[i] == '.') {
            type='Float';
        }
    }

    console.log(Math.round(sum), type);
}

float(1,2,3);
console.log('---');
float(1,2,3.14);

