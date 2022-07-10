const repeatString = function repeat(input, times) {
    let output = "";
    if(times < 0)
    {
        return 'ERROR';
    }
    for(i = 0; i < times; i++)
    {
        output += input;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
