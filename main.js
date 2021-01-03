let view = new View();
let model = new Model();
let controller = new Controller();

model.addNote("asparagus is OK");
model.addNote("ok asparagus is actually pretty good");
model.addNote("asparagus is AWESOME");

for (let i = 0; i < model.length; i++) {
    console.log(model.notes[i]);
    view.displayNote(model.notes[i], model.notes[i].id);
}

let submit = document.querySelector("#submitButton");
submit.addEventListener("click", controller.handleSubmit);

let textarea = document.querySelector("#textarea");
textarea.addEventListener("keydown", function(e) {
    if (e.keyCode === 13) {
        controller.handleSubmit();
        view.clickSubmit();
    }
})