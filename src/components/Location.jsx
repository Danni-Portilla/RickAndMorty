import React from 'react';

const Location = ({ name, type, dimension, residents }) => {
  return (
    <section className="text-center">
      <h2 className=" text-3xl my-3 font-bold">{name}</h2>
      <ul className="flex justify-center gap-9 py-8">
        <li>
          <span className="font-bold text-blue-300 text-xl">Type:</span> {type}
        </li>
        <li>
          <span className="font-bold text-blue-300 text-xl">Dimension:</span> {dimension}
        </li>
        <li>
          <span className="font-bold text-blue-300 text-xl">Population:</span> {residents.length}
        </li>
      </ul>
    </section>
  );
};

export default Location;
