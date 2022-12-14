const user = {
	id: 1,
	name: 'John',
	age: 25,
};

const setUserData = (data) => {
	localStorage.setItem('user', JSON.stringify(data));
};

setUserData(user);
