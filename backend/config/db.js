const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const data = await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`Mongodb connected with server: ${data.connection.host}`)
    } catch (err) {
        console.log(err)
    }
}
module.exports = connectDB