// Master Gain
var MasterGain = (function () {
    var volumeInput = document.querySelectorAll('[data-knob="volume"]')[0];
    var volumeValue = document.querySelectorAll('[data-knob="value"]')[0];
    var gainNode = this;
    this.gainNode = oscENV.createGain();
    this.gainNode.gain.value = (volumeInput.value)/127;
    volumeInput.addEventListener('change', function () {
        gainNode.gainNode.gain.value = (this.value)/127;
        volumeValue.innerHTML = (this.value)/127;
    });
});
