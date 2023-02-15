import SideBar from "./SideBar";
import Header from "./Header";
import styles from './layout.module.scss'
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Layout({children}) {
    return ( 
        <div className={cx('wrapper')}>
            <SideBar/>
            <div>
                <Header/>
                {children}
            </div>
        </div>
     );
}

export default Layout;