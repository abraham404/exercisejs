const cutStr = function (str, cut) {

    if (str.length > cut) {

        const cut_str = str.slice(0, cut);
        return cut_str;

    } else {

        return "Can't be cut";
    }


}

console.log(cutStr("Hola", 20));