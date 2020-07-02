const chalk = require('chalk');
const notes = require('./notes.js');
const yargs = require('yargs');


//adding a new note command
yargs.command({
	command : "Add",
	describe : "Add a new note",
	builder : {
		title : {
			describe : "Title of the note",
			demandOption: true,
			type: "string"
		},
		body: {
			descibe: "Body of the title",
			demandOption: true,
			type: "string"
		}
	},
		
		
	handler(argv){
		notes.addNote(argv.title, argv.body);;
	}
	});
	
//Removing an existing note
yargs.command({
	command : "Remove",
	describe : "Removing a note",
	builder: {
		title: {
			describe: "This is the title of the note to be removed",
			demandOption: true,
			type: "string"
		}
	},
	handler(argv){
	notes.removeNote(argv.title);}
	});
	

//Reading existing notes
yargs.command({
	command : "Read",
	describe : "Reading a note",
	handler(argv){
	notes.readNotes(argv.title);}
	});

//Listing existing nodes
yargs.command({
	command : "List",
	describe : "List Existing notes",
	handler(){
	console.log(chalk.yellow("Your notes"));
	notes.listNotes();}
	});

yargs.parse();