const numFactorial  = (num) => {
    let factorial = 1;
    for(let i = 0; i < num; i++){
        factorial *= (i + 1);
    }

    console.log(factorial)
}

numFactorial(20);