function getMessage (a, b) {
	var sMessage;
	if (typeof a === 'boolean') {
		if (a) {
			sMessage = 'Я попал в ' + b;
			return sMessage;
		} else {
			sMessage = 'Я никуда не попал';
			return sMessage;
		}
	}
 	if (typeof a === 'number') {
		sMessage = 'Я прыгнул на ' + a * 100 + ' сантиметров';
		return sMessage;
	}
	if (typeof a === 'object') {
		sMessage = 'Я прошёл ' + setSumm(a) + ' шагов';
		return sMessage;
	}
	if(typeof b === 'object' && typeof(a) == 'object') {
		sMessage = 'Я прошёл ' + setPath(a, b) + ' метров';
		return sMessage;
	}
}

var summ = 0;
var i;
function setPath (a, b) {
	for(i = 0; i < a.length; i++) {
		summ = summ + a[i] * b[i];

	}
	return summ; 
}
function setSumm (a) {
	for(i = 0; i < a.length; i++) {
		summ = summ + a[i];
	}
	return summ;
}


