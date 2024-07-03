import React from "react";
import axios from "axios";
import { Frag } from "../types";
import { useLoaderData } from "react-router-dom";
// import { FragParams } from "../types";



export async function loader({params}:any) {
    //maybe return all page info needed via rpc calls
    const fragOutput = await axios.get(`http://localhost:5000/frag/${params.fragID}`)
  return fragOutput ;
}

// async function fetchFrag(fragID: string): Promise<void> {

// }

export default function FragPage() {
    const { data } = useLoaderData()
    const [frag, setFrag] = React.useState<Frag>(data[0])
    const [firstPart, setFirstPart] = React.useState('');
    const [secondPart, setSecondPart] = React.useState('');

    React.useEffect(() => {
    // Define the regular expression to match the various end phrases
      const regex = /(for (women and men|women|men))/;
      const match = frag.name.match(regex);
      if (match) {
        // If a match is found, split the string
        setFirstPart(frag.name.substring(0, match.index).trim());
        setSecondPart(match[0]);  // The matched string (e.g., "for women and men")
      } else {
        // If no match is found, handle accordingly
        setFirstPart(frag.name);
        setSecondPart("");
      }
    }, [data]); 
    
    
    return (
      <div className="container ">
      {/* Top Header */}
        <header className="text-center py-10">
          <h1 className="text-4xl font-bold text-gray-800">{firstPart}</h1>
          <h2 className="text-2xl text-gray-800">{secondPart}</h2>
          <p className="text-xl mt-4">Vital nutrition for your daily lifestyle and optimal health.</p>
        </header>
        
        {/* Three Sections Below */}
        <section className="grid grid-cols-3 border-t border-black">
          {/* Section 1 */}
          <div className="bg-white p-6  border-r border-black">
            <h2 className="text-2xl font-semibold">The Ultimate Superfood.</h2>
            <p className="mt-2">
              Our blend provides vital nutrition for your daily lifestyle and optimal health.
              Organimo realizes that our modern diets often leave us lacking nutrients.
              Feel supercharged and limitless with our herbal blend that contains almost
              all the vital minerals the body needs.
            </p>
          </div>

          {/* Section 2 */}
          <div className="bg-white p-6  ">
            <div className="flex justify-center items-center">
              <img src={frag.frag_img} alt="Product Image"  />
            </div>
          </div>

          {/* Section 3 */}
          <div className="bg-white p-6 border-l border-black">
            <h2 className="text-2xl font-semibold">Live limitless each and every day.</h2>
            <p>{frag.description}</p>
            
          </div>
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