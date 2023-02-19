import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useContext} from "react";

import {ThemeContext} from '~/layout/Layout'

function CoverItemSong({data}) {

    const context = useContext(ThemeContext);
    // console.log(context.handleChangeMusic);

    const handlePlay = () => {
        // console.log(handleChangeMusic);
        context.handleChangeMusic(data)
        // console.log(handleChangeMusic);
    }
    return ( 
        <div onClick={handlePlay} className="absolute w-full h-full bg-black top-0 opacity-50 flex items-center justify-center ">
            <button className="w-13 h-13 border-2 rounded-full transform transition duration-500">
                <FontAwesomeIcon 
                    icon={faPlay} 
                    className="text-white text-5xl"
                />
            </button>
        </div>
     );
}

export default CoverItemSong;