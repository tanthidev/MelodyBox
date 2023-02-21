import { faHeart, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useContext, useState} from "react";

import {ThemeContext} from '~/layout/Layout'

function CoverItemSong({data}) {

    const context = useContext(ThemeContext);
    // console.log(context.handleChangeMusic);
    const [favorites, setFavorites] = useState(context.favorites.includes(data.encodeId));

    
    const handlePlay = () => {
        // console.log(handleChangeMusic);
        context.handleChangeMusic(data)
        // console.log(handleChangeMusic);
    }

    const handleAddFavorite = () => {
        context.handleAddFavorites(data.encodeId);
        setFavorites(true)
        // console.log(data);
    }
    
    return ( 
        <div className="absolute w-full h-full bg-black top-0 opacity-50 items-center grid grid-cols-3">
            <div >
            </div>
            <button onClick={handlePlay}  className="w-13 h-13 border-2 rounded-full transform transition duration-500 ">
                <FontAwesomeIcon 
                    icon={faPlay} 
                    className="text-white text-5xl hover:text-gray-400"
                />
            </button>

            {/* add favorites */}
            <button onClick={handleAddFavorite} className="transform transition duration-500 mt-1">
                <FontAwesomeIcon 
                    icon={faHeart}
                    style={favorites && {color: 'red'}}
                    className="text-white text-4xl hover:text-gray-400"
                />
            </button>
        </div>
     );
}

export default CoverItemSong;