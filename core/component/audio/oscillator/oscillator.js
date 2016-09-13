/* Oscillator */
console.log('init oscillator');

// init audio context
var audioContext = new AudioContext();

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
    this.oscGain.connect(audioContext.destination);
    this.oscNode.start();

    this.noteOn = function () {
        console.log('osc start');
        this.oscGain.gain.value = '0.1';
    };

    this.noteOff = function () {
        this.oscGain.gain.value = '0';
    };
});



var range = [
    {z: '440'},
    {x: '660'}
];

var generateKeyRange = function () {
    for (var i = 0; i < range.length; i++) {
        for (var key in range[i]) {
            console.log(range[i][key]);
            range[i] = new Oscillator({
                type: 'sine',
                freq: range[i][key]
            });
        }
    }
};

generateKeyRange();

// do "range[0].noteOn()"


