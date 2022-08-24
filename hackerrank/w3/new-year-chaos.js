/*
any person can bribe directly infront of them to to swap
one person can bride at most two others
find number of bribes and if its more than two people print "Too chaotic"

=============
arr least to greatest
compare each element 

double for loop to compare
if current is greater than next
    - counter ++
    - chaotic ++
    -if chaotic is greater than 2 return too chaotic

*/

function minimumBribes(q) {
    let num = 0;
    let chaotic = false;
    
    for (let i = q.length - 1; i >= 0; i--) {
      if (q[i] - i > 3) chaotic = true;
      
      for (let j = q[i] - 2; j < i; j++) {
        if (q[j] > q[i]) num++;
      }
    }
    if (chaotic) console.log("Too chaotic");
    else console.log(num);
  }
let q = [1,2,5,3,7,8,6,4]
minimumBribes(q)



/*
my old solution -- works but timesout on testcases
function minimumBribes(q) {
    // Write your code here
    let counter = 0

    for (let x = 0; x < q.length; x++) {
        let chaotic = 0
        for (let y = x + 1; y <= q.length; y++) {
            if (q[x] > q[y]) {
                counter++
                chaotic++
                if (chaotic > 2) {
                    console.log("Too chaotic")
                    return
                }
            } 
        }
    }
    console.log(counter)
} */