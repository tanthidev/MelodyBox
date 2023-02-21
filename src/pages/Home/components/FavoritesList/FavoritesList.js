import Item from "~/components/Popper/Item";
import React, {useState, useContext, useRef, useEffect} from "react";
import {ThemeContext} from '~/layout/Layout';
import * as apis from '~/apis'


function FavoritesList({ favorites }) {
    const childRef = useRef(null);
    const [results, setResults] = useState([]);
    const conTextFavorites = useContext(ThemeContext);
    const {favorites : idFavorites} = conTextFavorites;



    useEffect(() => {
        idFavorites.forEach((id, index) => {
          const fetchApi = async () => {
            const response = await apis.InfoSong(id);
            setResults((results) => [{...response.data.data, fetchIndex: index}, ...results]);
          };
          fetchApi();
        });
      }, [idFavorites]);

    //Sort
    const sortedResults = results.sort((a, b) => a.fetchIndex - b.fetchIndex);

    // Filter same item
    const uniqueResults = sortedResults.filter((result, index, self) =>
        index === self.findIndex((r) => r.encodeId === result.encodeId)
    );






    return ( 
        <div className="h-1/2 pb-15 pr-10">
            <h2 className="font-extrabold text-4xl mb-3">Your Favorites List</h2>
            <div 
                ref={childRef}
                className="w-full h-full bg-white rounded-3xl shadow-xl py-3 pl-3 pr-1 overflow-y-scroll">
                {/* <Item data={data} hideResult={false}/> */}
                {
                    uniqueResults.map((data, index) => (
                        <Item key={data.encodeId} data={data} hideResult={false} textLimit={30} unFavorite={true}/>
                    ))
                }
            </div>
        </div>
     );
}

export default (FavoritesList);