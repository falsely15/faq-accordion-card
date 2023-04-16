const questionBox = document.querySelectorAll(".box-accordion");
const boldQuestion = document.querySelectorAll(".question");

boldQuestion.forEach(boldQuestion => {
  boldQuestion.addEventListener("click", () => {
    boldQuestion.classList.toggle("bold");
  });
});

questionBox.forEach(questionBox => {
  questionBox.addEventListener("click", () => {
    questionBox.classList.toggle("active");
  });
});




