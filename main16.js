const numConvert = (num, base) => {
    
    if (typeof num === "number") {
        const numStr = num.toString();
        const numStrArray = numStr.split("");
        let arrayNum = [];
        let numBi = 0, numDe = 0, j = 0, numAux = num;

        if (base === 2) {

            for (let i = numStrArray.length - 1; i >= 0; i--) {
                numBi = parseInt(numStrArray[i], 2);
                if (numBi === 1) {
                    numDe += Math.pow(2, j)
                }
                j++;
            };

            console.log(`Decimal: ${numDe}`);
        } else if (base === 10) {

            while (numAux >= 1) {

                if (numAux % 2 === 1) {

                    arrayNum.unshift(1);

                } else {

                    arrayNum.unshift(0);
                }

                numAux /= 2;
                numAux = Math.floor(numAux);
            }
            console.log(`Binary: ${parseInt(arrayNum.join(""), 10)}`);
        }

    }else{
        console.log("Enter a number");
    }

}

numConvert(1100011100001, 2);
numConvert(6369, 10);