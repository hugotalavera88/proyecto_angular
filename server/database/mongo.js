const MongoClient   = require('mongodb').MongoClient;
const ObjectID      = require('mongodb').ObjectID;
const q             = require("q");

//const url = 'mongodb://app:BN15doPDRWCYfq3Q@cluster0-shard-00-00-q3ilt.mongodb.net:27017,cluster0-shard-00-01-q3ilt.mongodb.net:27017,cluster0-shard-00-02-q3ilt.mongodb.net:27017/app?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';
//const url = 'mongodb://localhost:27017/app';
const url = 'mongodb://admin:s3ssd2gg@cluster0-shard-00-00-avpon.mongodb.net:27017,cluster0-shard-00-01-avpon.mongodb.net:27017,cluster0-shard-00-02-avpon.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin'
// Connect
const connection = (closure) => {
    return MongoClient.connect(url, (err, db) => {
        if (err) return console.log(err);
        closure(db);
    });
};

const MongoModule = {

  find: (collection, query, fields ) => {
    var deferred = q.defer();
    connection((db) => {
        db.collection(collection)
            .find(query, fields)
            .toArray()
            .then((obj) => {
                deferred.resolve({"status": 200, "body": obj});
                db.close();
            })
            .catch((err) => {
                deferred.reject({"status": 500, "body": {}, "error": err});
                db.close();
            });
    });
    return deferred.promise;
  },

  findOne: (collection) => {
    var deferred = q.defer();
    connection((db) => {
        db.collection(collection)
            .findOne()
            .then((obj) => {
                deferred.resolve({"status": 200, "body": obj});
                db.close();
            })
            .catch((err) => {
                deferred.reject({"status": 500, "body": {}, "error": err});
                db.close();
            });
    });
    return deferred.promise;
  },

  insertOne: (collection, obj) => {
    var deferred = q.defer();
    connection((db) => {
        db.collection(collection)
            .insertOne(obj)
            .then((obj) => {
                deferred.resolve({"status": 200, "body": obj});
                db.close();
            })
            .catch((err) => {
                deferred.reject({"status": 500, "body": {}, "error": err});
                db.close();
            });
    });
    return deferred.promise;
  },

  insertMany: (collection, obj) => {
    var deferred = q.defer();
    connection((db) => {
        db.collection(collection)
            .insertMany(obj)
            .then((obj) => {
                deferred.resolve({"status": 200, "body": obj});
                db.close();
            })
            .catch((err) => {
                deferred.reject({"status": 500, "body": {}, "error": err});
                db.close();
            });
    });
    return deferred.promise;
  },

  updateOne: (collection, obj) => {
    var deferred = q.defer();
    var id = obj._id;
    delete obj._id;

    connection((db) => {
        db.collection(collection)
            .updateOne({_id: new ObjectID(id)}, obj)
            .then((obj) => {
                deferred.resolve({"status": 200, "body": obj});
                db.close();
            })
            .catch((err) => {
                deferred.reject({"status": 500, "body": {}, "error": err});
                db.close();
            });
    });
    return deferred.promise;
  },

  deleteOne: (collection, id) => {
    var deferred = q.defer();

    connection((db) => {
        db.collection(collection)
            .deleteOne({_id: new ObjectID(id)})
            .then((obj) => {
                deferred.resolve({"status": 200, "body": obj});
                db.close();
            })
            .catch((err) => {
                deferred.reject({"status": 500, "body": {}, "error": err});
                db.close();
            });
    });
    return deferred.promise;
  },
}

module.exports = exports = MongoModule;
