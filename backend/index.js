const express = require('express')
var cors = require('cors')
const app = express()
const path = require('path');
const port = 5000

app.use(cors())
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('Hello World!')
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})