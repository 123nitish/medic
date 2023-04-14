const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/medic';

const connectToMongo = () =>{
    mongoose.connect(mongoURI, {

    }).then(() => console.log('Connected to Mongo Succefully')).catch((err) => {console.error(err); });
}

module.exports = connectToMongo;