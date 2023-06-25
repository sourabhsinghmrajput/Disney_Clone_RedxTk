import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slider1 from "./../../assets/images/slider-badag.jpg";
import slider2 from "./../../assets/images/slider-scale.jpg";
import slider3 from "./../../assets/images/slider-scales.jpg";
import slider4 from "./../../assets/images/slider-badging.jpg";

const ImageSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    // variableWidth: true,
    centerMode: true,
    autoplay: true,
  };

  return (
    <div>
      <Slider {...settings} className="slider">
        <div className="wrap">
          <img src={slider1} alt="" />
        </div>
        <div className="wrap">
          <img src={slider2} alt="" />
        </div>
        <div className="wrap">
          <img src={slider3} alt="" />
        </div>
        <div className="wrap">
          <img src={slider4} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
