const express = require('express');
const blogRouter = require('./routes/BlogRoutes');
const app = express();


app.use(express.json());
app.use("/api/blogs", blogRouter);

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});

const mongoose = require("mongoose");

// mongoose.connect(
//     process.env.MONGODB_URI || "mongodb://localhost/blogs",
//     {
//         userNewUrParser: true,
//         userUnifiedTopology: true,
//     },
//     (err) => {
//         if (err) {
//             console.log(err);
//     } else {
//         console.log("connected to Mongodb");
//     }
// }
// );
mongoose.connect('mongodb://localhost:27017/crud_mongodb');
module.exports =app;
