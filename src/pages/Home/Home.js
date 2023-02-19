// import { useState } from "react";
import Slide from "~/components/Slide";
import NowPlaying from "./components/NowPlaying";
import MostPlayed from "./components/MostPlayed";


function Home(){
      return (
          <div>
            {/* Slide top music */}
            <div>
              <Slide/>
            </div>

            <div className="grid grid-cols-2 mt-3 h-screen">
              <NowPlaying/>
              <MostPlayed/>
            </div>
          </div>
      );
}



export default Home;