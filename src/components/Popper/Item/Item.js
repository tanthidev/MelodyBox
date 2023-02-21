import { faHeart, faPlay, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import propTypes from 'prop-types';
import { memo, useState, useContext } from 'react';
import { ThemeContext as hideResultContext} from '~/layout/Header/components/Search/Search';
import { ThemeContext} from '~/layout/Layout';

function Item ({data, hideResult=true, textLimit=18, unFavorite=false}) {


    const setShowReult = useContext(hideResultContext);

    // Context layout
    const {favorites, handleChangeMusic, handleRemoveFavorite, handleAddFavorites} = useContext(ThemeContext);
    const [favotite, setFavorite] = useState(favorites.includes(data.encodeId))

    const [showAction, setShowAction] = useState(false);

    var title = data.title;
    var artistsNames = data.artistsNames;


    if(data.title.length>=textLimit){
        title = title.substring(0,textLimit)+"...";
    } 

    if(data.artistsNames.length>=textLimit){
        artistsNames = artistsNames.substring(0,textLimit)+"...";
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
        handleHideResult();
    }

    const handleHideResult = ()=>{
        hideResult && setShowReult(false);
    }

    const handlRemove = () =>{
        handleRemoveFavorite(data.encodeId);
    }

    const handleAdd = () =>{
        handleAddFavorites(data.encodeId);
        setFavorite(true);
    }

    return ( 
        <div 
            className="flex justify-between items-center hover:bg-gray-200 hover:bg-opacity-70 p-2 rounded-xl cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave ={handleMouseLeave}
            onClick={handlePlay}
            
        >
            <div className='flex items-center w-10/12'
                onClick={handleHideResult}
            >
                {/* Image */}
                <div  
                    className='relative'
                >
                    <img 
                        src={data.thumbnail}
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
                            onClick={handlePlay}
                            />
                        {
                            !unFavorite 
                                ? <FontAwesomeIcon className='text-gray-500 hover:text-gray-800' 
                                style={favotite && {color: 'red'}}
                                    icon={faHeart}
                                    onClick={handleAdd}/>
                                : <FontAwesomeIcon 
                                    className='text-gray-500 hover:text-gray-800 mr-2' 
                                    icon={faTrash}
                                    onClick={handlRemove}/>  
                        }
                        
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