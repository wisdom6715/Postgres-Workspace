import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [formInput, setFormInput] = useState('')
  const [selectedCountry, setSelectedCountry] = useState(null)  // Random country for display

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormInput('');
    console.log(formInput);
  }
  const fetchCountries = async () => {
    const response = await axios.get('http://localhost:3000');
    // setCountries(response.data);
    const randomCountry = response.data[Math.floor(Math.random() * response.data.length)].country;
    setSelectedCountry(randomCountry)
    // // Only select a random country once after the data is fetched
    // if (response.data.length > 0 && !selectedCountry) {
    //   const randomCountry = response.data[Math.floor(Math.random() * response.data.length)].country;
    //   setSelectedCountry(randomCountry); // Set the selected random country once
    // }
  }

  return (
    <>
      <div className='generalContainer'>
        <div className='quizzContainer'>
          {/* Display the selected country */}
          {selectedCountry ? selectedCountry : 'Loading...'}
          <form onSubmit={handleSubmit} className='formContainer'>
            <input onChange={(e) => setFormInput(e.target.value)} value={formInput} />
            <button type='submit' onClick={fetchCountries}>Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App;
