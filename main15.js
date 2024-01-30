const celcToFahr = celc => (typeof celc === "number")
    ? (celc * 9/5 ) + 32 + "F"
    : "Enter a number"

console.log(celcToFahr(100))
console.log(celcToFahr())
console.log(celcToFahr("eer"))