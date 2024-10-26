

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import Slider from 'react-slick';

const Carousel = ({ items }) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
  
    return (
      <div>
        <Slider {...settings}>
          {items.length > 0 ? (
            // Map over the items array to render each card
            items.map((item, index) => (
              <div key={index}>
                <h1>{item.title}</h1>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
              </div>
            ))
          ) : (
            <p>No items available</p>
          )}
        </Slider>
      </div>
    );
  };
  export default Carousel;