const person = {
	id: 1,
	firstName: 'Mario',
	lastName: 'Rossi',
	age: 25,
};

const personInfo = { ...person };

console.log(personInfo.id, personInfo);
