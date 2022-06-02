/*          __                        __         
           /\ \                      /\ \        
 _ __    __\ \ \___      __      ____\ \ \___    
/\`'__\/'__`\ \  _ `\  /'__`\   /',__\\ \  _ `\  
\ \ \//\  __/\ \ \ \ \/\ \L\.\_/\__, `\\ \ \ \ \ 
 \ \_\\ \____\\ \_\ \_\ \__/.\_\/\____/ \ \_\ \_\
  \/_/ \/____/ \/_/\/_/\/__/\/_/\/___/   \/_/\/_/

    Given to a Coding Dojo alumni by Riot Games.
    Rehash an incorrectly hashed string by combining letter count occurrences
    and alphabetizing them.
*/
//                 v
const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

/*
what we know
-an object(hash) to store the letters and numbers
-return a new string
-loop through string
    - starts from a letter and stops when it sees another letter
    - add the letter as a key and add the numbers as a value pair
    - if key is already in the obj just add the value 

-loop through each letter of the keys and sort in order
    -add to string

-return string

*/
function rehash(str) {
    let obj = {};
    let result = "";

    // loop through str
    for (let x = 0; x < str.length; x++){
        // starts from a letter and stops when it sees another letter
        if (isNaN(str[x])){
            //add the letter as a key 
            obj[str[x]] = "";
            // if its a number
            if(!NaN(str[x])){
                
            }
            console.log("key: " + str[x]);

        }
    }
    console.log(obj);
 }

rehash(str1);
// console.log((rehash(str1)))
// console.log(rehash(str1) === expected1, "<-- should be \"true\"");