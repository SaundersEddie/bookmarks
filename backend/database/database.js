import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const database = mongoose.connection;
const DB_OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
process.env.NODE_ENV === "production" ? mongoose.connect(process.env.PROD_DB, DB_OPTIONS) : mongoose.connect(process.env.DEV_DB, DB_OPTIONS)

database.on("error", (err) => {
    console.log(`There was an error connecting to the database you nub: ${err}`);
});

database.once("open", () => {
    console.log(`You have successfully connected to your ${process.env.NODE_ENV} mongo database`);
});

export default database;
