const palindrome = (str) => {
    
    str = str.replace(/[^\w]/gi, '');
    str = str.toLowerCase();
    const arrayPalindrome = str.split("");

    let arraySize = arrayPalindrome.length;
    let j = arraySize - 1;
    let flag = true;

    for (let i = 0; i < arraySize; i++) {
        if (arrayPalindrome[i] !== arrayPalindrome[j]) {

            flag = false;
            break;
        }
        j--;
    }

    if (flag) {
        return true
    } else {
        return false
    }
}
console.log(palindrome("deiDWEDfied"));
console.log(palindrome("sir i demand i am a maid named iris"));
console.log(palindrome("Was it a car or a cat I saw"))
console.log(palindrome("Eva, can I see bees in a cave?"));
console.log(palindrome("Jorge3e#$%,"))
console.log(palindrome("Red roses run no risk, sir, on Nurse’s order."))
console.log(palindrome("Amar da drama"))