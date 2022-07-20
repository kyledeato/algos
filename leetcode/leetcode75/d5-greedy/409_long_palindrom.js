/*
Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

 

Example 1:

Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
Example 2:

Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.

- only had the 1 occurences into the obj 
*/
let s = "a"

var longestPalindrome = function(s) {
    let total = 0
    let obj = {}

    for(let x = 0; x < s.length; x++) { // deletes the duplicates if in obj already and adds total
        if (s[x] in obj) {
            total += 2
            delete obj[s[x]]
        } else { // adds all the extra 1's occurences into the obj 
            obj[s[x]] = 1
        }
    }

    if (Object.keys(obj).length >= 1){
        return total + 1
    }

    return total
};

console.log(longestPalindrome(s));