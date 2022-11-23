/*        Friday	Saturday	Sunday
Students	8.45	9.80	10.46
Business	10.90	15.60	16
Regular	    15	    20	    22.50


Students – if the group >= 30 people, price -15%
Business – if the group >= 100 people, 10 of them can stay for free (100-10)
Regular – if the group >=10 && group<= 20 , price -5%

*/


function vacation(peopleCnt, groupType, dayOfWeek) {

let pricePerOne=0;

if(dayOfWeek==='Friday') {
    if(groupType==='Students'){
    pricePerOne=8.45;
    } else if(groupType==='Business'){
     pricePerOne=10.90;
    } else if(groupType==='Regular'){
     pricePerOne=15;
    }
}
else if(dayOfWeek==='Saturday') {
   if(groupType==='Students') { 
    pricePerOne=9.8;
    } else if(groupType==='Business') {
     pricePerOne=15.6;
    } else if(groupType==='Regular') {
        pricePerOne=20;
    }
}
else if(dayOfWeek==='Sunday') {
           if(groupType==='Students') {
     pricePerOne=10.46;
    } else if(groupType==='Business') {
     pricePerOne=16;
    } else if(groupType==='Regular') {
        pricePerOne=22.5;
    }
}

if (peopleCnt>=30 && groupType==='Students') {
    pricePerOne*=0.85;
} else if (peopleCnt>=100 && groupType==='Business') {
    peopleCnt-=10;
} else if(groupType==='Regular' && peopleCnt>=10 && peopleCnt<=20) {
    pricePerOne*=0.95;
}

let totalPrice = pricePerOne*peopleCnt;

console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

