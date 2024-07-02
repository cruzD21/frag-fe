import { useEffect, useState } from "react"
import axios from "axios"
import {  SearchOutputResult } from "../types"
import SearchOutput from "./SearchOutput"




export default function Searchbar() {
    const [searchQuery, setSearchQuery] = useState<string>()
    const [searchOutput, setSearchOutput] = useState<SearchOutputResult[]>()

    const handleChange = (query: string) => {
        console.log(query)
        setSearchQuery(query)
    }

    useEffect(()=>{
        if(searchQuery != '') {
            axios.get(`http://127.0.0.1:5000/search/${searchQuery}`)
                .then((res) => {
                    if(res && res.data){
                        console.log(res.data)
                        setSearchOutput(res.data)
                    }
            })
        }
            
    },[searchQuery])

    return (
        <div className="relative">
            <div className="flex bg-[#1E293B] rounded-xl h-12 justify-between text-black p-3">
                {/* <button className="">Search</button> */}
                <img 
                    className=""
                    src="/Vectorsearch.svg" 
                    alt="no jalo" />
                <input 
                    type="text"
                    className="outline-none  px-4 py-2 rounded-3xl w-full bg-transparent text-[#9699AB] text-xl pb-3"
                    placeholder="Quick search..."
                    onChange={(event) => handleChange(event.target.value)} />
            </div>
            <SearchOutput results={searchOutput} input={searchQuery}/>
        </div>
    )
};
