function amazing(num) {
    let result =0;
    let number=null;
    for (let i = 0; i < num; i++) {
        result+=number[i];
    }

   if (result==9){
        console.log('Amazing');
    }
    else{
        console.log('Not Amazing');
    }
}

amazing(1233);
amazing(1293);
