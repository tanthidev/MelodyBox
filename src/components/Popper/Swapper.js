import Item from "./Item";
import { memo } from "react";

function Swapper({data}) {
    return ( 
        <div className="px-2 pb-2 bg-orange-main rounded-xl h-fit max-h-100 overflow-y-scroll">
            <h3 className="mb-2 font-semibold">Suggested results</h3>
            {data.map((item, index) => 
                (
                    // console.log(item.artistsNames)
                    <Item
                        key={index}
                        to={item.link}
                        src={item.thumbnail}
                        title={item.title}
                        subtitle={item.artistsNames}
                    />
                )
            )}


        </div>
     );
}

export default memo(Swapper);