var maxSlides = 6;
var count = 1;
var questions = [];

function loadScript() {
// Wait for device to be ready loading everything
	document.addEventListener('deviceready', onDeviceReady, false);
	onDeviceReady();
};

// When device is ready
function onDeviceReady() {
	document.getElementById('no').addEventListener('touchstart', onNavDown, false);
	document.getElementById('no').addEventListener('touchend',  showNextQuestion, false);
	document.getElementById('yes').addEventListener('touchstart', onNavDown, false);
	document.getElementById('yes').addEventListener('touchend',  showNextQuestion, false);
	document.getElementById('start').addEventListener('touchstart',  onStartDown, false);
	document.getElementById('start').addEventListener('touchend',  onStartEnd, false);

	//DESKTOP
	 document.getElementById('no').addEventListener('mousedown', onNavDown, false);
	 document.getElementById('no').addEventListener('mouseup',  showNextQuestion, false);
	 document.getElementById('yes').addEventListener('mousedown', onNavDown, false);
	 document.getElementById('yes').addEventListener('mouseup',  showNextQuestion, false);
	 document.getElementById('start').addEventListener('mousedown',  onStartDown, false);
	 document.getElementById('start').addEventListener('mouseup',  onStartEnd, false);

};

//Show Next Question on click
function showNextQuestion(event){
	if(count == maxSlides) {
		isOnEnd();//If im on the end of the Quiz
		return;//hier stop ik en doe ik niks meer
	}
	count++;//Count increase every click
	var newSection = document.getElementById('vraag'+count);//new question
	var oldSection = document.getElementById('vraag'+count-1);//old question

	//add css classes
	if(oldSection != null)
		oldSection.className = 'hide';
		newSection.className = 'show';

		questions[count-2] = event.target.getAttribute('id');
		storeQuestion();
		onNavUp();
}
	

//Im on the end of the quiz, show the results here
function isOnEnd(){
	console.log('ik ben op het einde beland')
}

function onStartDown(){
	var el =event.target;
	el.className ='down';
}

function onStartEnd(){
	document.getElementById('YesNo').className='show';
	showNextQuestion();
}

//Touch down event
function onNavDown(event){
	console.log(event.target)
	var el = event.target;
	el.className = 'down';
}

function onNavUp(){
	var el = event.target;
	el.className = 'up';
}

function storeQuestion(){
		localStorage.setItem('KijkVerderQuiz', questions);
}


