
const scores = {
  "James": 40,
  "Ann": 80,
  "Joe": 52,
  "Ball": 67,
  "Mick": 89,
  "Ole": 10
};


let totalScore = 0;
for (let score of Object.values(scores)) {
  totalScore += score;
}
const averageScore = totalScore / Object.keys(scores).length;


let highestScoreName = "";
let highestScore = -Infinity;
let lowestScoreName = "";
let lowestScore = Infinity;

for (let [name, score] of Object.entries(scores)) {
  if (score > highestScore) {
      highestScore = score;
      highestScoreName = name;
  }
  if (score < lowestScore) {
      lowestScore = score;
      lowestScoreName = name;
  }
}


console.log("Average score is", averageScore.toFixed(2));


// Start coding here
