
// const project2 = document.getElementById("project2")

// project2.addEventListener("click", flipCard);

// function flipCard() {
//   project2.classList.toggle("flipcard");
// }

// header text animation and shrink less significant text

const hText = document.querySelector('.headerTextAnimate');
const stringHText = hText.textContent;
const splitText = stringHText.split("");

hText.textContent = "";

for(let i = 0; i < splitText.length; i++) {
    hText.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(beautifyHeader, 50);


function beautifyHeader() {
    const span = hText.querySelectorAll('span')[char];
    span.classList.add('letterfade');
    char++
    if (char > 12 && char < 26) {
        span.classList.add('smallfont');
    }
    else if(char === splitText.length) {
        complete();
        return;
    }
}

function complete(){
    clearInterval(timer);
    timer = null;
}


// border change on hover? click? for FEWD page

const cardsFEWD = document.querySelectorAll('.card');

function borderChange() {
    cardsFEWD.style.borderColor("purple");
}

cardsFEWD.addEventListener("onclick", borderChange);

// use "this" as part of event listener?