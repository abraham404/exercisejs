const functDiscount = (amount, discount) => {
    let resul = 0;
    
    discount /= 100;

    resul = amount - (amount * discount);
    
    console.log(resul);

}
functDiscount(1500, 25);