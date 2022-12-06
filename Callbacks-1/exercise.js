const printAsyncName = (name, callback) => {
	setTimeout(() => {
		callback();
	}, 1000);

	setTimeout(() => {
		console.log(name);
	}, 2000);
};

printAsyncName('Matteo', () => {
	console.log('Hello');
});
