//require mongoose to create the schema
const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    
    name: {
        type: String, 
        required: true, 
        trim: true 
    },

    email: {
        type: String, 
        required: true, 
        trim: true
    },

    message: {
        type: String,
        required: true,
        trim: true
    },

    date: {
        type: Date,
        default: Date.now,
        required: true
    }
});

const Contact = mongoose.model('Contact', ContactSchema);

module.exports = Contact;