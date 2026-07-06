let marks = parseInt(prompt("Enter marks:"), 10);

if (Number.isNaN(marks)) {
  let grade = "Invalid marks";
  console.log("Grade: " + grade);
  alert("Grade: " + grade);
} else {
  let grade;

  if (marks >= 90) {
    grade = "A";
  } else if (marks >= 75) {
    grade = "B";
  } else if (marks >= 60) {
    grade = "C";}}