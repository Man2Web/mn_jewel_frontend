import Slider from 'react-slick'
import useBannerHook from 'src/hooks/data/useBannerHook'
import { Skeleton } from '../ui/skeleton'

const Banner: React.FC = () => {
  const [bannerImages] = useBannerHook()
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }
  return (
    <section className="overflow-hidden">
      <Slider {...settings}>
        {bannerImages ? (
          bannerImages?.map((data, index) => (
            <div key={index} className="flex h-auto w-full items-center justify-center bg-gray-200">
              <img className="h-64 w-full max-w-full lg:h-[600px]" src={data} alt="img" />
            </div>
          ))
        ) : (
          <Skeleton className="h-full w-full" />
        )}
      </Slider>
    </section>
  )
}

export default Banner
