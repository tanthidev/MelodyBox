import CoverItemSong from "~/components/CoverItemSong";
import { useState, useRef } from "react";


function SlideItem({data}) {
    var title = data.title;
    /* Taking the first 18 characters of the title and adding an ellipsis to the end. */
    if(title.length>=18){
        title = title.substring(0,18)+"...";
    }

    const [showAction, setShowAction] = useState(false);
    const imageRef = useRef();

/**
 * When the mouse enters the image, the action buttons are shown and the image is scaled up.
 */
    const handleMouseEnter = () =>{
        setShowAction(true);
        imageRef.current.style.transform = 'scale(1.1)';
    }
/**
 * When the mouse leaves the image, the action buttons are hidden and the image is scaled back to its
 * original size
 */

    const handleMouseLeave = () =>{
        setShowAction(false);
        imageRef.current.style.transform = 'scale(1)';
    }

    return (
      <div>
        <div className="pr-5 overflow-hidden">
            <div
                className="w-full relative h-40 cursor-pointer rounded-2xl overflow-hidden"
                onMouseEnter={handleMouseEnter}
                onMouseLeave ={handleMouseLeave}
            >
                <img
                    ref={imageRef}
                    src={data.thumbnailM} 
                    alt={data.alias} 
                    className="rounded-2xl object-cover w-full h-full transform transition duration-500 hover:scale-110 "
                   
                />

                {
                    !showAction || <CoverItemSong data={data}/>
                }
                    
            </div>

            <div className="mt-4">
                {/* Name song */}
                <p className="text-2xl font-bold">
                    {title}
                </p>
                
                {/* Artist */}
                <p className="text-xl font-medium text-gray-500 mt-1">
                    {data.artistsNames}
                </p>
            </div>
        </div>
      </div>
    );
  };
export default SlideItem;