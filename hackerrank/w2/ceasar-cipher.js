/* 
if x is - it will stay as -
*/

function caesarCipher(s, k) {
    let alphabets = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    let getIndex = (n) =>{
      if(n < 26){
        return n
      }
      return getIndex(n-26);
    }

    for(let i=0; i < s.length; i++){
      var item;
      if((/[a-z]/).test(s[i])) {
        let index = alphabets.indexOf(s[i])+k;
        if(index > 25){
          index = getIndex(index);
        }
        item = alphabets[index]
      }
      else if((/[A-Z]/).test(s[i])){
        let index = alphabets.indexOf(s[i].toLowerCase())+k;
        if(index > 25){
          index = getIndex(index);
        }
        let x = alphabets[index];
        item = x?.toUpperCase();
      }
      else{
        item = s[i];
      }
      result += item;
    }
    console.log(result);
    return result;
}


console.log(caesarCipher("H_Z", 1));