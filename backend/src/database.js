const mongoose = require('mongoose');


const URI = process.env.MONGODB_URI;

mongoose.connect(URI, {
    useNewUrlParser:true,
    useUnifiedTopology: true,
    
    
})
    .then(db=>console.log('base de datos conectada con exito'))
    .catch(error=>console.log('No se puede conectar'))


module.exports = mongoose;

// const connection = mongoose.connection;

// connection.once('open', ()=>{
//     console.log('DB is connected');
// });

