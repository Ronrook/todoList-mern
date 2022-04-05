const {Schema, model} = require('mongoose');

const taskSchema = new Schema({
    title: String,
    description: {
        type: String,
        required: true,
    }, 
    state: {
        type: Boolean,
        default: false,
    },
},  {
    timestamps: true,   
})

module.exports = model('Task', taskSchema)
