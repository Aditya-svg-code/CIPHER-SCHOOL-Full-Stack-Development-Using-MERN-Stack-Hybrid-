const { connect } = require("mongoose");

const MONGO_URL = "mongodb+srv://adi_tya_28:Aditya2728%40@cluster0.3psg84k.mongodb.net"

const DB_NAME = 'cs-mern';

async function connectDb() {
    try {
        await connect(`${MONGO_URL}/${DB_NAME}`)
        console.log(`MongoDb connected.`);
    } catch (err) {
        console.error(err);
    }
}

connectDb();