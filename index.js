const express = require('express')
const app = express()

app.use(express.static('build'))

app.get('/', (req, res) => {
    res.send()
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})