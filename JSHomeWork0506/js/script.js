// Find timer in DOM
var timerMiliseconds = document.body.querySelector("#timerMiliseconds");
var timerSeconds = document.body.querySelector("#timerSeconds");
var timerMinutes = document.body.querySelector("#timerMinutes");
var timerHours = document.body.querySelector("#timerHours");

// Find buttons in DOM
var timerStarterButton = document.body.querySelector("#timerStarter");
var timerSplitButton = document.body.querySelector("#timerSplit");
var timerClearButton = document.body.querySelector("#timerClear");

// Find split result in DOM
var splitTimeResult = document.body.querySelector("#splitTimeResult");

var ms = 0, s = 0, m = 0, h = 0, splitCounter = 0;
var timer;
var active = false;

function startTimer() {
	timer = setInterval(function() {
		ms += 10;

		if (ms > 999) {
			ms = 0;
			s++;
		}

		if (s > 59) {
			s = 0;
			m++;
		}

		if (m > 59) {
			m = 0;
			h++;
		}

		showTime();
	}, 10);

	timerStarterButton.setAttribute("value", "Pause");
}

function stopTimer() {
	clearInterval(timer);

	timerStarterButton.setAttribute("value", "Continue");
}

function starter() {
	// if timer is active
	if (active) {
		stopTimer();
		active = false;

		timerStarterButton.classList.remove("btn-warning");
		timerStarterButton.classList.add("btn-success");
	// if timer is non-active
	} else {
		startTimer();
		timerStarterButton.classList.remove("btn-success");
		timerStarterButton.classList.add("btn-warning");
		active = true;
	}
}

function splitTime() {
	var splitTimeResultNew = document.createElement("div");
	splitTimeResultNew.innerHTML = ++splitCounter + ". " + timerHours.innerHTML + ":" + timerMinutes.innerHTML + ":" 
								   + timerSeconds.innerHTML + ":" + timerMiliseconds.innerHTML;
	splitTimeResult.prepend(splitTimeResultNew);
}

function clear() {
	ms = 0, s = 0, m = 0, h = 0;
	showTime();
	if (!active) {
		timerStarterButton.setAttribute("value", "Start");
	}

	if (splitTimeResult.hasChildNodes()) {
		while (splitTimeResult.firstChild) {
			splitTimeResult.removeChild(splitTimeResult.firstChild);
		}
		splitCounter = 0;
	}
}

function showTime() {
	if (ms < 10) {
		timerMiliseconds.innerHTML = "00" + ms;		
	} else if (ms < 100) {
		timerMiliseconds.innerHTML = "0" + ms;
	} else {
		timerMiliseconds.innerHTML = ms;
	}
	timerSeconds.innerHTML = s < 10 ? "0" + s : s;
	timerMinutes.innerHTML = m < 10 ? "0" + m : m;
	timerHours.innerHTML = h < 10 ? "0" + h : h;
} 



timerStarterButton.addEventListener("click", starter);
timerSplitButton.addEventListener("click", splitTime);
timerClearButton.addEventListener("click", clear);