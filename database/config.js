const { default: mongoose } = require('mongoose');
const moongoose = require('mongoose')

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log("mongo online!");
    } catch (error) {
        console.log(error);
        throw new Error('Error al inicial la base de datos');
    }
}

module.exports = {
    dbConnection
}