var mongoose = require('mongoose');

//mongodb://mcn:mcn@ds121575.mlab.com:21575/arqsi2 // connection string para MongoDB local
//mongoose.connect('mongodb://<username>:<password>@<address>.mlab.com:<databasename>', { useMongoClient: true });
mongoose.connect('mongodb://arqsiUser:arqsi12345678@ds016138.mlab.com:16138/arqsi');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
console.log("we're connected!");
});
mongoose.Promise = global.Promise;

module.exports = mongoose;