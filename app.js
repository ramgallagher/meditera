var playBtn = document.querySelector('.play-btn');
var container = document.querySelector('.btn-container');
container.addEventListener('click', handleClick);

var mainPage = document.getElementById('mainPage');
var yourNameSection = document.getElementById('yourName');
var welcomeSection = document.getElementById('welcome');
var soundsSection = document.getElementById('sounds');
var startButton = document.getElementById('start');
var userName = document.getElementById('userName');
var outputName = document.getElementById('output-name');
var submitButton = document.querySelector('.btn-submit');
var errorMessage = document.getElementById('error');
var continueButton = document.getElementById('continue-button');



yourNameSection.style.display = "none";
welcomeSection.style.display = "none";
soundsSection.style.display = "none";


startButton.addEventListener('click', () => {
    mainPage.style.display = "none";
    yourNameSection.style.display = "block";
});


submitButton.addEventListener('click', () => {
    yourNameSection.style.display = "none";
    if (!userName.checkValidity()) {
        errorMessage.innerHTML = userName.validationMessage;
    } else {
        outputName.innerHTML = userName.value;
    }
    welcomeSection.style.display = "block";


});

continueButton.addEventListener('click', () => {
    welcomeSection.style.display = "none";
    soundsSection.style.display = "block";
})






function handleClick(e) {
    playBtn.classList.toggle('playing');
}