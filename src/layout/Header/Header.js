import { faBell, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Search from "./components/Search";

function Header () {
    return (
        <div className="flex justify-between h-20 border-b-2 border-gray-300 items-center pr-8">
            <Search/>

            {/* Action */}
            <div className="h-full flex items-center border-l-2 border-gray-300 pl-8">
                <FontAwesomeIcon
                    icon={faBell}
                    className="h-6 w-6 mx-3 cursor-pointer"
                />
                <FontAwesomeIcon
                    icon={faGear}
                    className="h-6 w-6 mx-3 cursor-pointer"
                />
            </div>
        </div>
    );
}

export default Header;