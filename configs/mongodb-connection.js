const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://yh11445:yvRKvS8v1w3xCG7U@cluster0.ac4lt1a.mongodb.net/?retryWrites=true&w=majority";

module.exports = function (callback) {
    return MongoClient.connect(uri, callback);
}