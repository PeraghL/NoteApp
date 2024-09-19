function renderHtmlEmptyCard() {
    return `
          <div class="empty-card">
              <h3>It's too empty here.</h3>
          </div>
      `;
  }
  
  function renderHtmlCards(i, noteTitle, noteMessage) {
    return `
        <div class="note-card" id="note-${i}">
            <h3>${noteTitle}</h3>
            <p>${noteMessage.replace(/\n/g, '<br>')}</p>
            <button onclick="editNoteForm(${i})">Edit</button>
            <button onclick="deleteNote(${i})">Delete</button>
        </div>
    `;
}

function renderHtmlBasketCards(i, basketTitle, basketMessage) {
    return `
        <div class="note-card">
            <h3>${basketTitle}</h3>
            <p>${basketMessage.replace(/\n/g, '<br>')}</p>
            <button onclick="restoreNote(${i})">Restore</button>
            <button onclick="showRllyTrashcan(${i})">Full Delete</button>
        </div>
    `;
}