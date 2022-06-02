// s1 = 'ab#c'
// t1 = 'ab#c'

// expect true
// deletes backspace and the one before it then compare both strings
function backspaceStringCompare(S, T) {
    let newS = [];
    let newT = [];
    let i = 0;
    while (i < S.length || i < T.length) {
        if (S[i] !== "#") {
            newS.push(S[i]);
        } else {
            newS.pop();
        }
        if (T[i] !== "#") {
            newT.push(T[i])
        } else {
            newT.pop();
        }
        i++;
    }
    console.log(newS, newT);
    if(JSON.stringify(newS) === JSON.stringify(newT)) {
        return true;
    } else {
        return false;
    }
}

console.log(backspaceStringCompare(S1, T1))
console.log(backspaceStringCompare(S2, T2))
console.log(backspaceStringCompare(S3, T3))
console.log(backspaceStringCompare(S4, T4))



