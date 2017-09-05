var dom = {
	createMyElement: function (element) {
		var element = document.createElement(element);
		return element;
	},

	addClassToMyElement: function (element, className) {
		element.classList.add(className);
	},

	addContentToMyElement: function (element, content) {
		element.innerHTML = content;
	},

	addMyElement: function (parent, element, nextSibling) {
		if (parent.hasChildNodes()) {
			this.insertMyElement(parent, element, nextSibling);
		} else {
			this.appendMyElement(parent, element);
		}
	},

	appendMyElement: function (parent, element) {
		parent.append(element);
	},

	insertMyElement: function (parent, element, nextSibling) {
		parent.insertBefore(element, nextSibling);
	},

	createDomElement: function (element, className, content, parent, nextSibling) {
		var element = dom.createMyElement(element);
		dom.addClassToMyElement(element, className);
		dom.addContentToMyElement(element, content);
		dom.addMyElement(parent, element, nextSibling);
		return element;
	}
}

var wrapper = dom.createDomElement("div", "wrapper", "", document.body, document.body.lastChild);
wrapper.classList.add("center-block");
var maintitle = dom.createDomElement("h2", "title", "Тест по программированию", document.querySelector(".wrapper"));
maintitle.classList.add("text-center");
var form = dom.createDomElement("form", "test-form", "", document.querySelector(".wrapper"));
form.setAttribute("action", "testForm");
var test = dom.createDomElement("ul", "test", "", document.querySelector(".test-form"));
test.classList.add("list-group");

// Creates li elements
for (var i = 0; i < 3; i++) {
	var testElement = dom.createDomElement("li", "test_element", "", document.querySelector(".test"));
	testElement.classList.add("list-group-item");
}

// Creates each question
for (var i = 0; i < 3; i++) {
	// var parent = document.querySelectorAll(".test_question-container")[i];
	var question = dom.createDomElement("h4", "test_quetion", "Вопрос №" + (i + 1), document.querySelectorAll(".test_element")[i]);
}

// Creates container for each question 
var questionContainerArray = [];
for (var i = 0; i < 3; i++) {
	var questionContainerArraySmall = [];
	for (var j = 0; j < 3; j++) {
		var parent = document.querySelectorAll(".test_element")[i];
		var questionContainer = dom.createDomElement("div", "test_question-container", "", parent);
		questionContainerArraySmall.push(questionContainer);
	}
	questionContainerArray.push(questionContainerArraySmall);
}

// Creates answer for each question
for (var i = 0; i < 3; i++) {
	for (var j = 0; j < 3; j++) {
		var parent = questionContainerArray[i][j];
		var radioAnswer = dom.createDomElement("input", "test_answer-radio", "", parent);
		var textAnswer = dom.createDomElement("label", "test_answer-text", "Вариант ответа №" + (j + 1), parent);
		radioAnswer.setAttribute("type", "radio");
		radioAnswer.setAttribute("id", "answer" + (j + 1));
		radioAnswer.setAttribute("name", "question" + (i+1));
	}
}

// Creates button for the test
var buttonAnswer = dom.createDomElement("input", "test_button", "", document.querySelector(".test"));
buttonAnswer.setAttribute("type", "submit");
buttonAnswer.setAttribute("value", "Проверить мои результаты");
buttonAnswer.classList.add("btn-info");
buttonAnswer.classList.add("center-block");

