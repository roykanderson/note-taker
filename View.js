// constructor
function View() {
    this.htmlElements = {
        // div containing markup for all notes
        notesContainer: document.querySelector("#notesContainer"),
        modal: document.querySelector(".modal"),
        time: document.querySelector(".modalFlex > .date"),
        note: document.querySelector(".modalContent > .textContainer"),
        xButton: document.querySelector(".xButton")
    };

    // takes in a note object and adds html to the dom to represent it on screen
    this.displayNote = function(note, id) {
        let container = getNoteContainerElem(id);
        let noteFlex = getNoteFlexElem();
        let date = getDateElem(note);
        let lineClamp = getLineClampElem(note);

        this.htmlElements.notesContainer.appendChild(container);

        container.appendChild(noteFlex);
        container.appendChild(lineClamp);

        noteFlex.appendChild(date);
    };

    // takes in the html id of a note to remove and removes it from the view
    this.removeNote = function(id) {
        let noteElems = this.notesContainer.children;
        noteElems[id].remove();
        this.reindexNoteElems(id);
    };

    // reindexes note element id's after a note has been removed
    this.reindexNoteElems = function(indexRemoved) {
        let noteElems = this.notesContainer.children;
        let length = noteElems.length;
        if (length !== indexRemoved) {
            for (let i = indexRemoved; i < length; i++) {
                noteElems[i].id = noteElems[i].id - 1;
            }
        }
    };

    // takes in the id of a note, displays that notes content in a modal
    this.showModal = function(id) {
        // get the text and date of the note we want to display in the modal
        let text = model.notes[id].latestVersion.text;
        let date = model.notes[id].latestVersion.time;
        // set innerText of modal elements to the specified note
        this.htmlElements.note.innerText = text;
        this.htmlElements.time.innerText = date;
        // when the user clicks the xButton, hide the modal
        this.htmlElements.xButton.onclick = () => {
            this.hideModal();
        };
        // or if the user clicks anywhere outside the modal content, hide the modal
        window.onclick = (e) => {
            if (e.target === this.htmlElements.modal) {
                this.hideModal();
            }
        }
        // make the modal visible
        this.htmlElements.modal.style.display = "block";
    };

    this.hideModal = function() {
        this.htmlElements.modal.style.display = "none";
    }
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