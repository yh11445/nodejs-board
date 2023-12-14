const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://<username>:<password>@cluster0.ac4lt1a.mongodb.net/?retryWrites=true&w=majority";

module.exports = function (callback) {
    return MongoClient.connect(uri, callback);
}
