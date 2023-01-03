let computerGuess;
let userGuess=[];
let userNumberUpdate=document.getElementById('inputBox');
let audio=new Audio('music.wav');

const init=()=>{
	computerGuess=Math.floor(Math.random()*100);
	document.getElementById('newGameButton').style.display="none";
	document.getElementById('gameArea').style.display="none";
};

const startGame=()=>{
	document.getElementById("welcomeScreen").style.display="none";
	document.getElementById("gameArea").style.display="block";
	audio.play();

};

const newGameBegin=()=>{
	// audio.play();
	window.location.reload();
}
const startNewGame=()=>{
	document.getElementById("newGameButton").style.display="inline";
	userNumberUpdate.setAttribute('disabled',true);
}
// const newGame=()=>{
// 	startNewGame();
// }


const compareGuess=()=>{
	const userNumber=Number(document.getElementById("inputBox").value);
	userGuess=[...userGuess,userNumber];
	document.getElementById("guesses").innerHTML=userGuess;
	if(userGuess.length<maxGuess){

	if(computerGuess>userNumber){
		document.getElementById('textOutput').innerHTML="Guess is low";
		userNumberUpdate.value="";
		audio.play();
	}else if(computerGuess<userNumber){
		document.getElementById('textOutput').innerHTML="Guess is high";
		userNumberUpdate.value="";
		audio.play();
	}else{
		document.getElementById('textOutput').innerHTML="Congrats !!! You won";
		userNumberUpdate.value="";
		audio.play();
		startNewGame();
	}

}else{

	if(computerGuess>userNumber){
		document.getElementById('textOutput').innerHTML=`You lost. the correct number was ${computerGuess}`;
		userNumberUpdate.value="";
		audio.play();
		startNewGame();
	}else if(computerGuess<userNumber){
		document.getElementById('textOutput').innerHTML=`You lost. the correct number was ${computerGuess}`;
		userNumberUpdate.value="";
		audio.play();
		startNewGame();
	}else{
		document.getElementById('textOutput').innerHTML=`Congrats !!! You won. the correct number was ${computerGuess}`;
		userNumberUpdate.value="";
		audio.play();
		startNewGame();
	}

	
}
document.getElementById('attempts').innerHTML=userGuess.length;
};

easyMode=()=>{
	startGame();
	maxGuess=10;
};

hardMode=()=>{
	startGame();
	maxGuess=5;
};
