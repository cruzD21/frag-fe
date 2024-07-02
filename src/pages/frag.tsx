
import axios from "axios";
// import { Frag } from "../types";
import { useLoaderData } from "react-router-dom";
// import { FragParams } from "../types";


export async function loader({params}:any) {
    const fragOutput = await axios.get(`http://localhost:5000/frag/${params.fragID}`)
  return { fragOutput };
}

export default function FragPage() {
    const frag = useLoaderData()
    console.log(frag)
    
    return (
      <div>hello from frag id</div>
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
    )
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