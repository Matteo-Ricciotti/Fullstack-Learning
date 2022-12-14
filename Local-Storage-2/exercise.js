const getUserData = () => {
	return JSON.parse(localStorage.getItem('user'));
};

console.log(getUserData());
