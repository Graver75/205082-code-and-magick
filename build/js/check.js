function getMessage (a, b) {
	if (typeof a === 'boolean') {
		if (a) {
			var sMessage = 'Я попал в ' + b;
			return sMessage;
		}
		else {
			var sMessage = 'Я никуда не попал';
			return sMessage;
		}
	}
 	if (typeof a === 'number') {
		var sMessage = 'Я прыгнул на ' + a * 100 + ' сантиметров';
		return sMessage;
	}
	if (typeof a === 'object') {
		var sMessage = 'Я прошёл ' + setSumm(a) + ' шагов';
		return sMessage;
	}
	if(typeof b === 'object' && typeof(a) == 'object') {
		var sMessage = 'Я прошёл ' + setPath(a, b) + ' метров';
		return sMessage;
	}
}

var summ = 0;
var i;
function setPath (a, b) {
	for(i = 0; i <= a[a.length - 1]; i++) {
		summ = summ + a[i] * b[i];

		if (i === (a.length - 1)) {
			return summ;
		}

	}
}
function setSumm (a) {
	for(i =0; i <= a[a.length - 1]; i++) {
		summ = summ + a[i];
		if (i === (a.length - 1)) {
			return summ;
		}
	}
}


