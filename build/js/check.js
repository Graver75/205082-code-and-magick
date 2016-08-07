function getMessage (a, b) {
	var sMessage;
	if (typeof a === 'boolean') {
		if (a) {
			sMessage = 'Я попал в ' + b;
		} else {
			sMessage = 'Я никуда не попал';
		}
	}
 	if (typeof a === 'number') {
		sMessage = 'Я прыгнул на ' + a * 100 + ' сантиметров';
	}
	if (typeof a === 'object') {
		sMessage = 'Я прошёл ' + setSumm(a) + ' шагов';
	}
	if (typeof b === 'object' && typeof a == 'object') {
		sMessage = 'Я прошёл ' + setPath(a, b) + ' метров';
	}
	return sMessage;
}

function setPath (a, b) {	
	var i;
	var summ = 0;
	for(i = 0; i < a.length; i++) {
		summ = summ + a[i] * b[i];

	}
	return summ; 
}
function setSumm (a) {
	var summ = 0;
	var i;
	for(i = 0; i < a.length; i++) {
		summ = summ + a[i];
	}
	return summ;
}


