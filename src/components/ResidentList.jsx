import React from 'react';
import ResidentInfo from './ResidentInfo';

const ResidentList = ({ residents }) => {
  return (
    <section>
      <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-12">
        {residents.map((resident) => (
          <ResidentInfo key={resident} urlResident={resident} />
        ))}
      </div>
    </section>
  );
};

export default ResidentList;
