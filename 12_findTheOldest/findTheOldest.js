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
    for(const key in people)//for each object in the array people
    {
        let person = people[key];//get the object
        let age = 0;
        if(person.hasOwnProperty("yearOfBirth") && person.hasOwnProperty("yearOfDeath")) {//if person has date of birth and death
            age = person.yearOfDeath - person.yearOfBirth;//calculate age based on that
        }
        else if(!person.hasOwnProperty("yearOfDeath")){//if person does not have a year of death
            age = new Date().getFullYear() - person.yearOfBirth;//calculate age based on current year
        }
        if(age > oldest) {
            oldest = age;
            ageAndPeople[0] = person;///save person if age is higher than current oldest age
        }
    }
    return ageAndPeople[0];//return oldest person
    //return ray and not carly
};

// Do not edit below this line
module.exports = findTheOldest;
