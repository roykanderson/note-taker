function Controller() {
    // main methods
    this.addNote = function(noteText) {
        let newNote = model.addNote(noteText);
        view.displayNote(newNote, newNote.id);
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
    }
    // handleEdit
    // handleSave
    // handleCancel
}

function isValidInput(noteText) {
    if (noteText === "") {
        return false;
    }
    return true;
}

function resetTextarea(textarea) {
    let text = textarea;
}

// function parseInput(noteText) {
//     if (noteText === "") {
//         return null;
//     }

//     let index = noteText.length - 1;
//     let foundChar = false;

//     while (index >= 0 && foundChar === false) {
//         if (noteText[index] === "\n") {
//             noteText = noteText.slice(0, index - 1);
//         } else {
//             break;
//         }
//     }

//     return noteText;
// }

// function sanitizeInput(noteText) {
//     if (noteText === "") {
//         console.log("whitespace");
//     }
//     for (let i = 0; i < noteText.length; i++) {
//         console.log(typeof noteText[i]);
//         console.log(noteText[i]);
//         if (noteText[i] === "\n") {
//             console.log("newline");
//         }
//     }
// }