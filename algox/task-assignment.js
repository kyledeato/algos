function taskAssignment(k, tasks) {
    // Write your code here.
    const sortedTasks = tasks.map((value, index) => ({value, index}));
    sortedTasks.sort((a,b) => a.value - b.value);
    let arr = [];
   
  
    let start = 0;
    let end = sortedTasks.length - 1;
  
    while (start <= end) {
      arr.push([sortedTasks[start].index, sortedTasks[end].index]);
      start++;
      end--;
    }
    
    
    return arr;
  }
  
  //nlogn since sort first
  // Do not edit the line below.
  exports.taskAssignment = taskAssignment;
  
   