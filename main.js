const newArray = (array) => {
    if (Array.isArray(array)) {
       
        const copyOfArray = [...array];

        copyOfArray.forEach(element => {
            console.log(Math.pow(element, 2));
        })

    } else {
        console.log("Please enter an array");
    }
}

newArray([1, 2, 3]);
newArray("dwe");