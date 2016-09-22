// MIDI DATA

var midi = function () {
    if (navigator.requestMIDIAccess) {
        navigator.requestMIDIAccess({
            sysex: false
        }).then(onMIDISuccess, onMIDIFailure);
    } else {
        alert("No MIDI support in your browser.");
    }

    // midi functions
    function onMIDISuccess(midiAccess) {
        midiRawData = midiAccess;
        var inputs = midiRawData.inputs.values();
        // loop over all available inputs and listen for any MIDI input
        for (var input = inputs.next(); input && !input.done; input = inputs.next()) {
            // each time there is a midi message call the onMIDIMessage function
            input.value.onmidimessage = onMIDIMessage;
            console.log(input.value.name);
        }
    }

    function onMIDIFailure(error) {
        // when we get a failed response, run this code
        console.log("No access to MIDI devices or your browser doesn't support WebMIDI API. Please use WebMIDIAPIShim " + error);
    }

    var testTone = new Oscillator({
        type: 'sine',
        freq: '440'
    });

    function onMIDIMessage(message) {
        data = message.data; // this gives us our [command/channel, note, velocity] data.
        // console.log('MIDI data', data); // MIDI data [144, 63, 73]
        // console.log(message.data);
        // console.log(data[0] === 158);
        if (data[0] === 158) {
            console.log('note on');
            testTone.noteOn();
        } else if (data[0] === 142) {
            console.log('note off');
            testTone.noteOff();
        }
    }
};
midi();
