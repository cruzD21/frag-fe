
// import { Route, Routes } from 'react-router-dom';
// import Frag from './pages/frag';
import './index.css'
import Searchbar from "./components/Searchbar";


// 
export default function App() {
  
  return (
    <div className=" bg-[url('/background.jpg')] bg-cover bg-no-repeat flex items-start sm:items-center justify-center h-screen text-white">
      <div className="text-center mt-48 sm:m-auto ">
          <h1 className="text-4xl font-aeonik sm:text-6xl  mb-4">The Only <span className="font-editors">fragrance</span></h1>
          <h1 className="text-4xl font-aeonik sm:text-6xl">Database you need</h1>
          <div className="mt-4"> {/* Margin-top for spacing */}
              {/* <button
                className="float-left"
                 onClick={() => console.log("clicked")}>
                  All Fragrances
              </button> */}
              <Searchbar/>
          </div>
      <h4 className="text-[#C7E98C]	text-2xl mt-4"> 80,000+ fragrances at your hand </h4>

      </div>
    </div>
  )
};

