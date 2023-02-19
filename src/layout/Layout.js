import SideBar from "./SideBar";
import Header from "./Header";
import styles from './layout.module.scss'
import classNames from "classnames/bind";
import { useState, createContext } from "react";
export const ThemeContext = createContext();

const cx = classNames.bind(styles);

function Layout({children}) {

    const [CurrentMusic, setCurrentMusic] = useState([]);


    function handleChangeMusic(data){
      setCurrentMusic(data);
    }

    

    return ( 
        <ThemeContext.Provider value={{handleChangeMusic, CurrentMusic}}>
            <div className={cx(
                    'wrapper',
                    'flex'
                    )}>
                <SideBar/>
                <div className="bg-gradient-main bg-gradient-main-100 w-4/5 h-screen pl-8">
                    <Header/>
                    {children}
                </div>
            </div>
        </ThemeContext.Provider>
     );
}

export default Layout;