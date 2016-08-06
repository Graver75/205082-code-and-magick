function getMessage (a, b) {
	if (typeof(a) === 'boolean') {
		if (a === true) {
			var sMessage = 'Я попал в ' + b;
			return sMessage;
		}
		if (a === false) {
			var sMessage = 'Я никуда не попал';
			return sMessage;
		}
	}
 	if (typeof(a) === 'number') {
		var sMessage = 'Я прыгнул на ' + a*100 + ' сантиметров';
		return sMessage;
	}
	if (typeof(a) === 'object') {
		var sMessage = 'Я прошёл ' + setSumm(a) + ' шагов';
		return sMessage;
	}
	if(typeof(b) === 'object' && typeof(a) == 'object') {
		var sMessage = 'Я прошёл ' + setPath(a, b) + ' метров';
		return sMessage;
	}
}

function setPath (a, b) {
	var summ = 0;
	var i;
	for(i=0; i<=a.length; i++) {
		summ = summ + a[i] * b[i];

		if (i === (a.length-1)) {
			return summ;
		}

	}
}
function setSumm (a) {
	var summ = 0;
	var i;
	for(i=0; i<=a.length; i++) {
		summ = summ + a[i];
		if (i === (a.length-1)) {
			return summ;
		}
	}
}


