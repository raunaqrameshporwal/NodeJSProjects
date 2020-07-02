const fs = require("fs");
const chalk = require("chalk");
console.log("You are in notes.js");

const mynotes =() => "This is Raunaq Ramesh Porwal's notes";


const removeNote = (title) =>{
	const notes = loadnotes();
	const originalLength = notes.length;
	const remainingNotes = notes.filter((note) => note.title !== title);
	if(remainingNotes.length < originalLength){
		saveNotes(remainingNotes);
		console.log(chalk.bgGreen("Note Removed!"));
	}
	else{
		console.log(chalk.bgRed("Note Not removed"));
	}
		
}

const addNote = (title, body) => {
	const notes = loadnotes();
	const duplicateNotes = notes.filter((note) => note.title === title);
	if(duplicateNotes.length === 0){
		notes.push({
			title : title,
			body: body
		});
		saveNotes(notes);
		console.log(chalk.bgGreen("New Note Added"));
		
	}
	else{
		console.log(chalk.bgRed("Note Already exists"));
	}
		
}

function saveNotes(notes){
	fs.writeFileSync("notes.json", JSON.stringify(notes));
}

const loadnotes =() =>{
	try{
		const DataBuffer = fs.readFileSync("notes.json");
		return JSON.parse(DataBuffer.toString());
	}
	catch(e)
	{
		return []
	}
}

const listNotes = () => {
	const notes = loadnotes();
	if(notes.length > 0){
		
		notes.forEach((note) => console.log(note.title));
	}
	else{
		console.log(chalk.red("No notes"));
	}
}

const readNotes = (title) => {
	const notes = loadnotes();
	const note_to_be_read = notes.find((note) => note.title === title);
	if(!note_to_be_read){
		console.log(chalk.red("Note to be read not found"));
	}
	else{
		console.log(chalk.yellow(note_to_be_read.title));
		console.log(note_to_be_read.body);
	}
}
	
	
	
	
module.exports = {
	removeNote: removeNote,
	mynotes: mynotes,
	addNote : addNote,
	listNotes : listNotes,
	readNotes : readNotes
}