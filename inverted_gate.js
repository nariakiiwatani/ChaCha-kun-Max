inlets = 2;

if (jsarguments.length>1)
	outlets = jsarguments[1];

var close_index = 0;
var value;

function msg_int(index) {
	if(inlet == 0) {
		close_index = index;
	}
	else {
		value = index;
		out();
	}
}

function anything() {
	value = arrayfromargs(arguments);
	out();
}
function out() {
	for(var i = 0; i < outlets; ++i) {
		if(i == close_index) { continue; }
		outlet(i, value);
	}
}
function bang() {
	if(inlet == 1) {
		value = "bang";
	}
	out();
}