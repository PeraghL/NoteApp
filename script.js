let noteTitles = [];
let noteMessages = [];
let basketTitles = [];
let basketMessages = [];
let currentEditIndex = null;

function init() {
    loadNote();
    loadBasket();
    renderNotes();
    renderBasket();
}

function renderNotes() {
    let noteBox = document.getElementById('notebox');
    noteBox.innerHTML = '';

    if (noteTitles.length <= 0) {
        noteBox.classList.remove('note-box');
        noteBox.innerHTML = renderHtmlEmptyCard();
    } else {
        noteBox.classList.add('note-box');
        for (let i = 0; i < noteTitles.length; i++) {
            const noteTitle = noteTitles[i];
            const noteMessage = noteMessages[i];
            noteBox.innerHTML += renderHtmlCards(i, noteTitle, noteMessage);
        }
    }

    saveNote();
    saveBasket();
}

function renderBasket() {
    let basketBox = document.getElementById('render-trashbox');
    basketBox.innerHTML = '';

    for (let i = 0; i < basketTitles.length; i++) {
        const basketTitle = basketTitles[i];
        const basketMessage = basketMessages[i];

        basketBox.innerHTML += renderHtmlBasketCards(i, basketTitle, basketMessage);
    }
    saveBasket();
}

function addNote() {
    let addNoteTitle = document.getElementById('notetitle');
    let addNoteMessage = document.getElementById('notemessage');

    if (addNoteTitle.value == '' || addNoteMessage.value == '') {
        alert('Du Musst ein Titel und eine Naricht Eingebn');
    } else {
        noteTitles.push(addNoteTitle.value);
        noteMessages.push(addNoteMessage.value);
        renderNotes();
        closeAddNotes();
    } 

    document.getElementById('notetitle').value = '';
    document.getElementById('notemessage').value = '';
}

function saveNote() {
    let titleAsText = JSON.stringify(noteTitles);
    let messageAsText = JSON.stringify(noteMessages);

    localStorage.setItem('noteTitles', titleAsText);
    localStorage.setItem('noteMessages', messageAsText);
}

function loadNote() {
    let titleAsText = localStorage.getItem('noteTitles');
    let messageAsText = localStorage.getItem('noteMessages');

    if (titleAsText && messageAsText) {
        noteTitles = JSON.parse(titleAsText);
        noteMessages = JSON.parse(messageAsText);
    }
}

function saveBasket() {
    let basketTitlesAsText = JSON.stringify(basketTitles);
    let basketMessagesAsText = JSON.stringify(basketMessages);

    localStorage.setItem('basketTitles', basketTitlesAsText);
    localStorage.setItem('basketMessages', basketMessagesAsText);
}

function loadBasket() {
    let basketTitlesAsText = localStorage.getItem('basketTitles');
    let basketMessagesAsText = localStorage.getItem('basketMessages');

    if (basketTitlesAsText && basketMessagesAsText) {
        basketTitles = JSON.parse(basketTitlesAsText);
        basketMessages = JSON.parse(basketMessagesAsText);
    }
}

function searchNotes() {
    let filter = document.getElementById('search').value.toUpperCase();

    for (let i = 0; i < noteTitles.length; i++) {
        const noteTitle = noteTitles[i].toUpperCase();
        const noteMessage = noteMessages[i].toUpperCase();
        const noteElement = document.getElementById(`note-${i}`);

        if (noteTitle.includes(filter) || noteMessage.includes(filter)) {
            noteElement.classList.remove('dp-none');
        } else {
            noteElement.classList.add('dp-none');
        }
    }
}

function clearSearchNotes() {
    document.getElementById('search').value = '';
    searchNotes();
}

function deleteNote(i) {
    basketTitles.push(noteTitles[i]);
    basketMessages.push(noteMessages[i]);
    noteTitles.splice(i, 1);
    noteMessages.splice(i, 1);
    renderNotes();
    renderBasket();
}

function deleteBasketNote(i) {
    basketTitles.splice(i, 1);
    basketMessages.splice(i, 1);
    closeRllyTrashcan();
    renderBasket();
}

function restoreNote(i) {
    noteTitles.push(basketTitles[i]);
    noteMessages.push(basketMessages[i]);
    basketTitles.splice(i, 1);
    basketMessages.splice(i, 1);
    renderNotes();
    renderBasket();
}

function editNoteForm(i) {
    currentEditIndex = i;
    document.getElementById('editnotetitle').value = noteTitles[i];
    document.getElementById('editnotemessage').value = noteMessages[i];
    showEditNotes();
}

function editNote() {
    if (currentEditIndex !== null) {
        noteTitles[currentEditIndex] = document.getElementById('editnotetitle').value;
        noteMessages[currentEditIndex] = document.getElementById('editnotemessage').value;
        renderNotes();
        closeEditNotes();
        currentEditIndex = null;
    }
}

document.getElementById('search').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        searchNotes();
    }
});

document.getElementById('editnotebox').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        editNote();
    }
});

function showAddNotes() {
    document.getElementById('shownotecontainer').classList.remove('dp-none')
}

function closeAddNotes() {
    document.getElementById('shownotecontainer').classList.add('dp-none')
}

document.getElementById('shownotecontainer').addEventListener('click', function(event) {
    if (event.target === this) {
        closeAddNotes();
    }
});

function showTrashcan() {
    document.getElementById('showtrashcontainer').classList.remove('dp-none')
}

function closeTrashcan() {
    document.getElementById('showtrashcontainer').classList.add('dp-none')
}

document.getElementById('trashbox').addEventListener('click', function(event) {
    if (event.target === this) {
        closeTrashcan();
    }
});

function showRllyTrashcan(i) {
    document.getElementById('rllytrashcan').classList.remove('dp-none')
    document.getElementById('rllydelete').setAttribute('onclick', `deleteBasketNote(${i})`);
}

function closeRllyTrashcan() {
    document.getElementById('rllytrashcan').classList.add('dp-none')
}

document.getElementById('rllytrashcan').addEventListener('click', function(event) {
    if (event.target === this) {
        closeRllyTrashcan();
    }
});

function showEditNotes() {
    document.getElementById('showeditnotecontainer').classList.remove('dp-none')
}

function closeEditNotes() {
    document.getElementById('showeditnotecontainer').classList.add('dp-none')
}

document.getElementById('showeditnotecontainer').addEventListener('click', function(event) {
    if (event.target === this) {
        closeEditNotes();
    }
});



const array = [1,2,3,4,5,6,7,8,9];

function forSchleife() {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }
}