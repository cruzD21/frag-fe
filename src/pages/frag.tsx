import React from "react";
import axios from "axios";
import { Frag } from "../types";
import { useLoaderData } from "react-router-dom";
// import { FragParams } from "../types";



export async function loader({params}:any) {
    //maybe return all page info needed via rpc calls
    const fragOutput = await axios.get(`http://localhost:5000/frag/${params.fragID}`)
  return fragOutput;
}

// async function fetchFrag(fragID: string): Promise<void> {

// }
interface FragranceNotes {
  top_notes: string[];
  middle_notes: string[];
  base_notes: string[];
}


export default function FragPage() {
    const { data }: any = useLoaderData()
    const [frag] = React.useState<Frag>(data[0])
    const [fragName, setFragName] = React.useState('');
    const [genderClass, setGenderClass] = React.useState('');
    const [noteLevels, setNoteLevels] = React.useState<FragranceNotes | null>(null)

    React.useEffect(() => {
    // Define the regular expression to match the various end phrases
    const fetchNotes = async () => {
      const notes = await axios.get(`https://frag-backend-w7rr5fd5oa-uc.a.run.app/notes/${frag.fragrance_id}`)
      setNoteLevels(notes.data)
    }
    classifyFragGender()
    formatFragName()
    fetchNotes()
    // console.log(noteLevels)
    


    }, [data]); 

    // const fetchNotes = async () => {
    //   const { data } = await axios.get(`http://localhost:5000/notes/${frag.fragrance_id}`)
    //   setNoteLevels(data[0])
      
    //   // const noteLevels = data[0]
    // }
    

    const formatFragName = () => {
      const index = frag.name.indexOf(frag.house_name);
      let result = frag.name;
      if (index !== -1) {
        // Extract the part before string2
        result = frag.name.substring(0, index);
      }
      setFragName(result)
    }

    const classifyFragGender = () => {
      const regex = /(for (women and men|women|men))/;
      const match = frag.name.match(regex);
      if (match) {
        // If a match is found, split the string
        setFragName(frag.name.substring(0, match.index).trim());
        setGenderClass(match[0]);  // The matched string (e.g., "for women and men")
      } else {
        // If no match is found, handle accordingly
        setFragName(frag.name);
        setGenderClass("");
      
      }
    }

    
    
    
    return (
      <div className=" bg-[url('/pared-blanca.jpg')] bg-repeat ">
      {/* Top Header */}
        <header className="text-center py-10">
          <h1 className="text-6xl  text-gray-800 font-editors">{fragName}</h1>
          <h2 className="text-2xl text-gray-800 font-aeonik">By {frag.house_name}</h2>
          <p className="text-m font-aeonik">{genderClass}</p>
        </header>
        
        {/* Three Sections Below */}
        <section className=" flex flex-col md:grid md:grid-cols-3 border-t border-black ">
          {/* Section 1 */}
          <div className="order-2 md:order-1 bg-black bg-opacity-15 relative border-t sm:border-r border-black p-4 sm:p-10">
            {/* <img className="absolute inset-0 h-full w-full object-cover opacity-50" src="../../public/otroblanco.jpg" alt="Fragrance Background" /> */}
            <div className="relative z-10 p-4">
              <h2 className="text-4xl font-aeonik">Discover the Essence</h2>
              <p>{frag.description}</p>
              
            </div>
            
          </div>
          

          {/* Section 2 */}
          <div className="order-1 md:order-2 ">
            <div className=" flex justify-center items-center">
              <img src={frag.frag_img} alt="Product Image"  />
            </div>
          </div>


          {/* Section 3 */}
          <div className="order-3 md:order-3 relative  border-t sm:border-l border-black">
            <img className="absolute inset-0 h-full w-full object-cover " src="/greenbg.jpg" alt="Fragrance Background" />
            <div className="relative z-10 p-4 sm:p-10 bg-gray-700 bg-opacity-20 h-full">
              <h2 className="text-4xl  font-aeonik">Notes in {fragName}</h2>
              
              {noteLevels && (
                <div className="flex mt-4">
                  <div className="mr-2">
                    <h2><b>Top Notes</b></h2>
                    <ul>
                      {noteLevels.top_notes.map((note, index) => (
                        <li key={index}>{note}</li>
                      ))}
                    </ul> 
                  </div>
                    
                    
                  <div className="mr-2">
                    <h2><b>Middle Notes</b></h2>
                    <ul>
                      {noteLevels.middle_notes.map((note, index) => (
                        <li key={index}>{note}</li>
                      ))}
                    </ul>
                  </div>
                    
                  <div className="mr-2">
                    <h2><b>Base Notes</b></h2>
                    <ul>
                      {noteLevels.base_notes.map((note, index) => (
                        <li key={index}>{note}</li>
                      ))}
                    </ul>
                  </div>
                    
                  
                </div>
              )}
            </div>

          </div>
          {/* <div className=" p-6  border-l border-black">
            <h2 className="text-6xl  font-editors">About <br></br> <span className="font-2xl font-aeonik">{frag.house_name}</span></h2>
            <p className="mt-2">
              Our blend provides vital nutrition for your daily lifestyle and optimal health.
              Organimo realizes that our modern diets often leave us lacking nutrients.
              Feel supercharged and limitless with our herbal blend that contains almost
              all the vital minerals the body needs.
            </p>
          </div> */}
          
        </section>
      </div>
  );
      // <ul>
      //     {frag?.map((frag) => (
        //         <li key={frag.fragrance_id}>
        //             <p>{frag.name}</p>
        //             <p>{frag.house_id}</p>
        //             <p>{frag.description}</p>
        //             <p>{frag.fraganticaID}</p>
        //             {/* <p>{frag.frag_img}</p> */}
        //         </li>
        //     ))}
        // </ul>
    
};

        
            // const frag: Frag[] = [
            //     {
            //       "fragrance_id": 565,
            //       "name": "Anmitsu J-Scent for women and men",
            //       "house_id": 376,
            //       "description": "Anmitsu by J-Scent is a fragrance for women and men. This is a new fragrance. Anmitsu was launched in 2023. Top notes are Sugar and Orange; middle notes are Strawberry, Apricot and Peach; base notes are Pea and Whipped Cream. ",
            //       "fraganticaID": "92672"
            //     }
            //   ]