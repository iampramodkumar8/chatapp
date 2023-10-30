const mongoose = require("mongoose");

const connectDB = async () => {
 const mongoURI = "mongodb+srv://pramod:ravikaranp@cluster0.7cdy3qu.mongodb.net/"
  try {
    const conn = await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true, // Corrected typo in 'useUnifiedTopology'
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error`);
    process.exit(1); 
  }
};

module.exports = connectDB;
