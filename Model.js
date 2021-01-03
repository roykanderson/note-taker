// constructor for model object
function Model() {
    // array of objects containing a) .note : Note object b) .id : html id
    this.notes = [];

    // length of notes array
    this.length = this.notes.length;

    // takes in text string and adds a Note containing the text to notes, returns the note that was just created
    this.addNote = function(text) {
        this.notes.push(new Note(text, this.length));
        this.length = this.notes.length;
        return this.notes[this.length - 1];
    };

    // takes in the id of the Note to remove, then removes it from notes array
    this.removeNote = function(id) {
        this.notes.splice(id, 1); // remove element splice(index id, # of elements to remove)
        this.updateLength();
        this.reindexNotes(id);
    };

    // updates this.length to match the current length of the notes array
    this.updateLength = function() {
        this.length = this.notes.length;
    };

    // reindexes id's of notes after a note has been removed
    this.reindexNotes = function(indexRemoved) {
        // console.log(idRemoved !== this.length);
        if (indexRemoved !== this.length) {
            for (let i = indexRemoved; i < this.length; i++) {
                this.notes[i].id--;
            }
        }
    };
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