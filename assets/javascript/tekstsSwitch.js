let minuutCijfer = document.getElementById('nummer1');
let minuut = document.getElementById('tekstMinuut');
let vertrekTijd = document.getElementById('vertrekTijd');
let laatMinuutOfVertrekTijdZien = true;
let timer = 0;

function start() {
    vertrekTijd.style.opacity = 0;
    minuut.style.opacity = 1;
}
setInterval(function() {
    timer++;
    if (timer >= 5) {
        timer = 0;
        if (laatMinuutOfVertrekTijdZien == true) {
            vertrekTijd.style.opacity = 1;
            minuut.style.opacity = 0;
            minuutCijfer.style.opacity = 0;
            laatMinuutOfVertrekTijdZien = false;
        }
        else{
            vertrekTijd.style.opacity = 0;
            minuut.style.opacity = 1;
            minuutCijfer.style.opacity = 1;
            laatMinuutOfVertrekTijdZien = true;

        }
    }
}, 1000);
start();