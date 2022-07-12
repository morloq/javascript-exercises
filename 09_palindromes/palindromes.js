function palindromes (input) {
    //set to lowercase, remove spaces, remove punctuation
    //loop through, starting from highest index and decreasing
    //save each value in string and compare the original with the
    //final string, if == then palindrome.

    input = input.toLowerCase();
    input = input.replace(/\s+/g, '');
    input = input.replaceAll('.','');
    input = input.replaceAll(',', '');
    input = input.replaceAll(';', '');
    input = input.replaceAll('!', '');
    input = input.replaceAll('?', '');
    let reverse = "";
    for(i = input.length-1; i >= 0; i--) {
        reverse += input.charAt(i);
    }
    if(reverse == input) {
        return true;
    }
    else {
        return false;
    }
};
console.log(palindromes('A car, a man, a maraca.'));

// Do not edit below this line
module.exports = palindromes;
