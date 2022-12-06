const isLogged = true;

const promise = (logged) => {
	return new Promise((res, rej) => {
		if (logged) {
			res(Math.random());
		} else {
			rej(new Error('Error'));
		}
	});
};

const promise2 = (num) => {
	return new Promise((res, rej) => {
		if (num > 0.5) {
			res({ name: 'John', age: 24 });
		} else {
			rej(new Error('Error 2'));
		}
	});
};

promise(isLogged)
	.then(promise2)
	.then((val) => console.log(val))
	.catch((err) => console.log(err));
