/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
function buildQuiz() {
// we'll need a place to store the HTML output
const output = [];

// for each question...
myQuestions.forEach((currentQuestion, questionNumber) => {
// we'll want to store the list of answer choices
const answers = [];

// and for each available answer...
for (letter in currentQuestion.answers) {
// ...add an HTML radio button
answers.push(
`<label>
<input type="radio" name="question${questionNumber}" value="${letter}">
${letter} :
${currentQuestion.answers[letter]}
</label>`
);
}

// add this question and its answers to the output
output.push(
`<div class="question"> ${currentQuestion.question} </div>
<div class="answers"> ${answers.join("")} </div>`
);
});

// finally combine our output list into one string of HTML and put it on the page
quizContainer.innerHTML = output.join("");
}

function showResults() {
// gather answer containers from our quiz
const answerContainers = quizContainer.querySelectorAll(".answers");
answerContainers.forEach(e => e.style.color = "black");

// keep track of user's answers
let numCorrect = 0;

// for each question...
myQuestions.forEach((currentQuestion, questionNumber) => {
// find selected answer
const answerContainer = answerContainers[questionNumber];
const selector = `input[name=question${questionNumber}]:checked`;
const userAnswer = (answerContainer.querySelector(selector) || {}).value;

// if answer is correct
if (userAnswer === currentQuestion.correctAnswer) {
// add to the number of correct answers
numCorrect++;

// color the answers green
//answerContainers[questionNumber].style.color = "lightgreen";
} else {
// if answer is wrong or blank
// color the answers red
answerContainers[questionNumber].style.color = "red";
}
});

// show number of correct answers out of total
resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


const myQuestions = [{
question: "1. Under regular addition of polynomials, the sum would contain a term 2x^6. This term becomes ____ and is dropped when the answer is reduced modulo 2. ", ///// Write the question inside double quotes
answers: {
a: "3x^6", ///// Write the option 1 inside double quotes
b: "0x^6", ///// Write the option 2 inside double quotes
c: "Doesn't change ", ///// Write the option 3 inside double quotes

},
correctAnswer: "b" ///// Write the correct option inside double quotes
},

{
question: "2. Each term of the polynomial will be pointing to the other term and the last term will be pointing to ____.",  ///// Write the question inside double quotes
answers: {
a: " Last coefficient",                  ///// Write the option 1 inside double quotes
b: " First coefficient ",                  ///// Write the option 2 inside double quotes
c: " Null  ", ///// Write the option 3 inside double quotes
d: "The number itself", ///// Write the option 4 inside double quotes
},
correctAnswer: "c"                ///// Write the correct option inside double quotes
},

{
question: "3. What are the advantages of using a linked list rather than array? ",  ///// Write the question inside double quotes
answers: {
a: " List elements can be easily inserted or removed",                  ///// Write the option 1 inside double quotes
b: "It is easy compared to array",                  ///// Write the option 2 inside double quotes
c: " Both A and B ", ///// Write the option 3 inside double quotes
d: "None of the above", ///// Write the option 4 inside double quotes
},
correctAnswer: "a"                ///// Write the correct option inside double quotes
},

{
question: "4. Select any one of the advantage of using Arrays for performing polynomial arithmetic operations? ",  ///// Write the question inside double quotes
answers: {
a: " It is straight forward process ",                  ///// Write the option 1 inside double quotes
b: "Comparing the exponents is easy process ",                  ///// Write the option 2 inside double quotes
c: " Array representation assumes that the exponents of the given expression are arranged from 0 to the infinity", ///// Write the option 3 inside double quotes
d: "None of the above ", ///// Write the option 4 inside double quotes

},
correctAnswer: "a"                ///// Write the correct option inside double quotes
},



];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
