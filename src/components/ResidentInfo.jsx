import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ResidentInfo = ({ urlResident }) => {
  const [residentInfo, setResidentInfo] = useState(null);

  const loadResidentInfo = async () => {
    try {
      const res = await axios.get(urlResident);

      setResidentInfo(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadResidentInfo();
  }, []);

  return (
    <>
      {residentInfo && (
        <article>
          <div>
            <img
              className="rounded-3xl"
              src={residentInfo.image}
              alt={residentInfo.name}
            />
          </div>
          <h3 className="font-bold">{residentInfo.name} </h3>
          <ul>
            <li>
              <span className="font-bold text-blue-300">Specie: </span>
              {residentInfo.species}
            </li>
            <li>
              <span className="font-bold text-blue-300">Status: </span>
              {residentInfo.status}
            </li>
            <li>
              <span className="font-bold text-blue-300">Origen: </span>
              {residentInfo.origin.name}
            </li>
            <li>
              <span className="font-bold text-blue-300">Appearances in episodes: </span>
              {residentInfo.episode.length}
            </li>
          </ul>
        </article>
      )}
    </>
  );
};

export default ResidentInfo;
