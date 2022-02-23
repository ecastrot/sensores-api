var express = require('express') //llamamos a Express
var app = express()

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

const data = [];

var port = process.env.PORT || 8081  // establecemos nuestro puerto

app.get('/', function(req, res) {
  res.json({ mensaje: '¡Hola Mundo!' })   
})

app.get('/medidas', function(req, res) {
    res.json(data)   
  })

app.post('/sensor', function(req, res) {
    if (data.length == 10){
        data.pop();
    }
    data.unshift(req.body.temperatura);
    res.json({ mensaje: Date.now() })   
  })

// iniciamos nuestro servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)