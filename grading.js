const getGrade = (marks) => {
  if (marks >= 80) console.log("A+");
  else if (marks >= 70) console.log("A");
  else if (marks >= 60) console.log("A-");
  else if (marks >= 50) console.log("B");
  else if (marks >= 40) console.log("B-");
  else if (marks >= 33) console.log("C");
  else console.log("F");
};


getGrade(40)