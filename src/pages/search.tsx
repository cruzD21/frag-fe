import React from "react";
import axios from "axios";

export async function loader({params}:any) {
    const searchOutput = await axios.get(`http://localhost:5000/search/${params.query}`)
  return { searchOutput };
}

export default function Search() {
    return (
        <h1>hello from search</h1>
    )
};
