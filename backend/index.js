const express = require('express');
const app = express();
const cors = require("cors");

const mongoose = require('mongoose');

const port = process.env.PORT || 5000;
require('dotenv').config()

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173", 'https://book-nest-d4lt.vercel.app']
}))

const bookRoutes = require('./src/books/book.route')
app.use("/api/books", bookRoutes)
app.use("/app/orders", orderRoutes)
app.use("/api/auth", userRoutes)
app.use("/api/admin", adminRoutes)

async function main() {
    await mongoose.connect(process.env.DB_URL);
    app.use("/", (req, res) => {
        res.send("BookNest is up and running!");
    })
}

main().then(() => console.log("MongoDB connected!")).catch(err => console.log(err));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})