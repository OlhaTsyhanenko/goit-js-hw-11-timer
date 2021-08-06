class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = targetDate;
    this.days = document.querySelector(`${selector} .value[data-value="days"]`);
    this.hours = document.querySelector(`${selector} .value[data-value="hours"]`);
    this.mins = document.querySelector(`${selector} .value[data-value="mins"]`);
    this.secs = document.querySelector(`${selector} .value[data-value="secs"]`);    
  }

  getTimeComponents(currentDate) {
    const time = this.targetDate - currentDate;
    this.days.textContent = Math.floor(time / (1000 * 60 * 60 * 24));
    this.hours.textContent = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    this.mins.textContent = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    this.secs.textContent = this.pad(Math.floor((time % (1000 * 60)) / 1000));
  }

  start() {
    setInterval(() => {
      const currentDate = Date.now();
      this.getTimeComponents(currentDate)
    }, 1000);
  }
  
  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const countdownTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Aug 7, 2021'),
});

countdownTimer.start();

