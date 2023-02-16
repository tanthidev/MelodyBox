import { Link } from "react-router-dom";

function Menu({data}) {
    
    return ( 
        <>
            {data.map((item, index) => (
                <Link key={index} to={item.to} className="flex items-center py-3 hover:bg-gray-100 pl-5">
                    {item.icon}
                    <span
                        className="ml-5 font-semibold text-2xl"
                    >{item.title}</span>
                </Link>
            ))}
        </>
     );
}

export default Menu;