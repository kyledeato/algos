/*

-louise picks number if its power of 2
- if number is power of 2 they divide it by 2
    - if not it gets reduced to the next lower number that is power of 2
-whoever redueces it by one wins game

1. var for louise and richard true and false respectively
2. check if 132 is power by two && if its power of 2 === 1 person wins
3 if not subtract n by 2
4 check again if power by two
5. if yes subtract next power by two number with original number and give it to other person (louise = false, rich = true)
6. if number if 1 check louise and rich who has true and delcare winner

edge case:
if initially number is 1 then richard wins

*/
function counterGame(n) {
    let bits = (n-1).toString(2).split("1").length-1
    
    if (bits % 2 === 1 ) {
        return 'Louise'
    } else {
        return 'Richard'
    }
}

console.log(counterGame(6));