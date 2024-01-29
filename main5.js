const strRepeat = (str, repeat = 1) => {
    if (str !== undefined){
        for (let i = 0; i < repeat; i++){

            console.log(`${i+1})  ${str}`);
    
        }
    }else{
        console.log("Please enter a string")
    }   
}

strRepeat("jorge", 3);
strRepeat("abraham");
strRepeat();
