const form = document.querySelector('form');
const input = document.querySelector('input');
const notes = document.querySelector('#notes');
const deleteAllBtn = document.querySelector('#delete-all');


form.addEventListener('submit', function(e) {
    e.preventDefault();
    const noteValue = input.value.trim();

    if (noteValue) {
        const newNotes = document.createElement('li');
        newNotes.innerText = noteValue;
        notes.appendChild(newNotes);
        input.value = '';
        
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.classList.add('danger-btn');
        newNotes.appendChild(deleteButton);
        
        deleteButton.addEventListener('click', function(){
            notes.removeChild(newNotes);
        });
        
        newNotes.addEventListener('dblclick', function(){
            newNotes.style.textDecoration = 'line-through';
        });
        
    }
});
deleteAllBtn.addEventListener('click',function(){
    notes.innerHTML = '';
})

// const form = document.querySelector('form');
// const input = document.querySelector('input');
// const notes = document.querySelector('#notes');
// const deleteAllBtn = document.querySelector('#delete-all');

// form.addEventListener('submit', function(e) {
//     e.preventDefault();
//     const noteValue = input.value.trim();

//     if (noteValue) {
//         const newNotes = document.createElement('li');
//         newNotes.innerText = noteValue;

//         const deleteButton = document.createElement('button');
//         deleteButton.innerText = 'Delete';
//         deleteButton.classList.add('danger-btn');
//         newNotes.appendChild(deleteButton);

//         deleteButton.addEventListener('click', function(){
//             notes.removeChild(newNotes);
//         });

//         newNotes.addEventListener('dblclick', function(){
//             newNotes.style.textDecoration = 'line-through';
//         });

//         notes.appendChild(newNotes);
//         input.value = '';
//     }
// });

// deleteAllBtn.addEventListener('click', function(){
//     notes.innerHTML = '';
// });







// const form = document.querySelector('form');
//         const input = document.querySelector('input');
//         const notes = document.querySelector('#notes');

//         form.addEventListener('submit', function(e) {
//             e.preventDefault();
//             const noteValue = input.value.trim();
            
//             if (noteValue !== '') {
//                 const newNote = document.createElement('li');
//                 newNote.innerText = noteValue;
                
//                 // Tambahkan tombol hapus pada setiap item
//                 const deleteButton = document.createElement('button');
//                 deleteButton.innerText = 'Delete';
//                 deleteButton.classList.add('danger-btn');
//                 newNote.appendChild(deleteButton);

//                 notes.append(newNote);
//                 input.value = '';

//                 // Event listener untuk garis tengah saat double-click
//                 newNote.addEventListener('dblclick', function() {
//                     newNote.style.textDecoration = 'line-through';
//                 });

//                 // Event listener untuk menghapus item saat tombol delete di-klik
//                 deleteButton.addEventListener('click', function() {
//                     notes.removeChild(newNote);
//                 });
//             }
//         });
