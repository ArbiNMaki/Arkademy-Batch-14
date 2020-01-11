function randomize(number){
    if(typeof number !== 'number'){
        return console.log(false);
    } 
    else{
        let min = 1;
        let max = 10;
        let array = [];
        for(var i=0;i<number;i++){
            let randomNumber = Math.floor(Math.random() * (max - min) + min);
            array.push(randomNumber);
        }
        let sum = array.reduce((a,b) => a + b);
        return console.log("array : [" + array + "]\nsum : " + sum);
    }
}

randomize(5)