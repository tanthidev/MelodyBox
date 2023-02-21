import { faCompactDisc, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Menu from '~/components/Menu'
import { memo } from 'react';

function SideBar () {

    const data = [
        {
            title: 'Home',
            icon: <FontAwesomeIcon className='w-5 h-5 text-gray-400' icon={faHome}/>,
            to: '/'
        },
        {
            title: 'Albums',
            icon: <FontAwesomeIcon className='w-5 h-5 text-gray-400' icon={faCompactDisc}/>,
            to: '/album'
        },
        {
            title: 'Artists',
            icon: <FontAwesomeIcon className='w-5 h-5 text-gray-400' icon={faUser}/>,
            to: '/artists'
        }
    ]


    return (
        <nav className="w-1/5 pt-15 bg-white">
            <Menu data={data}/>
        </nav>
    );
}

export default memo(SideBar);