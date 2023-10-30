const mongoose = require('mongoose')

const password = process.argv[2]

const url = `mongodb+srv://eartto:${password}@cluster0.qlqkyil.mongodb.net/weatherApp?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)
mongoose.connect(url)

const citySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

const City = mongoose.model('City', citySchema)

const city = new City({
    name: 'Helsinki',
    required: true
})

city.save().then(result => {
    console.log('test success')
    mongoose.connection.close()
})