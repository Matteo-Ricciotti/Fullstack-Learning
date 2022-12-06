const number = 15;

const promise = new Promise((res, rej) => {
	if (number > 10) {
		res(number);
	} else {
		rej(number);
	}
});

promise.then((val) => console.log(val)).catch((err) => console.log(err));
