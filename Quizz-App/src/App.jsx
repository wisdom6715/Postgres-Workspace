import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'


function App() {
  const [formInput, setFormInput] = useState('')
  const [country, setCountry] = useState([])
  const handleSubmit = async(e) =>{
    e.preventDefault();
    setFormInput('');
    console.log(formInput);
    
  }
  useEffect(() =>{
    const fetchCOuntries = async() =>{
      const response = await axios.get('http://localhost:3000')
      setCountry(response.data);
      console.log(response.data);
    }
    fetchCOuntries();
  }, [])
  return (
    <>
      <div className='generalContainer'>
        <div className='quizzContainer'>
          <h1>{country.length > 0 ?
            country[Math.floor(Math.random() * country.length)].country: <p>loading.....</p> }
          </h1>
          <form onSubmit={handleSubmit} className='formContainer'>
            <input onChange={(e) => setFormInput(e.target.value)} value={formInput} />
            <button type='submit'>Submit</button>
          </form>
        </div>
        
      </div>
    </>
  )
}

export default App
