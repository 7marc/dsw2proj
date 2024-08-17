
const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('./controllers');
//const routes = require('./routes');
const app = express();
const port = 3000;

app.use(bodyParser.json());

//app.use('/api', routes);

app.use(express.json());

app.get('/', (req, res) => res.send('hello world!'));


app.use('/clientes', controllers.clientes);
app.use('/maquinas', controllers.maquinas);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));