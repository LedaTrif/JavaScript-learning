function language(country) {
    if (country=='England') {
        language=='English'
    }
    else if (country=='Spain') {
        language=='Spanish'
    }
    else if (country=='other'){
        language=='unknown'
    }
}
    console.log(`${country}, ${language}`);

   

language('England');
language('Spain');
language('other');