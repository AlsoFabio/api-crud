const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

require('dotenv').config();

const app = express();

const port = process.env.PORT

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(require('./src/routes/rutas'))


app.listen(port, () => { console.log(`http://localhost:${port}`) })