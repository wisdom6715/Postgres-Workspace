import { useEffect, useRef, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [formInput, setFormInput] = useState('')
  const score = useRef(1)
  const [selectedCountry, setSelectedCountry] = useState(null)  // Random country for display

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormInput('');
    console.log(formInput);
    if(formInput.toLowerCase() === selectedCountry.toLowerCase()){
      const currentScore = 5 * (score.current++);
      // i want to increment the current score by multiplication by 2
      alert(currentScore, 'points!');
      
    } else{
      alert('Game over');
    }
  }
  const fetchCountries = async () => {
    const response = await axios.get('http://localhost:3000');
    // setCountries(response.data);
    const randomCountry = response.data[Math.floor(Math.random() * response.data.length)].country;
    setSelectedCountry(randomCountry)
  }
  useEffect(() =>{
    const fetchCountries = async () => {
      const response = await axios.get('http://localhost:3000');
      // setCountries(response.data);
      const randomCountry = response.data[Math.floor(Math.random() * response.data.length)].country;
      setSelectedCountry(randomCountry)
    }
    fetchCountries();
  }, [])
  return (
    <>
      <div className='generalContainer'>
        <div className='quizzContainer'>
          {/* Display the selected country */}
          {selectedCountry ? selectedCountry : 'Loading...'}
          <form onSubmit={handleSubmit} className='formContainer'>
            <input onChange={(e) => setFormInput(e.target.value)} value={formInput} required/>
            <button type='submit' onClick={fetchCountries}>Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App;
