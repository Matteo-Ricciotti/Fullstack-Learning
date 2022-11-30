const person1 = {
	firstName: 'John',
	lastName: 'Doe',
	age: 25,
};

const person2 = Object.create(person1);

// Modify the property `firstName` of the `person2` in "Simon".
person2.firstName = 'Simon';

console.log(person1);
console.log(person2);

/*
  Non è possibile modificare solo il secondo oggetto nel modo in cui proponeva l'esercizio
  perchè in realtà non esiste un secondo oggetto ma person2 non è
  altro che un riferimento allo stesso oggetto person1
*/
