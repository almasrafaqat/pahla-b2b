import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.style.jsx";
import { SliderContainer, SliderSection } from "./slider.style.jsx";
import { ArrowLeft, ArrowRight, SliderButton } from "../../globalStyle.js";



const PrimarySlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <SliderSection>
      <SliderContainer>
        <SliderButton direction="left">
          <ArrowLeft />
        </SliderButton>
        <Slider {...settings}>
          <img src="./img/slider/img1.webp" className="slider-image" />
          <img src="./img/slider/img2.webp" className="slider-image" />
          <img src="./img/slider/img3.webp" className="slider-image"/>
          <img src="./img/slider/img4.webp" className="slider-image"/>
          <img src="./img/slider/img5.webp" className="slider-image"/>
        </Slider>
        <SliderButton direction="right">
          <ArrowRight />
        </SliderButton>
      </SliderContainer>
    </SliderSection>
  );
}

export default PrimarySlider;