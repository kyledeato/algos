/*
205. Isomorphic Strings
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
Example 3:

Input: s = "paper", t = "title"
Output: true

-need 2 empty object
-loop through

egg
e: 0
g: 1



add
a: 0
d: 1
*/

let s = "egg" 
let t = "add"
var isIsomorphic = function(s, t) {
    let obj1 = {}, obj2 = {}

    for (let i = 0; i < s.length; i++){
        if (obj1[s[i]] !== obj2[t[i]]) {
            console.log(obj1)
            console.log("============")
            console.log(obj2)
            return false
        }
         else {
            obj1[s[i]] = i
            obj2[t[i]] = i
         }
    }
    console.log(obj1)
    console.log("============")
    console.log(obj2)
    return true
};

console.log(isIsomorphic(s,t))