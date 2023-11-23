import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderContainer, SliderSection } from "./slider.style.jsx";
import { ArrowLeft, ArrowRight, SliderButton } from "../../globalStyle.js";
import { Sliders } from "../../data.js";



const PrimarySlider = () => {
  const [slide, setSlide] = useState(null);
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
        <SliderButton direction="left" onClick={() => slide?.slickPrev()}>
          <ArrowLeft />
        </SliderButton>
        <Slider ref={setSlide} {...settings}>
          {
            Sliders.map((slider, index) => (<img key={index} src={slider.image} className="slider-image" alt={slider.image} />))
          }          
        </Slider>
        <SliderButton direction="right" onClick={() => slide?.slickNext()}>
          <ArrowRight />
        </SliderButton>
      </SliderContainer>
    </SliderSection>
  );
}

export default PrimarySlider;