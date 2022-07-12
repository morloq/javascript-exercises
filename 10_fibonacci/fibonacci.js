const fibonacci = function(input) {
    //do fibonacci sequence up until input
    //return input
    if(input < 0) {
        return "OOPS";
    }
    else if(input == 0) {
        return 0;
    }
    else if(input == 1){
        return 1;
    }
    else{
        let fibonacci;
        //fibonnaci for input value:
        fibonacci = Math.round(Math.pow((1/2)*(1+ Math.sqrt(5)), input)/(Math.sqrt(5)));
        return fibonacci;
    }
};

// Do not edit below this line
module.exports = fibonacci;
