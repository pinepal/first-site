let myImage=document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/logo.png') {
        myImage.setAttribute('src', 'images/pa.jpg');
    } else {
        myImage.setAttribute('src', 'images/logo.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Dota is shit, ' + myName;
}
if(!localStorage.getItem('name)')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Dota is shit, ' + storedName;
}
myButton.onclick = function() {
    setUserName();
}