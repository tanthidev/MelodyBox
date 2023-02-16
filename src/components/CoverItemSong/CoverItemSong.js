import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function CoverItemSong() {
    return ( 
        <div className="absolute w-full h-full bg-black top-0 opacity-50 flex items-center justify-center ">
            <button className="w-13 h-13 border-2 rounded-full transform transition duration-500 hover:scale-110">
                <FontAwesomeIcon 
                    icon={faPlay} 
                    className="text-white text-5xl"
                />
            </button>
        </div>
     );
}

export default CoverItemSong;