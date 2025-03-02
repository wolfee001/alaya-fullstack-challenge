const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    name: { type: 'String', required: true },
    userId: { type: 'String', required: true },
    title: { type: 'String', required: true },
    content: { type: 'String', required: true },
    slug: { type: 'String', required: true },
    cuid: { type: 'String', required: true },
    img: { type: 'String', required: false },
    dateAdded: { type: 'Date', default: Date.now, required: true },
});

module.exports = mongoose.model('Post', postSchema);
