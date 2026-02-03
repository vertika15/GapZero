const mongoose = require('mongoose');

let DB_AVAILABLE = false

const connectDB = async () => {
  try {
    const atlasUriCandidate =
      (process.env.ATLAS_URI && process.env.ATLAS_URI.startsWith('mongodb+srv://'))
        ? process.env.ATLAS_URI
        : (process.env.MONGO_URI && process.env.MONGO_URI.startsWith('mongodb+srv://'))
          ? process.env.MONGO_URI
          : null;

    const hasValidAtlas =
      atlasUriCandidate &&
      !atlasUriCandidate.includes('<db_password>') &&
      !/[<>]/.test(atlasUriCandidate);

    const uriToUse = hasValidAtlas
      ? atlasUriCandidate
      : (process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/gapzero');

    const conn = await mongoose.connect(uriToUse);
    DB_AVAILABLE = true
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    DB_AVAILABLE = false
    console.error(`MongoDB Connect Error: ${error.message}`)
  }
}

const isDbAvailable = () => DB_AVAILABLE

module.exports = { connectDB, isDbAvailable };
