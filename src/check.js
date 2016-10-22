function getMessage (a, b) {
	let sMessage;
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
	let i,
	    summ = 0;
	for(i = 0; i < a.length; i++) {
		summ = summ + a[i] * b[i];

	}
	return summ; 
}
function setSumm (a) {
	let summ = 0,
	    i;
	for(i = 0; i < a.length; i++) {
		summ = summ + a[i];
	}
	return summ;
}


