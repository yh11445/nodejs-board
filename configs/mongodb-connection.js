const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://<username>:<password>@<cluster>/?retryWrites=true&w=majority";

module.exports = function (callback) {
    return MongoClient.connect(uri, callback);
}
