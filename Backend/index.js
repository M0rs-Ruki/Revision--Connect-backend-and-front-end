import express from 'express'

const app = express()

const port = process.env.PORT || 8080

app.get('/', (req, res) => {
    res.send(`Hello world `)
});

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id:1,
            title: "A joke",
            content: "This is a joke",
        },
        {
            id:2,
            title: "Another joke",
            content: "This is another joke",
        }
    ]
    res.send(jokes)
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// http://localhost:8080/