"use client";

import React from 'react'
import Slider from 'react-slick';
import Slide from './Slide';

export const Hero = () => {
    var settings ={
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
    };

    const slideData = [
        {
            id: 0,
            img: '/corten.jpg',
            title: '1:07:11',
            mainTitle: "",
        },
        {
            id: 1,
            img: '/1.png',
            title: '',
            mainTitle: "",
        },
        {
            id: 2,
            img: '/2.jpg',
            title: '',
            mainTitle: "",
        },
    ];

  return (
    <div>
      <div className='container pt-6 lg:pt-0 color-white'>
        <Slider {...settings}>
            {slideData.map((item) => (
                <Slide key={item.id}
                img={item.img}
                title={item.title}
                mainTitle={item.mainTitle}
                />
            ))}
        </Slider>
      </div>
    </div>
  )
}

export default Hero
