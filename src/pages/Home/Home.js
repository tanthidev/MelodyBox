// import { useState } from "react";
import Slide from '~/pages/Slide';
import NowPlaying from "./components/NowPlaying";
import FavoritesList from "./components/FavoritesList";


function Home(){
      return (
          <div>
            {/* Slide top music */}
            <div>
              <Slide/>
            </div>

            <div className="grid grid-cols-2 mt-3 h-screen">
              <NowPlaying/>
              <FavoritesList/>
            </div>
          </div>
      );
}



export default Home;