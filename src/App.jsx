import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios';
import header from './assets/Images/header_rickAndMorty.png';
import InfoResidents from './components/InfoResidents';

function App() {

  const [location, setLocation] = useState({});
  const [searchId, setSearchID] = useState("");

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 126) + 1;
    axios.get(`https://rickandmortyapi.com/api/location/${randomId}/`)
      .then(res => setLocation(res.data));
      
  }, [])

  //console.log(location)

  const searchLocation = () =>{
    if (searchId <= 126 ){
      axios.get(`https://rickandmortyapi.com/api/location/${searchId}/`)
        .then(res => setLocation(res.data));
        setSearchID("");
    } else {
      alert ("Id must be less than 126")
    }
  }

  return (
    <div className="App">
        <header className='banner'>
          <img src={header} alt="" />
        </header>
        <div className='button__search'><input type="number"
        placeholder='type a number between 1 to 126'
        value={searchId}
        onChange={e => setSearchID(e.target.value)}
        />
        <button onClick={searchLocation}>Search</button></div>
        <h1 className='tittle__location'>{location.name}</h1>
        <ul className='list-info-location'>
            <li>
              <b>Type: </b> {location.type}
            </li>
            <li>
              <b>Dimension: </b> {location.dimension}
            </li>
            <li>
              <b>Residents: </b> {location.residents?.length}
            </li>
        </ul>
        <ul>
        {
          location.residents?.map((residents) => (
            <InfoResidents key={residents} url={residents}/>
          ))
        }
        </ul>
        
    </div>
  )
}

export default App
