// function that takes a single parameter and converts it to celsius.
function convertFahrToCelsius (Fahr) {

    if(typeof Fahr === "string" || typeof Fahr === "number")

    {

        var FahrX = parseInt(Fahr);

        var ConvertedFahr = ((FahrX - 32) * 5/9 );

        var RoundedFahr = ConvertedFahr.toFixed(4);
        
        return RoundedFahr
    }

    if(Array.isArray(Fahr))    

    return  `${Fahr} is not a valid number but a/an array`;

    if(typeof Fahr === "object") 
    { 
        var FahrValue = JSON.stringify(Fahr);
        return `${FahrValue} is not valid number but a/an object `
    }

    if (typeof Fahr === "boolean")
    { 
      return `${Fahr} is not valid number but a/an boolean` 
    }
}

console.log(convertFahrToCelsius({age:29}))
console.log(convertFahrToCelsius(5));
console.log(convertFahrToCelsius([3,2]));
console.log(convertFahrToCelsius(1));