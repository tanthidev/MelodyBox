import { faSearch, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef, useEffect } from "react";
import Tippy from '@tippyjs/react';

import { useDebounce } from "~/hooks";
import Swapper from "~/components/Popper/Swapper";
import * as apis from '~/apis' 



function Search() {

    // useEffect(() => {
    //     const fectDataHome = async () =>{
    //         const response = await apis.Search();
    //         console.log(response);
    //     }
    //     fectDataHome()
    // },[])
    const [inputValue, setInputValue] = useState('');
    const [showResult, setShowReult] = useState(false);
    const [results, setResults] = useState([]);
    const deBounceValue = useDebounce(inputValue, 500);
    const inputRef = useRef();

    useEffect(()=>{
        //check input
        if(!deBounceValue.trim()){
            return
        }
        
        const fetchApi = async () => {
            const response = await apis.Search(deBounceValue);

            //Handle number song
            if(response.data.data.counter.song!==0){
                setResults(response.data.data.songs)
            } else {
                setResults([]);
            }
        }

        fetchApi();

    }, [deBounceValue])

    // useEffect(()=>{
    //     console.log(results);
    // },[results])

    const handleClear = () => {
        setInputValue('');
        inputRef.current.focus()
    }
    
    useEffect(()=>{
        if(!(!!inputValue)){
            setResults([]);
        }
    },[inputValue])



    return ( 
        // Using a wrapper <div> tag around the reference element solves this by creating a new parentNode context.
        <div className={`w-1/3 relative`}>
         <Tippy
            interactive 
            visible = {(results.length!==0) && showResult}
            delay={[0, 0]}
            onClickOutside={() => setShowReult(false)}
            content={<Swapper data={results}/>}
            placement="bottom-start"
            theme="my-tooltip-theme"
            arrow={false}
            >
                <form className="flex justify-between bg-white h-10 rounded-xl items-center pl-3 w-full">
                    {/* Input */}
                    <input 
                        id="search" 
                        className="h-7 px-2 w-full"
                        placeholder="Search"
                        value={inputValue}
                        ref={inputRef}
                        onChange={(e) => setInputValue(e.target.value) }
                        onFocus={() => setShowReult(true)}
                    />

                    {/* Clear input */}
                    {inputValue && 
                        (<FontAwesomeIcon 
                            icon={faXmarkCircle}
                            className="text-gray-500 cursor-pointer"
                            onClick={handleClear}
                        />)
                    }

                    {/* Submit */}
                    <button className="text-gray-300 h-full">
                        <FontAwesomeIcon 
                            icon={faSearch}
                            className="w-5 ml-2 pr-3"
                        />
                    </button>
                </form>
            </Tippy>
            
       </div>
        
     );
}

export default Search;