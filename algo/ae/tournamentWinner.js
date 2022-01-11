/**
 * AlgoExpert: Given the competitions and results; return the winner
 * Level: Easy
 * @param {*} competitions 
 * @param {*} results 
 * @returns 
 */

const tournamentWinner = (competitions, results) => {
  let winnerScores = {};
  for(let i = 0; i < competitions.length; i+= 1){
  const winnerIdentifier = competitions[i][(results[i] === 0 ? 1 : 0)];
  if(!winnerScores.hasOwnProperty(winnerIdentifier)){
    winnerScores[winnerIdentifier] = 0;
  }
  winnerScores[winnerIdentifier] = winnerScores[winnerIdentifier] + 3;

  }
  const sortableWinners = Object.entries(winnerScores);
  sortableWinners.sort((a,b) => b[1] - a[1]);

  return sortableWinners[0][0];
}

const competitions = [
  ['HTML', 'C#'],
  ['C#', 'Python'],
  ['Python', 'HTML'],
];

const results = [0,0,1];

console.log("Result: ", tournamentWinner(competitions, results));