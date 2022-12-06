const repeatHello = (callback) => {
	const id = setInterval(() => {
		callback();
	}, 1000);

	setTimeout(() => {
		clearInterval(id);
	}, 5000);
};

repeatHello(() => {
	console.log('Hello');
});
