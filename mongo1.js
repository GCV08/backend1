const note = new Note({
    content: process.argv[3],
    important: process.argv[4]
})

note.save().then(result => {
    console.log('Nota guardada')
    mongoose.connection.close()
})

/*
Note.find({}).then(result => {
    result.forEach(x => {
        console.log(x);
    })
    mongoose.connection.close()
})
*/