function match(string1, string2, letter) {
  //if current caracter is '_' then add letter to string

  let result='';

  for (let i=0; i<string1.length; i++) {
    if(string1[i]== '_') {
        reslut+=letter;
    } else {
        result+=string1[i];

  }

    if (result==string2) {
        console.log(`Match`);
    } else {
        console.log(`No Match`);
    }
}
}

match("he_lo", "hello", 'l');
