// Create a Quiz

// Add Event Listener
document.getElementById("btn").addEventListener("click", btnclicked);

// Function
function btnclicked() {
  // Variables
  let txtb1 = document.getElementById("text1").value.toLowerCase();
  let txtb2 = document.getElementById("text2").value.toLowerCase();
  let txtb3 = document.getElementById("text3").value.toLowerCase();
  let txtb4 = document.getElementById("text4").value.toLowerCase();
  let res1 = document.getElementById("result1");
  let res2 = document.getElementById("result2");
  let res3 = document.getElementById("result3");
  let res4 = document.getElementById("result4");
  let result = document.getElementById("finalres");
  let feedback = document.getElementById("feedb");

  // Count Variable
  let numCorrect = 0;
  // Question 1

  if (txtb1 === "alberta" || txtb1 === "ab") {
    res1.innerHTML = "Correct";
    numCorrect++;
  } else {
    res1.innerHTML = "Incorrect";
  }

  // Question 2

  if (
    txtb2 === "newfoundland and Labrador" ||
    txtb2 === "newfoundland" ||
    txtb2 === "labrador" ||
    txtb2 === "nl"
  ) {
    res2.innerHTML = "Correct";
    numCorrect++;
  } else {
    res2.innerHTML = "Incorrect";
  }

  // Question 3

  if (txtb3 === "edmonton" || txtb3 === "ed") {
    res3.innerHTML = "Correct";
    numCorrect++;
  } else {
    res3.innerHTML = "Incorrect";

    // Question 4
  }
  if (txtb4 === "ottawa") {
    res4.innerHTML = "Correct";
    numCorrect++;
  } else {
    res4.innerHTML = "Incorrect";
  }

  // Calculate Percentage
  if (numCorrect === 1) {
    document.getElementById("perc").innerHTML = "25";
  } else if (numCorrect === 2) {
    document.getElementById("perc").innerHTML = "50";
  } else if (numCorrect === 3) {
    document.getElementById("perc").innerHTML = "75";
  } else if (numCorrect === 4) {
    document.getElementById("perc").innerHTML = "100";
  } else {
    document.getElementById("perc").innerHTML = "0";
  }
  // Output Results
  result.innerHTML = numCorrect;
  document.getElementById("perc").innerHTML;
  // Give Quiz Feedback
  if (numCorrect === 1) {
    feedback.innerHTML = "You have a lot to review.";
  } else if (numCorrect === 2) {
    feedback.innerHTML = "You should probably review some more.";
  } else if (numCorrect === 3) {
    feedback.innerHTML = "Pretty good, you know most of your stuff.";
  } else if (numCorrect === 4) {
    feedback.innerHTML = "WOW, you really know your stuff! Keep it up.";
  } else {
    feedback.innerHTML =
      "You really need to rethink some things. Review everything you know.";
  }
}
