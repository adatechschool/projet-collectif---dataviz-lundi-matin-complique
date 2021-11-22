var myQuestions = [
	{
		question: " What is the strongest beer alcohol percentage in the world? ",
		answers: {
			a: '40.7%',
			b: '55.5%',
			c: '67.5%'
		},
		correctAnswer: 'c'
	},
    {
		question: " Which country has the highest minimum drinking age in the world? ",
		answers: {
			a: 'USA',
			b: 'France',
			c: 'Germany'
		},
		correctAnswer: 'a'
	},
    {
		question: " What is a nabuchodonosor? ",
		answers: {
			a: 'A dinosaur',
			b: 'A very very old person',
			c: 'A huge bottle of alcool'
		},
		correctAnswer: 'c'
	},
    {
		question: " How much does the nabuchodonosor contain? ",
		answers: {
			a: 'The equivalent of 5 bottles of champaign',
			b: 'The equivalent of 10 bottles of champaign',
			c: 'The equivalent of 20 bottles of champaign'
		},
		correctAnswer: 'c'
	},
    {
		question: " Which country allows a five-year-old kid to drink alcohol? ",
		answers: {
			a: 'USA',
			b: 'Russia',
			c: 'UK'
		},
		correctAnswer: 'c'
	},
    {
		question: " How many kilos of cacahuètes are produced every second in the world? ",
		answers: {
			a: '550',
			b: '1820',
			c: '2200'
		},
		correctAnswer: 'b'
	},
    {
		question: " In which state is the Happy Hour still illegal? ",
		answers: {
			a: 'Indiana',
			b: 'Illinois',
			c: 'New York'
		},
		correctAnswer: 'a'
	},
    {
		question: " How many grams of mint do you need to make 1L of Get27? ",
		answers: {
			a: '50',
			b: '100',
			c: '150'
		},
		correctAnswer: 'b'
	},
    {
		question: " What is the chemical formula for alcohol? ",
		answers: {
			a: 'C2H60',
			b: 'C2H2O',
			c: 'H2CO3'
		},
		correctAnswer: 'a'
	},
    {
		question: " Is it true that pistachios are good for your heart? ",
		answers: {
			a: 'WTF no',
			b: 'HELL yes'
		},
		correctAnswer: 'b'
	},
    {
		question: " People with which color of eyes stand have a greater alcohol tolerance? ",
		answers: {
			a: 'Green',
			b: 'Blue',
			c: 'Brown'
		},
		correctAnswer: 'b'
	},
    {
		question: " What is the % of French people having at least 1 apéro per week? ",
		answers: {
			a: '33%',
			b: '47%',
			c: '65%'
		},
		correctAnswer: 'b'
	},
    {
		question: " Which is the country where people consume the most alcohol per year? ",
		answers: {
			a: 'Latvia',
			b: 'Ireland',
			c: 'Germany'
		},
		correctAnswer: 'a'
	},
    {
		question: " True or false: the ice melting does not make the liquid overflow from the glass ",
		answers: {
			a: 'True, this is science !',
			b: 'False, it would be sorcery !'
		},
		correctAnswer: 'a'
	},
	{
		question: " How long does it take for the brain to start reacting to alcohol? ",
		answers: {
			a: '2 minutes',
			b: '6 minutes',
			c: '14 minutes'
		},
		correctAnswer: 'b'
	}
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// we'll need a place to store the output and the answer choices
		var output = [];
		var answers;

		// for each question...
		for(var i=0; i<questions.length; i++){
			
			// first reset the list of answers
			answers = [];

			// for each available answer...
			for(letter in questions[i].answers){

				// ...add an html radio button
				answers.push(
					'<label>'
						+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
						+ letter + ': '
						+ questions[i].answers[letter]
					+ '</label>'
				);
			}

			// add this question and its answers to the output
			output.push(
				'<div class="question">' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
		}

		// finally combine our output list into one string of html and put it on the page
		quizContainer.innerHTML = output.join('');
	}


	function showResults(questions, quizContainer, resultsContainer){
		
		// gather answer containers from our quiz
		var answerContainers = quizContainer.querySelectorAll('.answers');
		
		// keep track of user's answers
		var userAnswer = '';
		var numCorrect = 0;
		
		// for each question...
		for(var i=0; i<questions.length; i++){

			// find selected answer
			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			
			// if answer is correct
			if(userAnswer===questions[i].correctAnswer){
				// add to the number of correct answers
				numCorrect++;
				
				// color the answers green
				answerContainers[i].style.color = 'lightgreen';
			}
			// if answer is wrong or blank
			else{
				// color the answers red
				answerContainers[i].style.color = 'red';
			}
		}

		// show number of correct answers out of total
		resultsContainer.innerHTML = numCorrect + ' / ' + questions.length;
	}

	// show questions right away
	showQuestions(questions, quizContainer);
	
	// on submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}

}