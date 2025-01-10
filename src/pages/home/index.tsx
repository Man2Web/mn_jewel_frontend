import Banner from 'src/components/home/banner'
import BestSelling from 'src/components/home/best-selling'
import Categories from 'src/components/home/categories'
import CategorySlider from 'src/components/home/category-slider'
import Customize from 'src/components/home/customize'

export default function Home() {
  return (
    <div>
      <CategorySlider />
      <Banner />
      <Categories />
      <BestSelling />
      <Customize />
    </div>
  )
}
