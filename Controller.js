function Controller() {
    // main methods
    this.addNote = function(noteText) {
        let newNote = model.addNote(noteText);
        view.displayNote(newNote, newNote.id);
    };

    this.editNote = function(id) {
        let newText = view.htmlElements.note.innerText;
        model.notes[id].edit(newText);
        view.populateModal(id);
        view.updateNote(id);
    };

    // event handlers

    // handleSubmit
    this.handleSubmit = function() {
        let textarea = document.querySelector("#textarea");
        let message = document.querySelector("#message");
        let noteText = textarea.innerText;
        if (isValidInput(noteText)) {
            controller.addNote(noteText);
            textarea.blur();
            textarea.innerHTML = "";
            message.innerText = "Add a note";
        } else {
            textarea.blur();
            textarea.innerHTML = "";
            message.innerText = "Don't just leave it blank!";
        }
    };

    // handleEdit
    this.handleEdit = function() {
        view.enterEditMode();
    };

    // handleSave
    this.handleSave = function() {
        // let saveButton = document.querySelector(".modalSave");
        let textContainer = document.querySelector(".textContainer");
        if (isValidInput(textContainer)) {
            this.editNote(view.htmlElements.modalId.innerText);
            view.exitEditMode();
        }
    };

    // handleDelete
    this.handleDelete = function() {
        let id = document.querySelector("#modalId").innerText;
        view.removeNote(id);
        model.removeNote(id);
        view.hideModal();
    }

    // handleCancel
    this.handleCancel = function() {
        let textContainer = document.querySelector(".textContainer");
        let id = document.querySelector("#modalId").innerText;
        textContainer.innerText = model.notes[id].latestVersion.text;
        view.exitEditMode();
    };
}

function isValidInput(noteText) {
    if (noteText === "") {
        return false;
    }
    let foundChar = false;
    for (let i = 0; i < noteText.length; i++) {
        if (noteText[i] !== "\n") {
            foundChar = true;
        }
    }
    return foundChar;
}