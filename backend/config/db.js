const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log('\x1b[30;42m%s\x1b[0m',`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('\x1b[30;41m%s\x1b[0m',`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;