'use strict;'

$(function() {

	// Object wich contains questions and answers
	var testQuestions = [
		{
			question: "Чого ти бажаєш?", 
			answers: [["Все", false], ["Нічого", true], ["Щось", false]],
			isPassed: true
		},
		{
			question: "Що ти для цього робиш?", 
			answers: [["Працюю", false], ["Медитую", false], ["Нічого", true]],
			isPassed: true
		},
		{
			question: "Вибери найважливіші речі для духовного розвитку?", 
			answers: [["Гроші", true], ["Болото", false], ["Діаманти", true], ["Книги", false]],
			isPassed: true
		}
	];

	// Save test questions to the local storage
	localStorage.setItem("testQuestions", JSON.stringify(testQuestions));

	// Get test questions from the local storage
	var questions = JSON.parse(localStorage.getItem("testQuestions"));

	// Find the test inner content 
	var testHTML = $("#test").html();

	// Make the test template
	var testContent = tmpl(testHTML, {
		data: questions
	});

	$("body").append(testContent);

	var submitButton = $('[name="done"]');

	submitButton.on("click", function(e) {
		e.preventDefault();
		checkResults();	
		showScore();
		clearData();
		var $inputs = $('[type="checkbox"]');
		$inputs.each(function(index, el) {
			console.log(el.checked);
		});
	});

	function checkResults() {
		var $inputs = $('[type="checkbox"]');

		$inputs.each(function(index, el) {
			var array = el.id.split("_");
			var i = array[1] - 1;
			var j = array[2] - 1;

			// detect whether the question is passed
			if (el.checked !== questions[i].answers[j][1]) {
				questions[i].isPassed = false;
			}
		});
	}

	function showScore() {
		var correctAnswers = 0;

		for (var i = 0; i < questions.length; i++) {
			if (questions[i].isPassed) {
				correctAnswers += 1;
			}
		}

		alert("The result is " + ((correctAnswers/questions.length)*100).toFixed(2));
	}

	function clearData() {
		location.reload();	
	}
});