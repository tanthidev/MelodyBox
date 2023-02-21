import {  faVolumeMute, faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React , { useState, useRef, useEffect} from "react";
import propTypes from 'prop-types'



function BarControl({src, autoPlay}) {
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [volume, setVolume] = useState(true);
    const audioPlayer = useRef();

    useEffect(()=>{
        setIsPlaying(autoPlay)
    },[autoPlay])

    const handleTimeUpdate = () => {
      setCurrentTime(audioPlayer.current.currentTime);
    };



    const handleSeek = (event) => {
      const seekTime = event.target.value;
      audioPlayer.current.currentTime = seekTime;
      setCurrentTime(seekTime);
    };

    const handlePlay = () => {
        setIsPlaying(!isPlaying);
        if (isPlaying) {
            audioPlayer.current.pause();
        } else {
            audioPlayer.current.play();
            console.log(audioPlayer);
        }
    }





    function handleLoadedMetadata() {
        setDuration(audioPlayer.current.duration);
    }

    const handleMute = () => {
        if(volume){
            setVolume(false)
            audioPlayer.current.volume= 0;
        } else {
            setVolume(true)
            audioPlayer.current.volume= 1;
        }
    }


    //Auto play
    // useEffect(()=>{
    //     if(audioPlayer){
    //         audioPlayer.current.play();
    //     }
    // }, [src])


  return (
    <section className="flex flex-col justify-between relative">
       
        <div className="flex items-center text-xl">
                    {/* <div className="bg-gray-800 text-white py-4 px-6 rounded-lg shadow-md"> */}
                        <audio
                            autoPlay 
                            src={src}
                            ref={audioPlayer}
                            onTimeUpdate={handleTimeUpdate}
                            onLoadedMetadata={handleLoadedMetadata}
                        />
                        
                        <span>{formatTime(currentTime)}</span>
                        <div className="relative h-1 w-full mx-3">
                            <div className="absolute left-0 top-0 w-full h-full bg-gray-600 rounded-full" />
                            <div
                                className="absolute left-0 top-0 h-full bg-green-500 rounded-full"
                                style={{ width: `${(currentTime / duration) * 100}%` }}
                            />
                            <input
                                type="range"
                                min="0"
                                max={duration}
                                value={currentTime}
                                onChange={handleSeek}
                                className="absolute left-0 top-0 w-full h-full rounded-full bg-transparent appearance-none focus:outline-none"
                            />
                        </div>
                        <span>{formatTime(duration)}</span>
                            
                            
                    {/* </div> */}
        </div>


        <div className="flex-col items-center gap-1 flex mt-3">
            <div className="flex items-center gap-6">
                
                <div className="text-neutral-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 hover:text-black cursor-pointer hover:underline">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                    </svg>
                </div>
                {/* Pre */}
                <div className="text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 hover:text-black cursor-pointer hover:underline">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 15.312c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062c.75-.428 1.683.113 1.683.977v7.124zM11.25 15.312c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062c.75-.428 1.683.113 1.683.977v7.124z" />
                    </svg>
                </div>

                <div className="text-white" onClick={handlePlay}>
                    {
                        !isPlaying ? (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-11 h-11 text-gray-700 hover:text-black cursor-pointer hover:underline">
                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
                            </svg>):(
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-11 h-11 text-gray-700 hover:text-black cursor-pointer hover:underline">
                                    <path fillRule="evenodd" d="M8 5.75C8 5.33579 8.33579 5 8.75 5H10.25C10.6642 5 11 5.33579 11 5.75V18.25C11 18.6642 10.6642 19 10.25 19H8.75C8.33579 19 8 18.6642 8 18.25V5.75ZM13.75 5C13.3358 5 13 5.33579 13 5.75V18.25C13 18.6642 13.3358 19 13.75 19H15.25C15.6642 19 16 18.6642 16 18.25V5.75C16 5.33579 15.6642 5 15.25 5H13.75Z"/>
                                </svg>)
                    }
                    
                    
                </div>
                <div className="text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 hover:text-black cursor-pointer hover:underline">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
                    </svg>
                </div>

                {/*  */}
                <div className="text-gray-700">
                    {volume  
                        ? <FontAwesomeIcon className="w-5 h-5 mt-2 hover:text-black cursor-pointer hover:underline" onClick={handleMute} icon={faVolumeUp}/> 
                        : <FontAwesomeIcon className="w-5 h-5 mt-2 hover:text-black cursor-pointer hover:underline" onClick={handleMute} icon={faVolumeMute}/> 
                    }
                    
                </div>

                {/*  */}
                {/* <div className="text-neutral-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 hover:text-black cursor-pointer hover:underline">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
                    </svg>
                </div> */}
            </div>

        </div>   
    </section>
    );
}


function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }

BarControl.prototype = {
    src: propTypes.string.isRequired,
    autoPlay: propTypes.bool.isRequired
}

export default BarControl;