import Slider from 'react-slick'

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <section className="overflow-hidden">
      <Slider {...settings}>
        <div className="h-auto w-full">
          <img
            className="h-[300px] w-full object-cover lg:h-[600px]"
            src="https://www.joyalukkas.in/media/wysiwyg/India/Herosection/new-year--main-banner.jpg"
            alt="img"
          />
        </div>
        <div className="h-auto w-full">
          <img
            className="h-[300px] w-full object-cover lg:h-[600px]"
            src="https://www.joyalukkas.in/media/wysiwyg/India/Herosection/Web-banners-New_2.jpg"
            alt="img"
          />
        </div>
        <div className="h-auto w-full">
          <img
            className="h-[300px] w-full object-cover lg:h-[600px]"
            src="https://www.joyalukkas.in/media/wysiwyg/India/Herosection/1735628772067.jpg"
            alt="img"
          />
        </div>
      </Slider>
    </section>
  )
}

export default Banner
