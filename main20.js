const nameValidate = str => {
    const nameRegex = /^([A-Z]{1}[a-z]+\s?){2,4}$/g

    let flag = (str.match(nameRegex) !== null) ? true : false;

    return flag;
}
console.log(nameValidate("Jorge Abraham Prueba"));
console.log(nameValidate("Jorge Prueb2a"));
console.log(nameValidate("Prueba 1Press"));
