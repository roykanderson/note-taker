// constructor for model object
function Model() {
    // array of objects containing a) .note : Note object b) .id : html id
    this.notes = [];

    // length of notes array
    this.length = this.notes.length;

    // takes in text string and adds a Note containing the text to notes
    this.addNote = function(text) {
        this.notes.push(new Note(text, this.length));
        this.length = this.notes.length;
    };

    // takes in the id of the Note to remove, then removes it from notes array
    this.removeNote = function(id) {
        this.notes.splice(id, 1); // remove element splice(index id, # of elements to remove)
    }
}

let view = new View();
let model = new Model();

model.addNote("asparagus is OK");
model.addNote("ok asparagus is actually pretty good");
model.addNote("asparagus is AWESOME");
model.addNote("have you ever heard of broccoli");

for (let i = 0; i < model.length; i++) {
    console.log(model.notes[i]);
    view.displayNote(model.notes[i], model.notes[i].id);
}

// let note = new Note("asparagus is gr8");

// console.log(note.versions);
// console.log(note.latestVersion.text);
// console.log(note.latestVersion.time);
// console.log(note.edited);

// note.edit("jk asparagus sucks");

// console.log(note.versions);
// console.log(note.latestVersion.text);
// console.log(note.latestVersion.time);
// console.log(note.edited);