import React from "react";
import Slider from "react-slick";

// Import slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "linear",
    pauseOnHover: false
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img
            src="https://sslimages.shoppersstop.com/sys-master/root/h0a/haa/33279581913118/casio-fossil-web600_8--ek.jpg"
            alt="Stylish watch"
            className="slider-image"
          />
        </div>
        <div>
          <img
            src="https://sslimages.shoppersstop.com/sys-master/root/h7a/h30/33182085316638/SS24-web_3u0--ej9.jpg"
            alt="Stylish watch"
            className="slider-image"
          />
        </div>
        <div>
          <img
            src="https://sslimages.shoppersstop.com/sys-master/root/hfb/hff/33279582371870/burberry-YSl-web600.jpg"
            alt="Stylish watch"
            className="slider-image"
          />
        </div>
         <div>
          <img
            src="https://sslimages.shoppersstop.com/sys-master/root/hfb/hff/33279582371870/burberry-YSl-web600.jpg"
            alt="Stylish watch"
            className="slider-image"
          />
        </div>
         <div>
          <img
            src="https://sslimages.shoppersstop.com/sys-master/root/h47/h85/33279588368414/AE-%26-TH-web600_ue--j93.jpg"
            alt="Stylish watch"
            className="slider-image"
          />
        </div>
         <div>
          <img
            src="https://sslimages.shoppersstop.com/sys-master/root/h6d/hf2/33279582765086/stop-life-web600_y--gy.jpg"
            alt="Stylish watch"
            className="slider-image"
          />
        </div>
      </Slider>
      
    </div>
    
  );
};

export default SimpleSlider;
