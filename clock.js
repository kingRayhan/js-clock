var secHand = document.querySelector('.second-hand');
var minHand = document.querySelector('.min-hand');
var hourHand = document.querySelector('.hour-hand');
var digitalClock = document.querySelector('.digital-clock');
var audio = document.querySelector('audio');

setInterval(playClock, 1000);

function  playClock() {
    var date = new Date;

    var getSec = date.getSeconds();
    var getMin = date.getMinutes();
    var getHour = date.getHours();

    //********************* Analog clock*******************************
    secHand.style.setProperty('transform' , `rotate(${(getSec * 6) + 90 }deg)`);
    minHand.style.setProperty('transform' , `rotate(${(getMin * 6) + 90 }deg)`);
    hourHand.style.setProperty('transform' , `rotate(${(getHour * 30) + 90 }deg`);

    //********************* Digital clock*******************************
    var ampm = getHour < 12 ? 'AM' : 'PM';
    
    // override for digital clock
    getSec = getSec < 10 ? `0${getSec}` : getSec;
    getMin = getMin < 10 ? `0${getMin}` : getMin;

    getHour = getHour % 12;
    getHour = getHour < 10 ? '0' + getHour : getHour;


    digitalClock.textContent = `${getHour} : ${getMin} : ${getSec} ${ampm}`;

    audio.volume = .2; // 20% volume
    audio.play();
}