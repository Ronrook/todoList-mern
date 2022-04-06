const {Schema, model} = require('mongoose');

const taskSchema = new Schema({
    title: String,
    description: {
        type: String,
        required: true,
    }, 
    completed: {
        type: Boolean,
        default: false,
    },
},  {
    timestamps: true,   
})

module.exports = model('Task', taskSchema)
