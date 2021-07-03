const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

// mongoose.set('useNewUrlParser', true);

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

require('./app/routes/note.routes.js')(app);
// const noteRoute=require('./app/routes/note.routes.js')
// app.use('/',noteRoute)

app.listen(9000, () => {
    console.log("Server is listening on port 3000");
});

