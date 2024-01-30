function strLength(date) {

    if (typeof date === "string" || typeof date === "object") {
    
        return date.length;
    
    } else if (typeof date === "number") {

        const numStr = date.toString();

        return numStr.length;

    }

}


console.log(strLength([1,2,3]));
console.log(strLength(53345))
console.log(strLength("Hola"));
