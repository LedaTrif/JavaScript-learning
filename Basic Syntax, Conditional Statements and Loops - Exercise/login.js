function login(input) {
    let userName= input.shift();
    let count=0;

    for (let i=1; i<input.length; i++) {
        if (input[0] == input[i].split("").reverse().join(""))
         {
            console.log(`User ${userName} logged in.`);     
                }
        if(count===3) {
            console.log(`User ${userName} blocked`);
            break;
        }
        let revrsString = input[i];
        if(revrsString !==userName) {
            console.log(`Incorrect password.Try again.`);
        } else {
            console.log(`User ${userName} logged in.`);
        }
  
       count++;
    }
}

login(["Acer", "login", "John", "go", "recA"]);