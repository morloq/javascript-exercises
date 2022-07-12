const getTheTitles = function(input) {
    //given array of objects that represents books -> title, author
    //return an array containing all the titles of the given array of books
    if(input.length == 0){
        return "Empty";
    }

    let titles = [];

    for(const key in input){
        let obj = input[key];//get obj
        if(obj.hasOwnProperty("title")) {
            titles.push(obj["title"]);
        }
    }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
