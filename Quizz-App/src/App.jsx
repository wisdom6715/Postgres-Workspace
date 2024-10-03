import { useState } from 'react'
import './App.css'

function App() {
  const [country, setCountry] = useState('')
  const handleSubmit = (e) =>{
    e.preventDefault();
    setCountry('');
    console.log(country);
    
  }
  return (
    <>
      <div className='generalContainer'>
        <form action="POST" onSubmit={handleSubmit}>
          <input onChange={(e) => setCountry(e.target.value)} value={country} />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </>
  )
}

export default App
