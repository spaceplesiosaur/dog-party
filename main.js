// Dog Name Button
var textBox = document.querySelector ("#nameForm");

var siteName = document.querySelector(".bolder");

var dogNameButton = document.querySelector("#dogButton");

function changeSiteName() {
  siteName.innerText = textBox.value;
}

dogNameButton.addEventListener("click", changeSiteName);


// Disappearing text column1of3

var howButtonDisappear = document.querySelector("#howButton");

var dogDescriptionOne = document.querySelector("#descrip1");

function disappearButton() {

  dogDescriptionOne.classList.toggle("hidden");
}

howButtonDisappear.addEventListener('click', disappearButton);

// Disappearing Text column2of3

var whatButtonDisappear = document.querySelector("#whatButton");

var dogDescriptionTwo = document.querySelector("#descrip2");

function disappearButtonTwo() {

  dogDescriptionTwo.classList.toggle("hidden");
}

whatButtonDisappear.addEventListener('click', disappearButtonTwo);

// Disappearing Text column3of3

var factsButtonDisappear = document.querySelector("#factsButton");

var dogDescriptionThree = document.querySelector("#descrip3");

function disappearButtonThree() {

  dogDescriptionThree.classList.toggle("hidden");
}

factsButtonDisappear.addEventListener('click', disappearButtonThree);


// Tooltips

// How Tooltip

var howTooltipVar = document.querySelector("#howTooltip");

var howNavItem = document.querySelector("#how-left");

function appearHowTooltip() {

  howTooltipVar.classList.remove("hidden");
}

function disappearHowTooltip() {

  howTooltipVar.classList.add("hidden");
}

howNavItem.addEventListener('mouseenter', appearHowTooltip);
howNavItem.addEventListener('mouseleave', disappearHowTooltip);

// What Tooltip

var whatTooltipVar = document.querySelector("#whatTooltip");

var whatNavItem = document.querySelector("#what-middle");

function appearWhatTooltip() {

  whatTooltipVar.classList.remove("hidden");
}

function disappearWhatTooltip() {

  whatTooltipVar.classList.add("hidden");
}

whatNavItem.addEventListener('mouseenter', appearWhatTooltip);
whatNavItem.addEventListener('mouseleave', disappearWhatTooltip);

// Facts Tooltip

var factsTooltipVar = document.querySelector("#factsTooltip");

var factsNavItem = document.querySelector("#facts-right");

function appearFactsTooltip() {

  factsTooltipVar.classList.remove("hidden");
}

function disappearFactsTooltip() {

  factsTooltipVar.classList.add("hidden");
}

factsNavItem.addEventListener('mouseenter', appearFactsTooltip);
factsNavItem.addEventListener('mouseleave', disappearFactsTooltip);

// Input Box
