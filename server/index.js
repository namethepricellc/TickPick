const express = require('express')
const app = express ()
const cors = require('cors')
const mongoose = require('mongoose')

app.use(cors())
app.use(express.json())

mongoose.connect('{MONGO_CONNECTION_STRING}')

app.post('/api/register', async (req, res) => {
    console.log(req.body)
    try {
        
    } catch(err) {

    }
    res.json({ status: 'ok'})
})

app.listen(1337, () => {
    console.log('Server Started on 1337')
})