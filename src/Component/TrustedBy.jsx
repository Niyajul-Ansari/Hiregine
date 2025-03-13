import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo from '../images/hire.png'

const TrustedBy = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-blue-500 py-8">
      <h2 className="text-center text-white font-bold text-2xl mb-6">
        Trusted By
      </h2>
      <div className="px-6">
        <Slider {...settings}>
          {/* LOGOS */}
          <div className="flex justify-center">
            <img src={logo} alt="Target" className="h-20" />
          </div>
          <div className="flex justify-center">
            <img src={logo} alt="Ola" className="h-20" />
          </div>
          <div className="flex justify-center">
            <img src={logo} alt="Ivy" className="h-20" />
          </div>
          <div className="flex justify-center">
            <img src={logo} alt="IG" className="h-20" />
          </div>
          <div className="flex justify-center">
            <img src={logo} alt="Broadridge" className="h-20" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default TrustedBy;