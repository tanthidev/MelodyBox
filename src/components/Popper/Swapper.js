import Item from "./Item";
import { memo } from "react";

function Swapper({data}) {
    return ( 
        <div className="px-2 pb-2 bg-orange-main rounded-xl h-fit max-h-100 overflow-y-scroll scrollbar-hide">
            <h3 className="mb-2 font-semibold">Suggested results</h3>
            {data.map((item, index) => 
                (

                    <Item
                        data={item}
                        key={index}
                    />
                )
            )}


        </div>
     );
}

export default memo(Swapper);