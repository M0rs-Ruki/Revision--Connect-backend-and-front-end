import express from 'express';

const app = express()

app.get('/', (req, res) => {
    res.send("Mors is a nood coder")
});

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
    res.json(jokes)
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
})

export default app;
