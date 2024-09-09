const express = require('express')

const app = express()

const data = []

app.use(express.json())
app.get('/', (req, res) => {
    res.send('hello world!')
})
app.post('/', (req, res) => {
    data[data.length] = {
        id: subjects.length,
        tutor: req.body.tutor,
        name: req.body.name,
        classes: req.body.classes,
        date: req.body.date
    }
})

app.listen(4000, () => console.log('Server started!'))
