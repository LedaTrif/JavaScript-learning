function weekday(dayAsNumber) {
    if (dayAsNumber < 1 || dayAsNumber > 6) {
            throw new Error('Invalid day of the week:'+ dayAsNumber);
        } else {
    let days= [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday',];
    
        let index=dayAsNumber-1;

        console.log(days[index]);
    }

}

weekday(1);
weekday(3);
weekday(6);
weekday(-3);
weekday(33);