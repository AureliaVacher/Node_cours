const yargs = require ('yargs');
//module installé
const notes = require('./utils/notes')

yargs.command({
    command: "add",
    describe: "Ajouter une note",
    builder(){
        title: {
            describe: 'Titre de la note';
            demandOption: true;
            type: 'string'
        }
        body: {
            describe: 'Description de la note';
            demandOption: true;
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body);
    }
});

yargs.parse();