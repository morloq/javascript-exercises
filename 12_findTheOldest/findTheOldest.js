const findTheOldest = function(people) {
    /*for each person person-object in the array, get the age
    -> death year - birth year = age
    if no death date to work with, use date function to get age
    store age and person object behind it in array of objects
    compare ages -> keys and return the person object with the highest age*/

    let ageAndPeople = [
        {
            
        }
    ];//supposed to store people by their ages
    let oldest = 0;
    for(const key in people)
    {
        let person = people[key];
        let age = 0;
        if(person.hasOwnProperty("yearOfBirth") && person.hasOwnProperty("yearOfDeath")) {
            age = person.yearOfDeath - person.yearOfBirth;
        }
        else{
            age = new Date().getFullYear() - person.dateOfBirth;
        }
        if(age > oldest && person.hasOwnProperty("yearOfDeath")) {
            oldest = age;
            ageAndPeople[0] = person;
        }
        else if(age >= oldest){
            oldest = age;
            ageAndPeople[0] = person;
        }
    }
    return ageAndPeople[0];
};

// Do not edit below this line
module.exports = findTheOldest;
