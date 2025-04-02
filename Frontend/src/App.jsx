import { use, useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'



function App() {
  const [jokes, setJokes] = useState([]);


  useEffect(() => {
    axios.get('/api/jokes')
      .then((res) => {
        console.log("API Response:", res.data);
        setJokes(Array.isArray(res.data) ? res.data : res.data.jokes || []);
      })
      .catch((err) => {
        console.log("API Error:", err);
      });
  }, []);

  
  return (
    <>
      <h1>Mors is a nood coder</h1>
      <p>JOKES: {jokes.length}</p>

    {Array.isArray(jokes) &&
      jokes.map((joke, index) => (
        <div key={joke.id || index}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))
    }
    </>
  )
}

export default App
