const deleteDuplicate = (numArray) => {

    let result = numArray.filter((item, index) => {

        return numArray.indexOf(item) === index;

    })

    console.log(result);
}

deleteDuplicate([1, 4, 5, 5, 51, 51, 51, 5, 1, 5, 4]);