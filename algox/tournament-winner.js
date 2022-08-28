// function tournamentWinner(competitions, results) {
//     // Write your code here.
//     let teams = {}
  
//     for (let i = 0; i < competitions.length; i++) {
//       //switch 0 as home and 1 as away
//       let x = 0
//       if (results[i] === 0) {
//         x = 1
//       } else {
//         x = 0
//       }
//       let winner = competitions[i][x]
      
//       // adds to obj if not in or +3 
//       if (teams[winner]) {
//           teams[winner] += 3
//         } else {
//         teams[winner] = 3
//       }
//     }
//     // need to understand this
//     return Object.keys(teams).reduce((a, b) => teams[a] > teams[b] ? a : b);;
//   }
  
let comp = [
    ["HTML", "C#"],
      ["C#", "Python"],
      ["Python", "HTML"]
]
let results = [0, 0, 1]

console.log(tournamentWinner(comp, results));
  

function tournamentWinner(competitions, results) {
    // Write your code here.
    let teams = {}
    let bestTeam = {score: 0, name: ''}
    for (let i = 0; i < competitions.length; i++) {
      //switch 0 as home and 1 as away
      let x = 0
      if (results[i] === 0) {
        x = 1
      } else {
        x = 0
      }
      let winner = competitions[i][x]
      
      if (teams[winner]) {
          teams[winner] += 3
          
        } else {
        teams[winner] = 3
      }
      if (bestTeam.score < teams[winner]){
        bestTeam.name = winner
        bestTeam.score = teams[winner]
      }
           
    }
  
    return bestTeam.name
  }