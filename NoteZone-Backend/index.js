const connectTomongoose= require('./db');
const express = require('express')
var cors= require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
connectTomongoose();

app.use('/Notes', require('./routes/Notes'))
app.use('/Auth', require('./routes/Auth'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})