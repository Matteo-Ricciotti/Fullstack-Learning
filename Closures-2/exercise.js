const printName = () => {
	const helloName = 'Hello John';

	const inner = () => helloName;

	setTimeout(() => {
		console.log(inner());
	}, 1000);
};

printName();
