import express from 'express'

const app = express()

app.get('/hello', (req, res) => {
    res.send('HELLO!!!😍👍👌😘🙌')
})

const port = 3001
app.listen(port, () => {
    console.log(`my app is running on http://localhost:${port}`);
})