import SideBar from "./SideBar";
import Header from "./Header";
import styles from './layout.module.scss'
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Layout({children}) {
    return ( 
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
     );
}

export default Layout;