import { faHeart, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import propTypes from 'prop-types';
import { memo, useState, useContext } from 'react';
import { ThemeContext as hideResultContext} from '~/layout/Header/components/Search/Search';
import { ThemeContext as changeMusicContext} from '~/layout/Layout';

function Item({data}) {
    const setShowReult = useContext(hideResultContext);
    const handleChangeMusic = useContext(changeMusicContext).handleChangeMusic;


    const [showAction, setShowAction] = useState(false);

    var title = data.title;
    var artistsNames = data.artistsNames;


    if(data.title.length>=18){
        title = title.substring(0,19)+"...";
    } 

    if(data.artistsNames.length>=18){
        artistsNames = artistsNames.substring(0,19)+"...";
    } 
    

    const handleMouseLeave = () =>{
        setShowAction(false);
    }

    const handleMouseEnter = () =>{
        setShowAction(true);
    }

    const handlePlay = () => {
        // console.log(handleChangeMusic);
        handleChangeMusic(data)
        // console.log(handleChangeMusic);
    }

    return ( 
        <div 
            className="flex justify-between items-center hover:bg-gray-200 hover:bg-opacity-70 p-2 rounded-xl cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave ={handleMouseLeave}
            onClick={()=>{setShowReult(false)}}
        >
            <div className='flex items-center w-10/12'>
                {/* Image */}
                <div  
                    className='relative'
                >
                    <img 
                        src={data.thumbnailM}
                        alt="aaa"
                        className="w-13 h-auto rounded-full mr-2"
                    />
                    {/* {
                        !showAction || <CoverItemSong  data={data} />
                    } */}
                </div>
                
                {/* Name */}
                <div>
                    <h3 className="text-2xl">{title}</h3>
                    <h3 className="text-xl">{artistsNames}</h3>
                </div>
            </div>
            
            <div className='w-1/6 px-1'>
                {!showAction || 
                    <div className='flex justify-between items-center'>
                        <FontAwesomeIcon 
                            className="text-gray-500 hover:text-gray-800" 
                            icon={faPlay} 
                            onClick={handlePlay}/>
                        <FontAwesomeIcon className='text-gray-500 hover:text-gray-800' icon={faHeart}/>
                    </div>
                }
            </div>


        </div>
     );
}

Item.propTypes = {
    data: propTypes.object
}
export default memo(Item);