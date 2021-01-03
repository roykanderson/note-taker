// constructor
function View() {
    this.htmlElements = {
        // div containing markup for all notes
        notesContainer: document.querySelector("#notesContainer"),
        modal: document.querySelector(".modal"),
        modalId: document.querySelector("#modalId"),
        modalContent: document.querySelector(".modalContent"),
        editButton: document.querySelector("#editButton"),
        deleteButton: document.querySelector("#deleteButton"),
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

        container.addEventListener("click", {handleEvent: this.showModal, view: this});
    };

    // takes in the html id of a note to remove and removes it from the view
    this.removeNote = function(id) {
        let noteElems = this.htmlElements.notesContainer.children;
        noteElems[id].remove();
        this.reindexNoteElems(id);
    };

    // takes in the id of the note to update, updates its view based on notes latest version in model
    this.updateNote = function(id) {
        let date = document.querySelector("[id = '" + id + "'] .date");
        let lineClamp = document.querySelector("[id = '" + id + "'] .lineClamp");
        date.innerText = model.notes[id].latestVersion.time;
        lineClamp.innerText = model.notes[id].latestVersion.text;
    }

    // reindexes note element id's after a note has been removed
    this.reindexNoteElems = function(indexRemoved) {
        let noteElems = this.htmlElements.notesContainer.children;
        let length = noteElems.length;
        if (length !== indexRemoved) {
            for (let i = indexRemoved; i < length; i++) {
                noteElems[i].id = noteElems[i].id - 1;
            }
        }
    };

    // takes in the id of a note, displays that notes content in a modal
    this.showModal = function(e) {
        // fill the modal with the current note's text and date
        this.view.populateModal(e.currentTarget.id);
        // when the user clicks the xButton, hide the modal
        this.view.htmlElements.xButton.onclick = () => {
            this.view.hideModal();
        };
        // or if the user clicks anywhere outside the modal content, hide the modal
        window.onclick = (e) => {
            if (e.target === this.view.htmlElements.modal) {
                this.view.hideModal();
            }
        }
        // make the modal visible
        this.view.htmlElements.modal.style.display = "block";
    };

    // fill the modal with the current note's text and date
    this.populateModal = function(id) {
        // get the text and date of the note we want to display in the modal
        let text = model.notes[id].latestVersion.text;
        let date = model.notes[id].latestVersion.time;
        // set innerText of modal elements to the specified note
        this.htmlElements.modalId.innerText = id;
        this.htmlElements.note.innerText = text;
        this.htmlElements.time.innerText = date;
    };

    // channge the modal display back to "none"
    this.hideModal = function() {
        this.htmlElements.modal.style.display = "none";
        view.exitEditMode();
    };

    this.enterEditMode = function() {
        this.htmlElements.note.setAttribute("contenteditable", "true");
        this.setCaretAtEnd();
        this.setModalEditStyle();
    };

    this.exitEditMode = function() {
        this.htmlElements.note.setAttribute("contenteditable", "false");
        this.setModalDefaultStyle();
    };

    this.setCaretAtEnd = function() {
        // put the element in focus
        this.htmlElements.note.focus();
        // select all the content in the element
        document.execCommand('selectAll', false, null);
        // collapse selection to the end
        document.getSelection().collapseToEnd();
        this.editMode = true;
    };

    this.setModalEditStyle = function() {
        this.htmlElements.editButton.innerText = "Save";
        // this.htmlElements.editButton.style.background = "#43b567";
        this.htmlElements.editButton.setAttribute("class", "modalSave");
        this.htmlElements.deleteButton.innerText = "Cancel";
        // this.htmlElements.deleteButton.style.background = "#b0b0b0";
        this.htmlElements.deleteButton.setAttribute("class", "modalCancel");
        this.htmlElements.note.style.background = "#e8e8e8";
    };

    this.setModalDefaultStyle = function() {
        this.htmlElements.editButton.innerText = "Edit";
        // this.htmlElements.editButton.style.background = "#ff6905";
        this.htmlElements.editButton.setAttribute("class", "modalDefault");
        this.htmlElements.deleteButton.innerText = "Delete";
        // this.htmlElements.deleteButton.style.background = "#ff6905";
        this.htmlElements.deleteButton.setAttribute("class", "modalDefault");
        this.htmlElements.note.style.background = "#f0f0f0";
    };

    this.clickSubmit = function() {
        let submitButton = document.querySelector("#submitButton");
        submitButton.setAttribute("class", "focus");
        setTimeout(function() {
            submitButton.setAttribute("class", "default");
        }, 250)
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