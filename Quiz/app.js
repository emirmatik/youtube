const nqInput = document.getElementById("add-question");
const nqOptionsDiv = document.querySelector(".nq-options");
const nqOptions = document.querySelectorAll(".nq-option");
const answer = document.getElementById("answer");
const answerOptions = answer.querySelectorAll("option");
const form = document.querySelector("form");
const questionsDiv = document.querySelector(".questions");
const getResults = document.getElementById("finish-quiz");

const allQuestions = [];

nqInput.addEventListener("input", (e) => {
   const val = e.target.value;

   if (val.trim() !== "") {
      nqOptionsDiv.style.transform = "translateY(0)";
   } else {
      nqOptionsDiv.style.transform = "translateY(-120%)";
   }
})

Array.from(nqOptions).forEach((option, index) => option.addEventListener("input", () => {
   Array.from(answerOptions)[index].textContent = option.value;
   Array.from(answerOptions)[index].value = option.value;
}))

class Question {
   // title = "";
   // options = [];
   answer = "";

   constructor(givenTitle, givenOptions, givenAnswer) {
      // this.title = givenTitle;
      // this.options = givenOptions;
      this.answer = givenAnswer;
   }
}

form.addEventListener("submit", (e) => {
   e.preventDefault();
   let hasError = false;

   Array.from(nqOptions).forEach(option => {
      if (option.value.trim() === "") {
         option.style.borderColor = "tomato";
         hasError = true;
      } else {
         option.style.borderColor = "lightgray";
      }
   })

   if (hasError) return;
   
   // basarili, her sikka bir deger girmisim new Question(... ... ... ..)

   const optionsArray = [];

   Array.from(nqOptions).forEach(option => optionsArray.push(option.value));

   const newQuestion = new Question(nqInput.value, optionsArray, answer.value);

   renderQuestion(newQuestion);
   allQuestions.push(newQuestion);
})

const renderQuestion = question => {
   const questionDiv = document.createElement("div");
   questionDiv.classList.add("question");
   const randomNumber = Math.random() * 999;

   questionDiv.innerHTML = `
      <div class="question-title">${question.title}</div>
      <div class="question-option">
         <input type="radio" name="${question.title + randomNumber}" />
         <div class="question-option-text">${question.options[0]}</div>
      </div>
      <div class="question-option">
         <input type="radio" name="${question.title + randomNumber}" />
         <div class="question-option-text">${question.options[1]}</div>
      </div>
      <div class="question-option">
         <input type="radio" name="${question.title + randomNumber}" />
         <div class="question-option-text">${question.options[2]}</div>
      </div>
      <div class="question-option">
         <input type="radio" name="${question.title + randomNumber}" />
         <div class="question-option-text">${question.options[3]}</div>
      </div>
   `

   questionsDiv.appendChild(questionDiv);
}

getResults.addEventListener("click", () => {

   const allQuestionDivs = document.querySelectorAll(".question");

   Array.from(allQuestionDivs).forEach((question, index) => {
      question.style.pointerEvents = "none";
      const questionOptions = Array.from(question.querySelectorAll(".question-option input"));
      const userSelectedInput = questionOptions.find(option => option.checked);
      
      if (!userSelectedInput) {
         question.style.border = "3px purple solid"
         return;
      }
      
      const selectedOption = userSelectedInput.nextElementSibling;

      console.log(allQuestions);

      console.log(index);

      const exactAnswer = allQuestions[index].answer;

      if (selectedOption.textContent === exactAnswer) {
         selectedOption.style.backgroundColor = "green";

      } else {
         const actualOption = Array.from(question.querySelectorAll(".question-option div")).find(option => option.textContent === exactAnswer);
         actualOption.style.backgroundColor = "green";
         selectedOption.style.backgroundColor = "tomato";
      }

   })



})