/* Oscillator */
console.log('init oscillator');

// init audio context
var audioContext = new AudioContext();

var MasterGain = (function () {
    var volumeInput = document.querySelectorAll('[data-knob="volume"]')[0];
    var volumeValue = document.querySelectorAll('[data-knob="value"]')[0];
    var gainNode = this;
    this.gainNode = audioContext.createGain();
    this.gainNode.gain.value = (volumeInput.value)/127;
    volumeInput.addEventListener('change', function () {
        gainNode.gainNode.gain.value = (this.value)/127;
        volumeValue.innerHTML = (this.value)/127;
    });
});


var Oscillator = (function (config) {

    if (config !== undefined) {
        this.oscConfig = config;
    }

    this.oscNode = audioContext.createOscillator();
    this.oscGain = audioContext.createGain();
    this.oscNode.type = this.oscConfig.type;
    this.oscNode.frequency.value = this.oscConfig.freq;
    this.oscGain.gain.value = '0';
    this.oscNode.connect(this.oscGain);
    // this.oscGain.connect(audioContext.destination);
    var outputGain = new  MasterGain();
    console.log(outputGain.gainNode.gain.value);
    this.oscGain.connect(outputGain.gainNode);
    outputGain.gainNode.connect(audioContext.destination);
    // masterGain().connect(audioContext.destination);
    this.oscNode.start();

    this.noteOn = function () {
        this.oscGain.gain.value = outputGain.gainNode.gain.value;
    };

    this.noteOff = function () {
        this.oscGain.gain.value = '0';
    };
});







var range = {
    z: '440',
    x: '660',
    c: '880'
};



for (var item in range) {
    if (range.hasOwnProperty(item)) {
        range[item] = new Oscillator({
            type: 'sine',
            freq: range[item]
        });

    }
}