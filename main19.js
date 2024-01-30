const countLetters = (str = undefined) => {

    if (typeof str === "string") {

        str = str.toLowerCase();
        const arrayStr = str.split("");
        const arrayVowels = ['a', 'e', 'i', 'o', 'u'];
        const arrayConsonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l',
            'm', 'n', 'ñ', 'p', 'q', 'r', 's', 't', 'v',
            'x', 'z', 'w', 'y']

        let countV = 0, countC = 0;
        //console.log(arraycConsonants)
        arrayStr.forEach(element => {
            arrayConsonants.forEach(element2 => {
                if (element === element2) {
                    countC++;
                }

            });

            arrayVowels.forEach(element3 => {
                if (element === element3) {
                    countV++;
                }
            });
        });

        console.log(`Vowels: ${countV}, Consonants: ${countC}`);


    } else {
        console.log("Please enter a string")
    }

}

countLetters("Hola Mundo");
countLetters(222);
countLetters();
countLetters("Jorge Abraham Rosas Hernandez");