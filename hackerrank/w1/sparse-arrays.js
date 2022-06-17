// There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.
/* 
strings = [ab , ab, abc]
queries = [ab, abc, bc]

results = [2,1,0]

what I need 
- result = []
counter = 0
- loop through queries and strings 
- if quries[num] == strings[num]
- add counter
- push counter
-set counter to zero
*/

strings = ["ab" , "ab", "abc"]
queries = ["ab", "abc", "bc"]
function matchingStrings(strings, queries) {
    // Write your code here
    let result = [];
    let counter = 0;

    // loop through queries
    for (let x = 0; x < queries.length; x++){
        // loop through strings
        for (let y = 0; y <= strings.length; y++) {
            if (queries[x] == strings[y]) {
                counter++;
                //console.log("queries[x]: " + queries[x] + " strings[y]: " +  strings[y])
            }
            
        }
        
        result.push(counter)
        counter = 0
    }
    console.log(result);
}

matchingStrings(strings, queries)