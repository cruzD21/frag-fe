import axios from "axios"
import React from "react"
import { useLoaderData } from "react-router-dom"


interface Fragrance {
    fragrance_id: number
    name: string
    house_id: string
    description: string
    fraganticaID: string
    frag_img?: string
}
export async function loader({params}:any) {
    const fragrances = await axios.get("http://localhost:5000/frag")
  return { fragrances };
}


export default function Fragrances() {
    // const fragrances = useLoaderData()
    // const data = useLoaderData()
    const [fragrances, setFragrances] = React.useState<Fragrance[]>()

    React.useEffect( () => {
        axios.get("http://localhost:5000/frag")
            .then((res) => {
                if(res && res.data) {
                    console.log(res.data)
                    setFragrances(res.data)
                }
            })
            .catch((err) => {
                console.error(err)
            })
    },[])
   
            

    return (
        <ul>
            {fragrances?.map((frag) => (
                <li key={frag.fragrance_id}>
                    <p>frag id: {frag.fragrance_id}</p>
                    <p>name: {frag.name}</p>
                    <p>houseid: {frag.house_id}</p>
                    <p>description: {frag.description}</p>
                    <p>fragrantica id:{frag.fraganticaID}</p>
                    {/* <p>frag img: {frag.frag_img}</p> */}
                </li>
            ))}
        </ul>
    )
};
