const calculateAge = (year, month, day) => {
    let birthday_date = new Date(year, month - 1, day);
    let ageDifMs = Date.now() - birthday_date.getTime();
    let ageDate = new Date(ageDifMs);
    ageDate = Math.abs(ageDate.getUTCFullYear() - 1970);
    console.log(ageDate.getUTCFullYear);
}

calculateAge(1989, 12, 18);