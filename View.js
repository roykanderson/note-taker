// constructor
function View() {
    // div containing markup for all notes
    this.notesContainer = document.querySelector("#notesContainer");

    // takes in a note object and adds html to the dom to represent it on screen
    this.displayNote = function(note, id) {
        let container = getNoteContainerElem(id);
        let noteFlex = getNoteFlexElem();
        let date = getDateElem(note);
        let lineClamp = getLineClampElem(note);

        this.notesContainer.appendChild(container);

        container.appendChild(noteFlex);
        container.appendChild(lineClamp);

        noteFlex.appendChild(date);
    };
}

function getNoteContainerElem(id) {
    let container = document.createElement("div");
    container.setAttribute("class", "note");
    container.setAttribute("id", id);
    return container;
}

function getNoteFlexElem() {
    let noteFlex = document.createElement("div");
    noteFlex.setAttribute("class", "noteFlex");
    return noteFlex;
}

function getDateElem(note) {
    let date = document.createElement("span");
    date.setAttribute("class", "date");
    date.innerText = note.latestVersion.time;
    return date;
}

function getLineClampElem(note) {
    let lineClamp = document.createElement("div");
    lineClamp.setAttribute("class", "lineClamp");
    lineClamp.innerText = note.latestVersion.text;
    return lineClamp;
}