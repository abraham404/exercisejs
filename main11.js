const palindromic = (num) => {
    if (typeof num === "number") {

        const numStr = num.toString();
        const arrayNum = numStr.split("");
        let j = arrayNum.length - 1;
        let flag = true;
        for (let i = 0; i < arrayNum.length; i++) {
            if (arrayNum[i] !== arrayNum[j]) {
                flag = false;
                break;
            }

            j--;
        }
        return (flag) ? true : false;
    }else {
        return "Enter a number"
    }


}

console.log(palindromic(1001));
console.log(palindromic());
console.log(palindromic("we"));