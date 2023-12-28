
document.querySelectorAll("button")[0].addEventListener("click", handleclick);
function handleclick() {
    var audio = new Audio('./sounds/crash.mp3');
    audio.play();
    this.style.color = "white";
}
document.querySelectorAll("button")[1].addEventListener("click", handleclick1);
function handleclick1() {
    var audio = new Audio('./sounds/kick-bass.mp3');
    audio.play();
    this.style.color = "white";
}
document.querySelectorAll("button")[2].addEventListener("click", handleclick2);
function handleclick2() {
    var audio = new Audio('./sounds/snare.mp3');
    audio.play();
    this.style.color = "white";
}
document.querySelectorAll("button")[3].addEventListener("click", handleclick3);
function handleclick3() {
    var audio = new Audio('./sounds/tom-1.mp3');
    audio.play();
    this.style.color = "white";
}
document.querySelectorAll("button")[4].addEventListener("click", handleclick4);
function handleclick4() {
    var audio = new Audio('./sounds/tom-2.mp3');
    audio.play();
    this.style.color = "white";
}
document.querySelectorAll("button")[5].addEventListener("click", handleclick5);
function handleclick5() {
    var audio = new Audio('./sounds/tom-3.mp3');
    audio.play();
    this.style.color = "white";
}
document.querySelectorAll("button")[6].addEventListener("click", handleclick6);
function handleclick6() {
    var audio = new Audio('./sounds/tom-4.mp3');
    audio.play();
    this.style.color = "white";
}
for (let i = 0; i < 7; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var buttoninnerHTML = this.innerHTML;
        makeSound(buttoninnerHTML);
        buttonAnimation(buttoninnerHTML);

    })
}
document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);

});
function makeSound(key) {
    switch (key) {
        case "w": var crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;
        case "a": var kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();
            break;
        case "s": var snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;
        case "d": var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;

        case "j": var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;
        case "k": var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;
        case "l": var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;

    }
}
function buttonAnimation(currentKey) {
    var activebutton = document.querySelector("." + currentKey).classList.add("pressed");
    setTimeout(function () {
        document.querySelector("." + currentKey).classList.remove("pressed");
    }, 100);
}


