const mongoose = require("mongoose");

const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "backendapi",
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then((c) => console.log(`Database connected ${c.connection.host}`))
        .catch((err) => console.error("Database connection error:", err));
};

module.exports = connectDB;
