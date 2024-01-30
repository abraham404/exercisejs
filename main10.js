let min = 501, max = 600;

const randomNun = () => {
    for (let i = 0; i < 100; i++) {
        const x = Math.floor(Math.random() * (max - min + 1) + min);
        console.log(x);
    }
}

randomNun();