const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
  const client = new MongoClient(
    'mongodb://127.0.0.1:27017/shop'
    // 'mongodb+srv://othnielcalixte_db_user:D4UtheqERFITAuM3@cluster0.fekzdfl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    // {
    //   family: 4, // <--- ADD THIS LINE (Forces IPv4)
    // }
  );

  client
    .connect()
    .then(client => {
      console.log('Connected!');
      _db = client.db();
      callback();
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
