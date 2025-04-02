import express from "express";

const app = express()

const port = 8080;

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            "id": 1,
            "title": "Why did the programmer go broke?",
            "content": "Because he used up all his cache!"
          },
          {
            "id": 2,
            "title": "Why do programmers prefer dark mode?",
            "content": "Because the light attracts too many bugs!"
          }
    ]
    res.send(jokes)
})

app.listen(port, () => console.log(`The server is running on port ${port}`))

// http://localhost:8080

export default app;