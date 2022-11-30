function spicesMustFlow(startingYeald) {
    let spicesExtracted=0;
    let dayCounter=0;

    while (startingYeald>=100) {
        dayCounter++;
        spicesExtracted+=startingYeald-26;
        startingYeald-=10;
    }

    console.log(dayCounter);
    if(dayCounter!=0){
        console.log(spicesExtracted-26);
    } else {
        console.log(spicesExtracted);
    }
}
 spicesMustFlow(111);