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


// alerts on first hover of main page cards

const cardHoverFEWD = document.getElementById("fewd");
const cardHoverPersonal = document.getElementById("personal");
const cardHoverNonprofits = document.getElementById("nonprofits");

function cardHoverAlertFEWD() {
    if (cardHoverFEWD.classList.contains('notify')) {
        alert("Click on link to see carousel of FEWD Project screenshots.  Within the carousel you can click on the image to access the specific project or you can click on 'All FEWD Projects' to see the library.");
        cardHoverFEWD.classList.remove('notify');
        cardHoverFEWD.classList.add('noalert');
    }
}

cardHoverFEWD.addEventListener("mouseover", cardHoverAlertFEWD);


function cardHoverAlertPersonal() {
    if (cardHoverPersonal.classList.contains('notify')) {
        alert("Click on link to see carousel of Personal Project screenshots.  Within the carousel you can click on the image to access the specific project or you can click on 'All Personal Projects' to see the library.");
        cardHoverPersonal.classList.remove('notify');
        cardHoverPersonal.classList.add('noalert');
    }
}

cardHoverPersonal.addEventListener("mouseover", cardHoverAlertPersonal);

function cardHoverAlertNonprofits() {
    if (cardHoverNonprofits.classList.contains('notify')) {
        alert("Click on link to see carousel of Nonprofit screenshots.  Within the carousel you can click on the image to access the specific webiste or you can click on 'See All Nonprofit Websites' to see the collection.");
        cardHoverNonprofits.classList.remove('notify');
        cardHoverNonprofits.classList.add('noalert');
    }
}

cardHoverNonprofits.addEventListener("mouseover", cardHoverAlertNonprofits);
