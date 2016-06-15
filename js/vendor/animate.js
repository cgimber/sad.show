/*

USAGE:
Pass a function and a framerate to the animate function to start. This returns an object with `stop` and `resume` methods.
	
function draw() {
  // do something in here...
}

var animator = animate(draw, 30);

...
animator.stop();

...
animator.resume();

*/
function animate(func, fps) {
    fps = fps || 30;
    var last = Date.now();
    var rafid = false;
    var tick = function() {
        rafid = requestAnimationFrame(tick);
        var interval = 1000 / fps;
        var now = Date.now();
        var elapsed = now - last;
        if (elapsed > interval) {
            last = now;
            func();
        }
    };
    tick();
    return {
        stop: function() {
            cancelAnimationFrame(rafid);
            rafid = false;
        },
        resume: function() {
            if (rafid === false)
                tick();
        }
    };
}
