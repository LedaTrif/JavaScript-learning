function gladiatorExpences(
    lostFights, 
    hemletPrice, 
    swordPrice, 
    shieldPrice, 
    armorPrice) {

        let totalExpenses = 0;
        let currentFight;
for (let currentFight=1; currentFight<lostFights; currentFight++) {
    if(currentFight% 2===0){
    totalExpenses+=hemletPrice;
}
    if(currentFight % 3===0) {
        totalExpenses+=swordPrice;
}
    if(currentFight % 6===0) {
        totalExpenses+=shieldPrice;
}
if(currentFight % 12===0) {
    totalExpenses+=armorPrice;
} 
   


}
console.log(totalExpenses.toFixed(2));
    }

gladiatorExpences(7,2,3,4,5)