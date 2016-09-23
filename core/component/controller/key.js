// key event
console.log('||||||||||| KEYBOARD EVENT READY |||||||||||');

var keyOn = function (keyAction, noteAction) {
    var innerFunc = function () {
        for (var item in range) {
            if (event.key === item) {
                console.log('press:' + event.key + ' get: ' + item);
                if (noteAction === 'noteOn') {
                    range[item].noteOn();
                } else if (noteAction === 'noteOff') {
                    range[item].noteOff();
                }
            }
        }
    };
    document.addEventListener(keyAction, innerFunc);
};

keyOn('keypress', 'noteOn');
keyOn('keydown', 'noteOn');
keyOn('keyup', 'noteOff');
