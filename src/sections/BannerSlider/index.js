import React from "react";

import { SlickSlider, SliderItem } from "reusecore/SlickSlider";
import Banner from "sections/Banner";
import BannerTwo from "sections/BannerTwo";
import BannerThree from "sections/BannerThree";

import BannerSliderWrapper from "./bannerSlider.style";

const BannerSlider = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (i) => <div>0 {i + 1} </div>,
  };
  return (
    <BannerSliderWrapper> 
        <SlickSlider {...settings}>
          <SliderItem>
            <Banner />
          </SliderItem>
          <SliderItem>
            <BannerTwo />
          </SliderItem>
          <SliderItem>
            <BannerThree />
          </SliderItem>
        </SlickSlider> 
    </BannerSliderWrapper>
  );
};

export default BannerSlider;
