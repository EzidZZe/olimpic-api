const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

const subjects = [{
    id: 0,
    name: 'Math',
    classes: '8 - 11',
    school: 'Kell',
    date: '1 sep 2024',
    register: 'http://123.com'
},
{
    id: 0,
    name: 'Russian',
    classes: '1 - 4',
    school: 'Kell',
    date: '1 sep 2024',
    register: 'http://456.com'
}]

app.get('/', (req, res) => {
    res.send('<h1>Hi in backend!</h1>')
})
app.get('/data', (req, res) => {
    res.send(JSON.stringify(subjects))
})

app.listen(4000, () => console.log('Server started!'))