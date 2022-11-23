//Write a function, which receives a single number – n, 
//and prints a triangle from 1 to n as in the examples.
//n will be in the interval [1...20].


function write(n){
   
    for (i=1; i<=n; i++){
        let sequense = '';

        for (j=1; j<=i; j++){
            sequense += i;

            if (j!==i){
                sequense += ' ';
            }
        }
        console.log(sequense);   
        
    }

}
write(3);
