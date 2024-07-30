import axios from "axios";

export async function loader({params}:any) {
    const searchOutput = await axios.get(`https://frag-backend-w7rr5fd5oa-uc.a.run.app/search/${params.query}`)
  return { searchOutput };
}

export default function Search() {
    return (
        <h1>hello from search</h1>
    )
};
