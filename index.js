const express = require('express')
const cors = require('cors')

const app = express()

let subjects = [ 
    {
        id: 0,
        name: 'Math',
        tutor: 'Bobrova Tatyana',
        classes: '8, 9, 10, 11',
        date: '1 September 2024'
    },
    {
        id: 1,
        name: 'Russian',
        tutor: 'Haritonova Anna',
        classes: '8, 9, 10, 11',
        date: '1 September 2024'
    }
]

app.use(express.json())
app.get('/', (req, res) => {
    res.send(JSON.stringify(data))
})
app.post('/', (req, res) => {
    subjects[subjects.length] = {
        id: subjects.length,
        tutor: req.body.tutor,
        name: req.body.name,
        classes: req.body.classes,
        date: req.body.date
    }
})

app.listen(4000, () => console.log('Server started!'))
