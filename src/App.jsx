import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getRandomNumber } from './getRandomNumber';
import Location from './components/Location';
import ResidentList from './components/ResidentList';
import Navbar from './components/Navbar';
import navbarImg from './assets/navbarRickM.png';
import Footer from './components/Footer';

const App = () => {
  const [locationInfo, setLocationInfo] = useState(null);
  const [idLocationValue, setIdLocationValue] = useState('');

  const getLocationRandom = () => getRandomNumber(1, 126);

  const loadInfo = async (idLocation) => {
    const url = `https://rickandmortyapi.com/api/location/${idLocation}`;

    try {
      const res = await axios.get(url);

      setLocationInfo(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const idLocationHandleChange = (e) => {
    const newvalue = e.target.value;
    if (/^\d{0,3}$/.test(newvalue)) setIdLocationValue(newvalue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (idLocationValue) loadInfo(idLocationValue);
    else loadInfo(getLocationRandom());
  };
  useEffect(() => {
    loadInfo(getLocationRandom());
  }, []);

  return (
    <div className="bg-neutral-800 min-h-screen flex flex-col justify-center items-center text-white">
      <div>
        <Navbar brand={navbarImg} />
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className="text-black rounded shadow-md w-16 bg-gray-300 py-1 text-center "
          type="search"
          name="id-location"
          value={idLocationValue}
          onChange={idLocationHandleChange}
        />

        <input
          className="bg-blue-400 px-6 py-1  m-3 rounded shadow-md focus:ring hover:bg-azure-radiance-300 transition-all active:transform active:translate-y-1"
          type="submit"
          value="Search"
        />
      </form>
      <div className=" w-3/4">
        {locationInfo && <Location {...locationInfo} />}
        {locationInfo && <ResidentList residents={locationInfo.residents} />}
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
