
var include = function (path) {
    var head = document.querySelector('head');
    var script = document.createElement('script');
    script.setAttribute('src', path);
    script.setAttribute('defer', '');
    head.appendChild(script);
};

include('core/component/audio/context/osc-env.js');
include('core/component/audio/context/rec-env.js');
include('core/component/audio/gain/master-gain.js');
include('core/component/audio/oscillator/oscillator.js');
include('core/component/audio/oscillator/lfo.js');
include('core/component/audio/generator/osc-generator.js');
include('core/component/controller/key.js');

// include('core/component/ui/fader/fader.js');
