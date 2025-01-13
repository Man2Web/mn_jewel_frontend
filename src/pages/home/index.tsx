import Banner from 'src/components/home/banner'
import BestSelling from 'src/components/home/best-selling'
import Categories from 'src/components/home/categories'
import CategorySlider from 'src/components/home/category-slider'
import Customize from 'src/components/home/customize'
import Explore from 'src/components/home/explore'
import Features from 'src/components/home/features'
import Tour from 'src/components/home/tour'

export default function Home() {
  return (
    <main>
      <CategorySlider />
      <Banner />
      <Categories />
      <BestSelling />
      <Explore />
      <Customize />
      <Tour />
      <Features />
    </main>
  )
}
