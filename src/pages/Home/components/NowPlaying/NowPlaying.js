import { useEffect, useContext } from "react";
import { useState } from "react";
import BarControl from "~/components/BarControl";
import * as apis from '~/apis'
import {ThemeContext} from '~/layout/Layout'

function NowPlaying() {

    const context = useContext(ThemeContext);
    var autoPlay = true;

    var data = context.CurrentMusic;
    const dataBackUp = {
        encodeId: 'ZO6Z087D',
        title: 'Astronaut In The Ocean',
        artistsNames: "Masked Wolf",
        thumbnailM: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/3/6/3/8/3638ccffdead0a3fe5ebed4893dd974b.jpg"
    }

    if((data.length)===0){
        data = dataBackUp;
        autoPlay = false;
    }



    const [notice, setNotice] = useState('');
    const [audio, setAudio] = useState('');
    useEffect(()=>{ 
        const fetchApi = async () => {
            const response = await apis.Song(data.encodeId);
            if(!!response.data.data){
                setAudio(response.data.data[`128`]);
                setNotice('');
            } else {
                setAudio('')
                if(response.data.err === -1150){
                    setNotice(response.data.msg);
                }
            }

        }

        fetchApi();
    },[data])

    return ( 
        <div className="h-1/2 pb-15 pr-10">
            <h2 className="font-extrabold text-4xl mb-3">Now Playing</h2>
            {/* Area play music */}
            <div className="w-full h-full bg-white rounded-3xl shadow-xl py-3 px-5">
                <div className="flex justify-end font-semibold text-xl">
                    <span
                        className="text-gray-600"
                    >Next -&nbsp;</span> 
                    <b>Rockstar</b>
                </div>

                <div
                    className="w-1/4 mt-2 mx-auto shadow-xl rounded-3xl overflow-hidden"
                >
                    <img
                        className="w-full"
                        src={data.thumbnailM} 
                        alt="aaa"
                    />
                </div>
                {/* Name music */}
                <div className="text-center my-4">
                    <p className="font-bold">{data.title}</p>
                    <p className="text-gray-500 text-2xl">{data.artistsNames}</p>
                </div>

                <BarControl src={audio} autoPlay={autoPlay}/>
                {!(!!notice) || (
                    <p
                        className="text-center text-2xl font-semibold text-red-500 mt-2"
                    >{notice}</p>
                )}
            </div>
        </div>
     );
}

export default NowPlaying;