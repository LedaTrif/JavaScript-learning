function reverse(a, b, c) {

    console.log(`${c} ${b} ${a}`);
}

reverse(1, 2, 3);

reverse('a', 'b', 'c');


/* option 2 advanced

function reverse(...params) {
    console.log(params.reverse().join(' '));
}

reverse(1, 2, 3,4,5,6,7,8,9,10,11);
*/