/*
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false
*/
let s = "axc"
let t = "ahbgdc"

var isSubsequence = function(s, t) {
    let str1 = ""
    let counter = 0
    
    for (let i = 0; i < t.length; i++) {
        if (t[i] === s[counter]) {
            str1 += t[i]
            counter++
        }
    }
    console.log(str1, "===" , s)
    if (str1 === s) {
        return true
    } else {
        return false
    }
};

console.log(isSubsequence(s,t))