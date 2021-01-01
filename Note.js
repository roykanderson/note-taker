// constructor for Note object
function Note(text, id) {
    // array of objects containing all versions of the note, oldest to latest
    this.versions = [];
        // push the first note version to versions
        this.versions.push({text: text, time: getCurrentTime()});
    
    // stores the last index in versions
    this.latestVersion = this.versions[this.versions.length - 1];

    // the index of the Note in the model, also the id of the html element that represents it
    this.id = id;

    // whether or not the note has been editied
    this.edited = false;
    
    // takes in a string of text for the updated note and updates the model
    this.edit = function(newText) {
        this.versions.push({
            text: newText,
            time: getCurrentTime(),
        });
        this.latestVersion = this.versions[this.versions.length - 1];
        this.edited = true;
    };
}