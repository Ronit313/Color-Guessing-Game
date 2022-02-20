const header = document.getElementsByClassName("header");
const requiredColor = document.getElementById("requiredColor");
const reset = document.getElementById("reset");
const result = document.getElementById("message");
const easy = document.getElementById("easybtn");
const hard = document.getElementById("hardbtn");
let button = document.getElementsByClassName("button");
let color = [];
let numSqaure = 6;
requiredColor.style.fontSize = '55px';


console.log(reset);

generateRandomColors(numSqaure);
setupSquare(numSqaure);

function randomColor(){
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);

    return "rgb(" + r +  "," + g + "," + b + ")";
}

function setupSquare(numSqaure){
    
    let ans = color[Math.floor(Math.random()*(numSqaure-1))];
    requiredColor.innerText = ans;
    for(let i = 0; i < numSqaure; i++){
        button[i].addEventListener('click', () => {
            if (color[i] == ans) {
                result.innerText = "Correct";
                result.style.color = "green";
                for (let j = 0; j < numSqaure; j++) {
                    button[j].style.backgroundColor = ans;
                }
                header[0].style.backgroundColor = ans;
                reset.innerText = "Play Again?"
            }
            else{
                result.innerText = "Try Again";
                result.style.color = "red";
                button[i].style.backgroundColor = "black";
            }
        })
    }
}

function generateRandomColors(numSqaure){
    for (let i = 0; i < numSqaure; i++) {
        color[i] = randomColor();
        button[i].style.backgroundColor = color[i];
    }
}

reset.addEventListener('click', () => {
    header[0].style.backgroundColor = "rgb(212, 226, 13)";
    result.innerText = '';
    reset.innerText = "New Color";
    generateRandomColors(numSqaure)
    setupSquare(numSqaure);
})

easy.addEventListener('click', () => {
    header[0].style.backgroundColor = "rgb(212, 226, 13)";
    result.innerText = '';
    reset.innerText = "New Color";
    document.getElementsByClassName("row-2")[0].style.display = "none";
    numSqaure = 3;
    generateRandomColors(numSqaure);
    setupSquare(numSqaure);

})

hard.addEventListener('click', () => {
    header[0].style.backgroundColor = "rgb(212, 226, 13)";
    result.innerText = '';
    reset.innerText = "New Color";
    document.getElementsByClassName("row-2")[0].style.display = "flex";
    numSqaure = 6;
    generateRandomColors(numSqaure)
    setupSquare(numSqaure);

})











