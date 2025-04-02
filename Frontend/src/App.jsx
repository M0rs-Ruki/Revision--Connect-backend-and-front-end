import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'


function App() {
  const [jokes , setJokes] = useState([])


  useEffect(() => {
    axios.get('/api/jokes')
    .then(response => {
      setJokes(response.data)
    })
    .catch(error => {
      console.log(error);
      
    })
  },[])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Mors Ruki</h1>
      <p className="read-the-docs">
        Mors is a nood coder lol !!!!!!!!1
      </p>
      <h3>{jokes.length}</h3>

      {
        jokes.map((joke,index) => (
          <div key={jokes.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }

    </>
  )
}

export default App
