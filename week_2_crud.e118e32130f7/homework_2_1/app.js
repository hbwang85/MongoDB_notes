var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/weather', function(err, db){
	if (err) throw err;
	var query = {'Wind Direction':{'$gte':180, '$lte':360}};
	var option = {'Temperature':1};
	var projection = {'State':1, '_id':0};

	var cursor = db.collection('data').find(query);
	cursor.sort('Temperature', 1);

	cursor.each(function(err, doc) {
        if(err) throw err;
        if(doc == null) {
            return db.close();
        }
        console.dir(doc);
    });

});
