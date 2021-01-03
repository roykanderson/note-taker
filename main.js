let view = new View();
let model = new Model();
let controller = new Controller();

let submit = document.querySelector("#submitButton");
submit.addEventListener("click", controller.handleSubmit);

// let textarea = document.querySelector("#textarea");
// textarea.addEventListener("keydown", function(e) {
//     if (e.keyCode === 13) {
//         controller.handleSubmit();
//         view.clickSubmit();
//     }
// });

let editSaveButton = document.querySelector("#editButton");
editSaveButton.addEventListener("click", function(e) {
    let editSaveButton = document.querySelector("#editButton");
    if (editSaveButton.getAttribute("class") === "modalDefault") {
        controller.handleEdit();
    } else if (editSaveButton.getAttribute("class") === "modalSave") {
        controller.handleSave();
    }
});

let deleteCancelButton = document.querySelector("#deleteButton");
deleteCancelButton.addEventListener("click", function() {
    if (deleteCancelButton.getAttribute("class") === "modalDefault") {
        controller.handleDelete();
    } else if (deleteCancelButton.getAttribute("class") === "modalCancel") {
        controller.handleCancel();
    }
});