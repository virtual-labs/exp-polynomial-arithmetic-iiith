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
            question: "1. Which of the following points is/are true about Linked List data structure when it is compared with array?", ///// Write the question inside double quotes
            answers: {
                a: " Arrays have better cache locality that can make them better in terms of performance. ", ///// Write the option 1 inside double quotes
                b: "It is easy to insert and delete elements in Linked List ", ///// Write the option 2 inside double quotes
                c: "Random access is not allowed in a typical implementation of Linked Lists", ///// Write the option 2 inside double quotes
                d: "All of the above ", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "d" ///// Write the correct option inside double quotes
        },

    {
      question: "2. The time required to search an element in a linked list of length n is ____.",  ///// Write the question inside double quotes
      answers: {
        a: "O (log n)",                  ///// Write the option 1 inside double quotes
        b: "O (n)",                  ///// Write the option 2 inside double quotes
	c: "O (1)", ///// Write the option 3 inside double quotes
        d: "O(n^2)", ///// Write the option 4 inside double quotes
             },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },

{
      question: "3. Assume that reference of head of following doubly linked list is passed to above function 1 <--> 2 <--> 3 <--> 4 <--> 5 <-->6. What should be the modified linked list after the function call?",  ///// Write the question inside double quotes
      answers: {
        a: "2 <--> 1 <--> 4 <--> 3 <--> 6 <-->5 ",                  ///// Write the option 1 inside double quotes
        b: "5 <--> 4 <--> 3 <--> 2 <--> 1 <-->6",                  ///// Write the option 2 inside double quotes
	c: "6 <--> 5 <--> 4 <--> 3 <--> 2 <--> 1 ", ///// Write the option 3 inside double quotes
        d: "6 <--> 5 <--> 4 <--> 3 <--> 1 <--> 2", ///// Write the option 4 inside double quotes
             },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },
{
      question: "4. Which of the following sorting algorithms can be used to sort a random linked list with minimum time complexity?",  ///// Write the question inside double quotes
      answers: {
        a: "Insertion Sort",                  ///// Write the option 1 inside double quotes
        b: " Quick Sort ",                  ///// Write the option 2 inside double quotes
	c: "Heap Sort", ///// Write the option 3 inside double quotes
        d: "Merge Sort", ///// Write the option 4 inside double quotes
             },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },
{
      question: "5. The concatenation of two lists is to be performed in O(1) time. Which of the following implementations of a list should be used?",  ///// Write the question inside double quotes
      answers: {
        a: "singly linked list ",                  ///// Write the option 1 inside double quotes
        b: "doubly linked list  ",                  ///// Write the option 2 inside double quotes
	c: "circular doubly linked list", ///// Write the option 3 inside double quotes
        d: "array implementation of lists", ///// Write the option 4 inside double quotes
             },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
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
