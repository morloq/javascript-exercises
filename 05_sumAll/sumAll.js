const sumAll = function(start, end) {
    let sum = 0;
    if(start < 0)
    {
        return "ERROR";
    }
    if(end < 0)
    {
        return "ERROR";
    }
    if(isNaN(start) || typeof start ==='string')
    {
        return "ERROR";
    }
    if(isNaN(end) || typeof end === 'string')
    {
        return "ERROR";
    }
        if(start < end)
        {
            for(i = start; i <= end; i++)
            {
                sum += i;
            }
        }
        if(start > end)
        {
            for(i = end; i <= start; i++)
            {
                sum += i;
            }
        }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
