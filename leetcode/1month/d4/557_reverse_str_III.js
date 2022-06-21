/*
Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

 

Example 1:

Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
Example 2:

Input: s = "God Ding"
Output: "doG gniD"
*/
let s = "Let's take LeetCode contest"

let reverseString = (str) =>{

    let result = ""
    for (let x = str.length-1; x >=0; x--){
        result+= str[x]
    }
    return result
}


var reverseWords = function(s) {
  let words = s.split(" ")
  let result = []
  for (let x = 0; x < words.length; x++){
      console.log(reverseString(words[x]));
      result.push(reverseString(words[x]))
  }
  return result.join(" ")
};

console.log(reverseWords(s))