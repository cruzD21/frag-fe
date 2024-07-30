
const InfoPopup = ({ show }:any) => {
  return (
    show && (
      <div className="absolute bottom-full right-0 mb-2 w-48 p-4 bg-white text-black rounded-lg shadow-xl">
        <p>Type your fragrance keyword in the search bar to find the best matches in our database. You can search by name, note, accord or gender.</p>
      </div>
    )
  );
};

export default InfoPopup;
