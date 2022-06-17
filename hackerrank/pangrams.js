/*
A pangram is a string that contains every letter of the alphabet. Given a sentence determine whether it is a pangram in the English alphabet. Ignore case. Return either pangram or not pangram as appropriate.

Example

The string contains all letters in the English alphabet, so return pangram.

Function Description

Complete the function pangrams in the editor below. It should return the string pangram if the input string is a pangram. Otherwise, it should return not pangram.

pangrams has the following parameter(s):

string s: a string to test
Returns

string: either pangram or not pangram

Sample Input

Sample Input 0

We promptly judged antique ivory buckles for the next prize

Sample Output 0

pangram

Sample Explanation 0

All of the letters of the alphabet are present in the string.

Sample Input 1

We promptly judged antique ivory buckles for the prize

Sample Output 1

not pangram

Sample Explanation 0

The string lacks an x.

=========================================
1. have all letters in arr
2. loop through s 
3. if the letter is in the arr remove the letter in the arr
4. if letters length is 0 return true else false
*/

let test1 = "We promptly judged antique ivory buckles for the next prize"



function pangrams(s) {
    // Write your code here
    let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let str = s.toLowerCase()
    for(let x = 0; x < str.length; x++){
        if (letters.includes(str[x])){
            
            let filtered = letters.filter(letter => letter != str[x])
            letters = filtered
           
        }
    }
    
    if (letters.length === 0){
        return "pangram"
    } else {
        return "not pangram"
    }
}


console.log(pangrams(test1))