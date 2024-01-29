const reverse = (str) => {
    if (typeof str === "string" || typeof str === "number") {
        
        if (typeof str === "number"){
            const number = str;
            str = number.toString();
        }

        const splitStr = str.split("");

        const reverseStr = splitStr.reverse();

        const joinStr = reverseStr.join("");

        console.log(joinStr);

    } 
    else {
        console.warn("Please enter a String or a number")
    }

}

reverse("Hola mundo")
reverse(123456789);
reverse()