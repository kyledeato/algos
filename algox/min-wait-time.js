function minimumWaitingTime(queries) {
    // Write your code here.
    queries.sort((a,b)=> {
      return a-b
    })
  
    let time = 0
  
    for (let i = 0 ; i < queries.length; i++) {
      if (i==1) {
        time+=queries[0]
      }
      else if (i == 2){
        console.log(queries[0] + queries[1]);
        time += queries[0] + queries[1]
      } else {
        time += queries[i]
      }
    }
    return time;
  }

  const arr = [3,2,1,2,6]
  console.log(minimumWaitingTime(arr));