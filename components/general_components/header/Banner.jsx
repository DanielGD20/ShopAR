import Slider from "react-slick";

const Banner = () => {
  var settings = {
    className: "slider variable-width imagen",
    swipe: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlaySpeed: 800,
    autoplay: true,
    adaptiveHeight: true,
    fade: true,
    style:{}
  };
  return (
    <Slider {...settings}>
      <div>
        <img src="/images/foto4.jpg" alt="foto4" />
      </div>
      <div>
        <img src="/images/foto5.jpg" alt="foto5" />
      </div>
      <div>
        <img src="/images/foto6.jpg" alt="foto6" />
      </div>
    </Slider>
  );
};

export default Banner;
