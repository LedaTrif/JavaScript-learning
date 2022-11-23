function year(leapyear) {
    let result= 
    (leapyear%4===0 && leapyear%100!==0) || leapyear%400===0 ? "yes" : "no";
    console.log(result);
}

year(1984);
year(2003);
year(4);
