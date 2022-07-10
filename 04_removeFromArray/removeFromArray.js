const removeFromArray = function(arr, ... theArgs) {
    for(i = 0; theArgs.length; i++)
    {
        let index = arr.indexOf(theArgs[i]);
        if(index != -1)
        {
            arr.splice(index, 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
