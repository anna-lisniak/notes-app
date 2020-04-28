const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes2.js')

yargs.version('1.0.0.0.0')

// add
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        smile: {
            describe: 'how do you think',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.addNote(argv.title, argv.smile)
    }
})

//remove

yargs.command({
    command: 'remove',
    describe:'remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.removeNote(argv.title)
    }
})

//list
yargs.command({
    command: 'list',
    describe:'list a note',
    handler: () => {
        notes.listNotes()
    }
})

//read
yargs.command({
    command: 'read',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    describe:'read a note',
    handler: (argv) => {
        notes.readNote(argv.title)
    }
})

yargs.parse()
// console.log(yargs.argv);
