//Object Property Shorthand

const name = "Raunaq";
const userAge = 22;

// const user = {
	// name = name,
	// age = userAge,
	// location = "Mumbai"
// };

const user = {
	name,
	age,
	location = "Mumbai"
};

console.log(user);