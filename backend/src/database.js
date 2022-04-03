const mongoose = require('mongoose');


const URI = 'mongodb://localhost/tasklist';

mongoose.connect(URI, {
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify: false
})
    .then(db=>console.log('base de datos conectada'))
    .catch(error=>console.log('No se puede conectar'))


module.exports = mongoose;

// const connection = mongoose.connection;

// connection.once('open', ()=>{
//     console.log('DB is connected');
// });

