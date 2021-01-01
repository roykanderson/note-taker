function showModal(index, date, text) {
    // querying the modal elements
    let modal = document.querySelector(".modal");
    let noteNum = document.querySelector(".modalFlex > .noteNum");
    let time = document.querySelector(".modalFlex > .time");
    let note = document.querySelector(".modalContent > .textContainer");
    let x = document.querySelector(".xButton");

    // setting innerText of the modal elements
    noteNum.innerText = index;
    time.innerText = date;
    note.innerText = text;

    // turn on event listener for x button
    x.onclick = hideModal;

    // set display: block instead of display: hidden
    modal.style.display = "block";
}

function hideModal() {
    // querying the modal element
    let modal = document.querySelector(".modal");

    // set display: none
    modal.style.display = "none";
}