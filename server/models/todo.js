var mongoose = require('mongoose');

var Todo = mongoose.model('Todo',{
    text:{
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed:{
        type: Boolean,
        default: false
    },
    completedAt:{
        type: Number,
        default: null
    }
});

module.exports = {
    Todo
}

/*
var newTodo = new Todo({
    text: 'Cook Dinner'
});

newTodo.save().then((doc) => {
    console.log('todo', doc)
}, (e) => {
    console.log('Unable to save todo');
});


var next = new Todo({
    text: 'Akshit'
})

next.save();
*/
