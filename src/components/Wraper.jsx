import React from 'react';
import { useState } from 'react';

const Wraper = ({  }) => {
  const [quantity, setQuantity] = useState(9);
  const [currenPage, setCurrenPage] = useState(1);
  const totalPages = Math.ceil(locationInfo.length / quantity);

  const lowerLimit = (currenPage - 1) * quantity;
  const upperLimit = currenPage * quantity - 1;
  const pageSlice = locationInfo.slice(lowerLimit, upperLimit + 1);

  const nextPage = () => {
    const newPage = currenPage + 1;
    if (newPage <= totalPages) setCurrenPage(newPage);
  };

  const prevPage = () => {
    const newPage = currenPage - 1;
    if (newPage >= 1) setCurrenPage(newPage);
  };
  return (
    <div>
      <button className="bg-orange-400 px-3 gap-3" onClick={prevPage}>
        Previous
      </button>
      <button className="bg-orange-200 px-3" onClick={nextPage}>
        Next
      </button>
    </div>
  );
};

export default Wraper;
