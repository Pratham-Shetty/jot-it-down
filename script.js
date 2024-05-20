const saveBtn = document.getElementById('save-btn');
const noteTaker = document.getElementById('note-taker');

// Function to load notes from localStorage
function loadNotes() {
  const savedNotes = localStorage.getItem('notes');
  if (savedNotes) {
    noteTaker.value = savedNotes;
  }
}

// Function to save notes to localStorage
function saveNotes() {
  const noteContent = noteTaker.value;
  localStorage.setItem('notes', noteContent);
}

// Load notes on page load
loadNotes();

// Event listener for save button click
saveBtn.addEventListener('click', () => {
  saveNotes();
});

// Allow writing anywhere in the textarea without needing space
noteTaker.addEventListener('keydown', (event) => {
  // Check if the pressed key is Enter
  if (event.key === 'Enter') {
    // Prevent the default behavior of creating a new line
    event.preventDefault();
  }
});
