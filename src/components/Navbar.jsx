import React from 'react';

const Navbar = ({ brand }) => {
  return (
    <nav>
      <div className="my-1.5">
        <img src={brand} alt="navbarOne" />
      </div>
    </nav>
  );
};

export default Navbar;
