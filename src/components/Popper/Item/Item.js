import propTypes from 'prop-types';
import { Link } from "react-router-dom";
import { memo } from 'react';

function Item({to="", src="", title="", subtitle=""}) {
    // console.log(to);
    return ( 
        <Link 
            to={to}
            className="flex items-center hover:bg-gray-200 hover:bg-opacity-70 p-2 rounded-xl"
        >
            <img 
                src={src}
                // src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/8/a/a/b/8aab7a0386dd9c24b90adcc5ef5a7814.jpg"
                alt="aaa"
                className="w-13 h-auto rounded-full mr-2"
            />
            <div>
                <h3 className="text-2xl">{title}</h3>
                <h3 className="text-xl">{subtitle}</h3>
            </div>
        </Link>
     );
}

Item.propTypes = {
    to: propTypes.string,
    src: propTypes.string,
    name: propTypes.string,   
    type: propTypes.string,   
}
export default memo(Item);