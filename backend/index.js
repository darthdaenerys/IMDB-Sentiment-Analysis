const express = require('express')
var cors = require('cors')
const app = express()
const path = require('path');
const { spawn } = require('child_process');
const port = 5000

app.use(cors())
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const pythonProcess = spawn('python', ['../predict.py']);

app.post('/query', async (req, res) => {
    const json = await req.body;

    try {
        pythonProcess.stdin.write(json.query+'\n');

        pythonProcess.stdout.once('data', (chunk) => {
            const generatedText = chunk.toString();
            res.status(200).json(JSON.stringify(generatedText));
        });

        pythonProcess.stderr.once('data', (data) => {
            res.status(500).send("Neutral, 0.00");
            console.log(data);
        });
    }
    catch(error){
        console.log(error);
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})