require('./config/config');

const express = require('express')
const app = express()
const bodyParser = require('body-parser');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
 

app.get('/usuario', (req, res) => {
    res.json("get usuarios")
})

app.post('/usuario', (req, res) => {
    let body = req.body;
    if(body.nombre === undefined) {
        res.status(400).json({
            ok : false,
            msg : "el nombr es necesario"
        })
    }else {
        res.json({
            body
        })
    }
   
})

app.put('/usuario/:id', (req, res) => {
    let id = req.params.id;
    res.send({
        id : id
    })
})

app.delete('/usuario', (req, res) => {
    res.send("delete post")
})


app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`))   