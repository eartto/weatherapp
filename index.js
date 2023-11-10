const express = require('express')

const app = express()

app.use(express.static('build'))
app.use(express.json())

const City = require('./models/city')

app.get('/', (req, res) => {
  res.send()
})

app.get('/api/cities', (req, res) => {
  City.find({}).then(cities => {
    res.json(cities)
  })
})

app.post('/api/cities', (req, res) => {
  const city = new City({
    city: req.body.city
  })

  city.save().then(result => {
    console.log(result)
    res.json(city)
  })
})

app.delete('/api/cities', (req, res) => {
  City.findOneAndDelete({},{"sort": { "_id": -1 }}).then(result => {
    console.log(result)
  })
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})