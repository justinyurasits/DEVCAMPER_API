const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    //these statements are to eliminate errors
    useNewUrlParser: true,
    //useCreateIndex: true,
    //useFindAndModify: false,
  });
  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

module.exports = connectDB;
