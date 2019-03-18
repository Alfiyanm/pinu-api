var mongoose = require('mongoose');

var Name = mongoose.model('Name', {
    nama: {
        type: String,
        required: true,
        minlength: 3,
        trim: true
    }
});

module.exports = {Name}