
var include = function (path) {
    var head = document.querySelector('head');
    var script = document.createElement('script');
    script.setAttribute('src', path);
    head.appendChild(script);
};

include('core/component/audio/oscillator/oscillator.js');
include('core/component/controller/key.js');
include('core/component/controller/key.js');
include('core/component/ui/fader/fader.js');
