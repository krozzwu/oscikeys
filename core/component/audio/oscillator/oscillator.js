/* Oscillator */
console.log('init oscillator');

var Oscillator = function (config) {

    this.config = {};

    this.start = function () {
        console.log(this);

        var audioContext = new AudioContext();
        var oscillator = audioContext.createOscillator();
        var oscillatorGain = audioContext.createGain();
        // var oscConfig = {};

        // if custom config value exist, take it
        if (config !== undefined) {
            this.config = config;
        }

        if (this.config.type !== undefined) {
            oscillator.type = this.config.type;
        } else {
            oscillator.type = 'sine';
        }

        if (this.config.frequency !== undefined) {
            oscillator.frequency.value = this.config.frequency;
        } else {
            oscillator.frequency.value = 440;
        }

        if (this.config.volume !== undefined) {
            oscillatorGain.gain.value = this.config.volume;
        } else {
            oscillatorGain.gain.value = 0;
        }

        oscillator.connect(oscillatorGain);
        oscillatorGain.connect(audioContext.destination);

        oscillator.start();
    };

};

// var myOsc = new Oscillator();


var myOsc = new Oscillator({
    type: 'sine',
    frequency: '440',
    volume: '0.1'
});

// var myOsc2 = new Oscillator({
//     type: 'square',
//     frequency: '330',
//     volume: '0.1'
// });



myOsc.start();

// myOsc2.start();





// Oscillator({
//     type: 'sine',
//     frequency: '660',
//     volume: '0.1'
// });
