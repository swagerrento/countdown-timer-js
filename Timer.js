class Countdown {
    constructor (duration, play, pause, callbacks) {
        this.duration = duration;
        this.play = play;
        this.pause = pause;
        if (callbacks) this.callbacks = callbacks;

        this.play.addEventListener('click' , () => {
            this.start();
        })

        this.pause.addEventListener('click' , () => {
            this.stop();
        })

        this.duration.addEventListener('focusin' , () => {
            this.stop();
            this.duration.classList.toggle('borderAround');
        })

        this.duration.addEventListener('focusout' , () => {
            this.duration.classList.toggle('borderAround');
        })

        this.duration.addEventListener('change' , () => {
            this.totalDuration = this.duration.value;
        })
    }

    start () {
        if (this.callbacks.onStart) this.callbacks.onStart(this.timeRemaining);
        this.intervalID = setInterval(() => {
            this.tick();
        }, 20);
        this.play.style.display = 'none';
    }

    tick () {
        if (this.duration.value <= 0) {
            this.stop();
            if (this.callbacks.onComplete) this.callbacks.onComplete();
        }
        else {
            if (this.callbacks.onTick) this.callbacks.onTick(this.duration.value);
            this.timeRemaining = this.timeRemaining - 0.02;
        }
    }

    stop () {
        clearInterval(this.intervalID);
        this.play.style.display = 'inline';
    }

    get timeRemaining () {
        return Number(this.duration.value);
    }

    set timeRemaining (time) {
        this.duration.value = time.toFixed(2);
    }
}