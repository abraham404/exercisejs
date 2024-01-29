checkString = (str) => {

    let resul_str = str;


    if (str < 6) {
        return resul_str;
    }

    if (resul_str.slice(4, 10) == 'Script') {
        return resul_str = str.slice(0, 4) + str.slice(10, str.length)
    } else {
        return resul_str;
    }
}

console.log(checkString("eergSciptInicio"))