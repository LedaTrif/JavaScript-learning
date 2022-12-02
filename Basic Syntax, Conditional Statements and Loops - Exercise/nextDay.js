function nextDay(year, month, day) {

let January=1; //31 days
let February=2;// 28 or (29 days for year%4==0)
let March=3;//31 days
let April=4;//30 days
let May=5;//31 days
let June=6;//30 days
let July=7;//31 days
let August=8;//31 days
let September=9;//30 days
let October=10;//31 days
let November=11;//30 days
let December=12;//31 days


//after 31.12 -->yearCounter++
//after end of month--->monthCounter++

if(year%4==0 && month==2){ //leap year, 29.02
if(day<29){
    day++;// day
} else if(day==29){
    month++;// month-->3 March
    day ==1;

}
 
}
if(year%4!=0 && month==2){ //not a leap year, 28.02
    if(day<28){
        currentDay++;// day
    } else if(day==28){
        month++;// month-->3 March
        day ==1;
    
    }
    
    }
if(month==1 || month==3 || month==5 || month==7 || month==8 || month==10 ){
    if(day<31){
        day++;
        month++;

    } 
    if(day==31) {
        month++;
        day = 1;
    }
}

if(month==12) {
    if(day<31){
        day++;
        month++;
    }
    if(day==31) {
        month==1;
        day==1;
        year++;
    }
}
if(month==4 || month==6 || month==9 || month==11) {
    if(day<30){
        day++;
    }
    if(day==30) {
            month++;
            day = 1;
}


    console.log(`${year}-${month}-${day}`);
}
}
nextDay(2016,9,30);