// Buttons
var playBtn = document.querySelector('.play-btn');
var container = document.querySelector('.btn-container');
container.addEventListener('click', handleClick);

var backgroundImage = document.querySelector('.image-container');


// Sections handlers
var mainPage = document.getElementById('mainPage');
var yourNameSection = document.getElementById('yourName');
var welcomeSection = document.getElementById('welcome');
var soundsSection = document.getElementById('sounds');
var startButton = document.getElementById('start');

//input handlers
var userName = document.getElementById('userName');
var outputName = document.getElementById('output-name');
var submitButton = document.querySelector('.btn-submit');
var errorMessage = document.getElementById('error');
var continueButton = document.getElementById('continue-button');


// Sounds hanlders
const song = document.querySelector(".song");
const sounds = document.querySelectorAll('.sound-picker button');



const btnSun = document.querySelector('.btn-sun');
const btnRain = document.querySelector('.btn-rain');


yourNameSection.style.display = "none";
welcomeSection.style.display = "none";
soundsSection.style.display = "none";


// section change 

startButton.addEventListener('click', () => {
    mainPage.style.display = "none";
    yourNameSection.style.display = "block";
});

continueButton.addEventListener('click', () => {
    welcomeSection.style.display = "none";
    soundsSection.style.display = "block";
});


//submit name function

submitButton.addEventListener('click', () => {
    yourNameSection.style.display = "none";
    if (!userName.checkValidity()) {
        errorMessage.innerHTML = userName.validationMessage;
    } else {
        outputName.innerHTML = userName.value;
    }
    welcomeSection.style.display = "block";

});

userName.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.querySelector('.btn-submit').click();
    }
});




sounds.forEach(sound => {
    sound.addEventListener("click", function() {
        song.src = this.getAttribute("data-sound");
        checkPlaying(song);
    });
});



//play sound
playBtn.addEventListener('click', () => {
    checkPlaying(song);


});

//stop and play sounds
const checkPlaying = song => {
    if (song.paused) {
        playBtn.classList.add('playing');
        song.play();


    } else {
        playBtn.classList.remove('playing');
        song.pause();
    }
};





function handleClick(e) {

}