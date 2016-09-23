/* Oscillator */
console.log('init oscillator');

// init audio context
var audioContext = new AudioContext();

// Master Gain
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

//LFO (Low Frequency Oscillation)
var LFO = (function () {
    var lfoInput = document.querySelectorAll('[data-knob="lfo"]')[0];
    var lfoValue = document.querySelectorAll('[data-knob="value"]')[0];
    this.osc = audioContext.createOscillator();
    this.osc.type = 'sine';
    this.osc.frequency.value = '2';
    // var lfo = this;
    // lfoInput.addEventListener('change', function () {
    //     lfo.osc.frequency.value = this.value;
    //     console.log(this.value);
    // });
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

    var outputGain = new  MasterGain();
    this.oscGain.connect(outputGain.gainNode);

    //LFO (Low Frequency Oscillation)
    var lfo = new LFO();
    lfo.osc.connect(this.oscGain);
    lfo.osc.start();

    outputGain.gainNode.connect(audioContext.destination);
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
    x: '550',
    c: '660'
};

var oscGenerator = function (oscType) {
    for (var item in range) {
        if (range.hasOwnProperty(item)) {
            range[item] = new Oscillator({
                type: oscType,
                freq: range[item]
            });
        }
    }
};

oscGenerator('sine');
