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
  console.log(req)
  const city = new City({
    city: req.body.city
  })

  city.save().then(result => {
    console.log(result)
    res.json(city)
  })
})

app.delete('/api/cities/:id', (req, res) => {
  City.deleteOne()
    .then(result => {
      console.log(result)
      res.status(204).end()
    })
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})