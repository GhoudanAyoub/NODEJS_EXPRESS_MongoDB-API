const mongoose = require('mongoose');

const connectDB = async () => {
    try {
<<<<<<< HEAD
        const conn = await mongoose.connect(process.env.MONGO_URI);
=======
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
>>>>>>> fb9bae0d6e14d2635f741f9dfd9e562ed1f1c903
        console.log(`Mongo DB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;

