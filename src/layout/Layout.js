import SideBar from "./SideBar";
import Header from "./Header";
import NowPlaying from "~/pages/Home/components/NowPlaying";
import FavoritesList from "~/pages/Home/components/FavoritesList";
import styles from './layout.module.scss'
import classNames from "classnames/bind";
import React, {useState, createContext } from "react";
export const ThemeContext = createContext();

const cx = classNames.bind(styles);

function Layout({children}) {
    
    const [CurrentMusic, setCurrentMusic] = useState([]);
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites'))||[]);

    
    function handleChangeMusic(data){
      setCurrentMusic(data);
      localStorage.setItem('currentMusic', data.encodeId);
    }

    // console.log(favorites);
    //Add music favorites
    function handleAddFavorites(id) {
        if (!favorites.includes(id)) {
          setFavorites(prev => [id, ...prev]);
          localStorage.setItem('favorites', JSON.stringify([id, ...favorites]));
        }
    }


    const handleRemoveFavorite = (id) => {
        setFavorites(prevFavorites => {
            const newFavorites = prevFavorites.filter(item => item !== id);
            localStorage.setItem('favorites', JSON.stringify(newFavorites));
            return newFavorites;
        });
    }





    return ( 
        <ThemeContext.Provider value={{handleChangeMusic, 
                    CurrentMusic, 
                    favorites, 
                    setFavorites,
                    handleAddFavorites, 
                    handleRemoveFavorite}}>
            <div className={cx(
                    'wrapper',
                    'flex'
                    )}>
                <SideBar/>
                <div className="bg-gradient-main bg-gradient-main-100 w-4/5 h-screen pl-8">
                    <Header/>
                    <div>
                        <div className="h-full">
                            {children}
                        </div>
                        <div className="grid grid-cols-2 mt-3 h-screen">
                            <NowPlaying/>
                            <FavoritesList/>
                        </div>
                    </div>
                </div>
            </div>
        </ThemeContext.Provider>
     );
}

export default Layout;