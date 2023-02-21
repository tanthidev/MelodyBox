import React, {useEffect, useRef, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import SlideItem from "./ItemSlide/ItemSlide";
import * as apis from "~/apis"

function TopMusic(){

    const [results, setResults] = useState([])
    useEffect(()=>{
        const fetchApi = async () => {
            const response = await apis.topMusic("ZWZB96AB");
            // setResult(response);

            //response.data.msg is massage call api "Success"
            //response.data.data.song.total is total music call from api
            setResults(response.data.data.song.items);
            
        }
        fetchApi();
    },[])

    const slideRef = useRef();


 /* The settings for the slider. */
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: false,
  };

  const previousSlide = () => {
      slideRef.current.slickPrev();
  };

  const nextSlide = () => {
      slideRef.current.slickNext();
  };
  

/* A hook that is called after every render. It is used to set an interval that will call the
`slickNext` method on the slider every 3 seconds. */
  useEffect(() => {
      const intervalId = setInterval(() => {
          slideRef.current.slickNext();
      }, 3000);
      return () => clearInterval(intervalId);
  }, []);
  
        



  return (
    <div>
        <div className="flex justify-between my-5">
            <h2 className="font-extrabold text-4xl">Top musics</h2>
            <div className="mr-8">
                <button className="bg-white rounded ml-2 px-3 hover:bg-gray-100 " onClick={previousSlide}>
                    <FontAwesomeIcon icon={faAngleLeft}/>
                </button>
                <button className="bg-white rounded ml-2 px-3 hover:bg-gray-100 " onClick={nextSlide}>
                    <FontAwesomeIcon icon={faAngleRight}/>
                </button>
            </div>
        </div>
        <Slider ref={slideRef} {...settings}>
            {/* <SlideItem link="https://www.example.com/page1" image="https://randomwordgenerator.com/img/picture-generator/55e4d4434b56ac14f1dc8460962e33791c3ad6e04e5074417d2e72d59e44c5_640.jpg" alt="Image 1" /> */}
            {
                results.map((data, index)=>(
                    <SlideItem key={index} data={data}/>
                ))
            }
        </Slider>
    </div>
);
};

export default TopMusic;