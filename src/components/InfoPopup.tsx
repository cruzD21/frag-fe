import React from 'react';

const InfoPopup = ({ show }) => {
  return (
    show && (
      <div className="absolute right-full top-0 mt-2 w-48 p-4 bg-white text-black rounded-lg shadow-lg">
        <p>Type your fragrance keyword in the search bar to find the best matches in our database.</p>
      </div>
    )
  );
};

export default InfoPopup;
