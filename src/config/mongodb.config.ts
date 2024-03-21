export class MongoDBConfig {
    public static connect(){
        const mongoose = require('mongoose');
        const mongoDB = process.env.MONGODB_URL;
        mongoose.connect(mongoDB);
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'MongoDB connection error:'));
        db.once('open', function() {
            console.log("Connected to MongoDB")
        });
    }
}