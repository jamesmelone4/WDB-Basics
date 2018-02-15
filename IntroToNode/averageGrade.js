var scores = [90, 98, 89, 100, 100, 86, 94]
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49]

function averageGrade(arr) {
  var sum = arr.reduce((prev,curr) => curr += prev);
  var avg = Math.round(sum / arr.length);
  console.log(avg);
  }
  
averageGrade(scores);
averageGrade(scores2);