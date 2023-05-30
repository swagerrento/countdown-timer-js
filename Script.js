
const durationInput = document.querySelector('#duration');
const playButton = document.querySelector('.play');
const pauseButton = document.querySelector('.pause');
const circle = document.querySelector('.circle');

const perimeter = circle.getAttribute('r')*2*Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let duration;

const timerOne = new Countdown(durationInput, playButton, pauseButton, {
    onStart(totalTime) {
        duration = totalTime;
    },
    onTick(timeLeft) {
        circle.setAttribute('stroke-dashoffset', perimeter*timeLeft/duration-perimeter);
    },
    onComplete() {
        console.log('Timer Complete');
    }
});
