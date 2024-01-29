const countStr = (str, word) => {
    if ((str !== undefined || word !== undefined) && (typeof str === "string" && typeof word === "string")) {
        const arrayStr = str.split(" ");
        let count = 0;
        arrayStr.forEach(element => {
        if (element === word) {
                count++;
            }
        });

        console.log(count)
    } else {
        console.log("Please enter a string")
    }
}

countStr("Hola mundo , adios mundo", "mundo");
countStr("referf", "erff");
countStr(120,2444)

console.log(typeof 15);
