import { useEffect, useRef, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [formInput, setFormInput] = useState('')
  const [countScore, setCountScore] = useState(1)
  const [numberCompleted, setNumberCompleted] = useState(0)
  const completed = useRef(0)
  const score = useRef(1)
  const [selectedCountry, setSelectedCountry] = useState(null)  // Random country for display

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormInput('');
    console.log(formInput);
    if(formInput.toLowerCase() === selectedCountry.capital.toLowerCase()){
      setCountScore(5 * (score.current++))
      // i want to increment the current score by multiplication by 5
    } else{
      alert('Game over');
      window.location.href = '/'
    }
  }

  const fetchCountries = async () => {
    const response = await axios.get('http://localhost:3000');
    // setCountries(response.data);
    const randomCountry = response.data[Math.floor(Math.random() * response.data.length)];
    setSelectedCountry(randomCountry)

    setNumberCompleted(completed.current++)
  }

  useEffect(() =>{
    const fetchCountries = async () => {
      const response = await axios.get('http://localhost:3000');
      // setCountries(response.data);
      const randomCountry = response.data[Math.floor(Math.random() * response.data.length)];
      setSelectedCountry(randomCountry)
    }
    fetchCountries();
  }, [])

  return (
    <>
      <div className='generalContainer'>
        <h1 className='scoreBoard'>
          score: {countScore}
        </h1>
        <h1 className='completedBoard'>
          Number Completed:{numberCompleted}
        </h1>
        <div className='quizzContainer'>
          {/* Display the selected country */}
          {selectedCountry ? selectedCountry.country : 'Loading...'}
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
