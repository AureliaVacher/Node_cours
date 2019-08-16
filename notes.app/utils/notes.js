// ecrire l'application qui va gerer les notes
const fs = require('fs');

const loadNotes= function() {
    try {
        const notes = fs.readFileSync('./notes.json');
        return JSON.parse(notes);
    } catch (e) {
        return[];
    }
   };

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function(note, index, notes){
        return title === note.title;
    });
    if (duplicateNotes.length === 0) {
        //Create note
        notes.push({
            title: title,
            body: body
        });
        const newNotes = JSON.stringify(notes);
        fs.writeFileSync('./notes.json', newNotes);
    } else {
        // log note exist
        console.log("Note with same title exist");
    }
    console.log(duplicateNotes);
    // console.log("title ", title);
    // console.log("body ", body)
};

module.exports = { 
    addNote: addNote
}