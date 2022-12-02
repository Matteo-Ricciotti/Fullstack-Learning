class Person {
	#firstName;
	#lastName;
	#age;
	constructor(firstName, lastName, age) {
		this.#firstName = firstName;
		this.#lastName = lastName;
		this.#age = age;
	}

	get fullName() {
		return `${this.#firstName} ${this.lastName}`;
	}

	get firstName() {
		return this.#firstName;
	}
	get lastName() {
		return this.#lastName;
	}

	get age() {
		return this.#age;
	}

	set firstName(newName) {
		this.#firstName = newName;
	}

	set lastName(newName) {
		this.#lastName = newName;
	}

	set age(newAge) {
		this.#age = newAge;
	}
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);
