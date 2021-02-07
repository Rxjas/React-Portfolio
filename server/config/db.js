const mongoose = require("mongoose");

async function db () {
    try{
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/contacts_db', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('👾 Successfully connected to Database');
    }
    //if there is any error then log it
    catch (err) {
        console.log('Error Connecting to DB 🚬')
        console.log(err);
    }
}

module.exports = db;