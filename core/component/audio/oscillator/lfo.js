//LFO (Low Frequency Oscillation)
var LFO = (function () {
    var lfoInput = document.querySelectorAll('[data-knob="lfo"]')[0];
    var lfoValue = document.querySelectorAll('[data-knob="value"]')[0];
    this.osc = oscENV.createOscillator();
    this.osc.type = 'sine';
    // this.osc.frequency.value = '2';
    var lfo = this;
    lfoInput.addEventListener('change', function () {
        lfo.osc.frequency.value = this.value;
        console.log(this.value);
    });
});
