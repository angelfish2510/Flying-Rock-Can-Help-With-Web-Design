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


// border change on click for FEWD page


function borderChange() {
    this.style.border = "12px dashed #3c1361";
}

const project1Card = document.getElementById('project1');
const project2Card = document.getElementById('project2');
const project3Card = document.getElementById('project3');
const project4Card = document.getElementById('project4');
const project5Card = document.getElementById('project5');
const project6Card = document.getElementById('project6');
const project7Card = document.getElementById('project7');
const project8Card = document.getElementById('project8');

// function borderChange(e) {
//     this.style.borderColor = "purple";
// }

project1Card.addEventListener("click", borderChange);
project2Card.addEventListener("click", borderChange);
project3Card.addEventListener("click", borderChange);
project4Card.addEventListener("click", borderChange);
project5Card.addEventListener("click", borderChange);
project6Card.addEventListener("click", borderChange);
project7Card.addEventListener("click", borderChange);
project8Card.addEventListener("click", borderChange);



// ask on Slack if this is something that could work with tweaks....  and/or iterate through the above

// document.addEventListener('click', (event)=> {
//     if (event.target.parentNode.tagName === "DIV") {
//         borderChange();
//         }
    
// })