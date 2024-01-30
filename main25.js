const sortArray = (numArray) => {

    numArray.sort((a, b) => a - b)
    console.log("Asc: "+numArray);
    numArray.sort((a, b) => b - a)
    console.log("Des: "+ numArray);


}

sortArray([70, 49, 37, 43, 79, 14, 35, 66, 83, 38, 35, 53, 77, 66, 70, 30, 52, 41, 33, 65])