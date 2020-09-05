let addNoteBtn = document.querySelector('addNoteBtn');

addNoteBtn.onclick = () => {

    let newNoteInput = document.querySelector('#newNoteImput');
    let notes = document.querySelector('#app .notes');

    let note = document.createElement('li');
    let checkbox = document.createElement('input');

    checkbox.type = "checkbox";
    note.classList.add('note');
    note.innerHTML = newNoteInput.value;
    note.appendChild(checkbox);
   
    newNoteInput.value = '';
   



}