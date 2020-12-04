console.log('Hello World!!!');

const mySpecialButton = document.getElementById('my-button');
const myName = document.getElementById('my-name');
const myInput = document.getElementById('my-input');
const itsOrange = document.getElementById('change-to-orange');
const itsGreen = document.getElementById('change-to-green');
const itsYellow = document.getElementById('change-to-yellow');
const itsBack = document.getElementById('take-it-back');
const changeColor = document.getElementById('change-my-color');
const colors = {
    orange: '#F4962D',
    green: '#799370',
    yellow: '#AF9734',  
    pink:  '#FFC0CB',   
};


mySpecialButton.addEventListener('click', () => {
    myName.textContent = myInput.value
    myInput.value = ''
 });

itsOrange.addEventListener ('click', () => {
    changeColor.style.background = colors.orange
});    
itsGreen.addEventListener ('click', () => {
    changeColor.style.background = colors.green
});
itsYellow.addEventListener ('click', () => {
    changeColor.style.background = colors.yellow
});
itsBack.addEventListener ('click', () => {
    changeColor.style.background = colors.pink
});