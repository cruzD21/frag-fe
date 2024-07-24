import { SearchOutputResult } from "../types";
import { useNavigate } from "react-router-dom";

interface OutputProps {
    results: SearchOutputResult[] | undefined
    input: string | undefined
    active?: () => void
}

export default function SearchOutput({results, input}: OutputProps) {
    const navigate = useNavigate();

    const handleResultClick = (id: any) => {
        navigate(`/fragrances/${id}`);
    }
    if(input === '' ) {
        return null
    }

    if(results?.length === 0 && input?.length > 0) {
        return <h1 className="bg-white text-black absolute top-full w-full z-10  max-h-40">No Results Found </h1>
    }

    return (
        <div className="absolute top-full w-full z-10 overflow-y-auto max-h-96 sm:max-h-40">
            {results?.map((frag) => {
                return (
                    <div  
                        key={frag.frag_id} 
                        className="bg-white flex text-left p-2"
                        onClick={()=> handleResultClick(frag.frag_id)}>
                            <img 
                                src={frag.frag_img_url}
                                alt="no img found"
                                className="w-10 h-10 object-cover mr-4" />
                            <div>
                                <h4 className="text-lg text-black font-semibold">{frag.frag_name}</h4>
                                <p className="text-gray-400">By: {frag.frag_house}</p>
                            </div>
                        
                    </div>
                );
            })}
        </div>
    )
};
