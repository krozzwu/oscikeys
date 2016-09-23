// OSC Generator
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
