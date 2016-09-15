// key event
console.log('key init');

var keyOn = (function () {
    var keypress = function () {
        for (var item in range) {
            if (event.key === item) {
                console.log('press:' + event.key + ' get: ' + item);
                range[item].noteOn();
            }
        }
    };
    var keydown = function () {
        for (var item in range) {
            if (event.key === item) {
                console.log('press:' + event.key + ' get: ' + item);
                range[item].noteOn();
            }
        }
    };
    var keyup = function () {
        for (var item in range) {
            if (event.key === item) {
                console.log('press:' + event.key + ' get: ' + item);
                range[item].noteOff();
            }
        }
    };
    document.addEventListener('keypress', keypress);
    document.addEventListener('keydown', keydown);
    document.addEventListener('keyup', keyup);

});
keyOn();