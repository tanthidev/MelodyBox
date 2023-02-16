import React, {useEffect, useRef} from "react";
import SlideItem from "~/components/Slide/ItemSlide/ItemSlide";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Slide = () => {
    const slideRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 2,
  };

    const previousSlide = () => {
        slideRef.current.slickPrev();
    };

    const nextSlide = () => {
        slideRef.current.slickNext();
    };

    // useEffect(()=>{
    //     setInterval(()=>{
    //             slideRef.current.slickNext();
    //     }, 2000)
    // })

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
                <SlideItem link="https://www.example.com/page1" image="https://randomwordgenerator.com/img/picture-generator/55e4d4434b56ac14f1dc8460962e33791c3ad6e04e5074417d2e72d59e44c5_640.jpg" alt="Image 1" />
                <SlideItem link="https://www.example.com/page2" image="https://randomwordgenerator.com/img/picture-generator/smoke-1031060_640.jpg" alt="Image 2" />
                <SlideItem link="https://www.example.com/page3" image="https://randomwordgenerator.com/img/picture-generator/52e8d0414b5bad14f1dc8460962e33791c3ad6e04e5074417d2e72d39748c3_640.jpg" alt="Image 3" />
                <SlideItem link="https://www.example.com/page1" image="https://randomwordgenerator.com/img/picture-generator/54e9d7474b54ad14f1dc8460962e33791c3ad6e04e507440762a7cd69148c6_640.jpg" alt="Image 1" />
                <SlideItem link="https://www.example.com/page2" image="https://randomwordgenerator.com/img/picture-generator/5fe5d44b4a56b10ff3d8992cc12c30771037dbf852547941762a7ed7974b_640.jpg " alt="Image 2" />
                <SlideItem link="https://www.example.com/page3" image="https://randomwordgenerator.com/img/picture-generator/53e5dc414d55ac14f1dc8460962e33791c3ad6e04e507749742d7cd0974dc3_640.jpg" alt="Image 3" />
                <SlideItem link="https://www.example.com/page1" image="https://randomwordgenerator.com/img/picture-generator/57e6d043435aa514f1dc8460962e33791c3ad6e04e507441722a72dd964ccc_640.jpg" alt="Image 1" />
                <SlideItem link="https://www.example.com/page2" image="https://randomwordgenerator.com/img/picture-generator/57e4d1444851af14f1dc8460962e33791c3ad6e04e50744172297cd6934ec0_640.jpg" alt="Image 2" />
                <SlideItem link="https://www.example.com/page3" image="https://randomwordgenerator.com/img/picture-generator/53e1dd464a54a414f1dc8460962e33791c3ad6e04e5077497c2a7cd4924ec7_640.jpg" alt="Image 3" />
                <SlideItem link="https://www.example.com/page1" image="https://randomwordgenerator.com/img/picture-generator/52e8d0414b5bad14f1dc8460962e33791c3ad6e04e5074417d2e72d39748c3_640.jpg" alt="Image 1" />
                <SlideItem link="https://www.example.com/page2" image="https://randomwordgenerator.com/img/picture-generator/5fe5d44b4a56b10ff3d8992cc12c30771037dbf852547941762a7ed7974b_640.jpg" alt="Image 2" />
                <SlideItem link="https://www.example.com/page3" image="https://randomwordgenerator.com/img/picture-generator/57e4d1444851af14f1dc8460962e33791c3ad6e04e50744172297cd6934ec0_640.jpg" alt="Image 3" />
            </Slider>
        </div>
  );
};


export default Slide;