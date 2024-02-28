const mongoose = require("mongoose");

const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "backendapi",
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => console.log("Database connected"))
        .catch((err) => console.error("Database connection error:", err));
};

module.exports = connectDB;
