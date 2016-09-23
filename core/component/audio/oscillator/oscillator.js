/* Oscillator */
var Oscillator = (function (config) {

    if (config !== undefined) {
        this.oscConfig = config;
    }

    this.oscNode = oscENV.createOscillator();
    this.oscGain = oscENV.createGain();
    this.oscNode.type = this.oscConfig.type;
    this.oscNode.frequency.value = this.oscConfig.freq;
    this.oscGain.gain.value = '0';
    this.oscNode.connect(this.oscGain);

    //LFO (Low Frequency Oscillation)
    var lfo = new LFO();
    lfo.osc.connect(this.oscGain);
    lfo.osc.start();

    var outputGain = new  MasterGain();
    this.oscGain.connect(outputGain.gainNode);
    outputGain.gainNode.connect(oscENV.destination);
    this.oscNode.start();

    this.noteOn = function () {
        this.oscGain.gain.value = outputGain.gainNode.gain.value;
    };

    this.noteOff = function () {
        this.oscGain.gain.value = '0';
    };
});


// LOG STATUS
if (Oscillator) {
    console.log('||||||||||| OSCILLATOR READY |||||||||||');
}
