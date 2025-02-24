import ProductFeatures from 'src/components/product/product-features'
import NoDataAvailable from 'src/components/user/no-data-available'
import { useUserCartData } from 'src/hooks/user/user'

const Favourites = () => {
  const { userCartProducts, setUserCartProducts } = useUserCartData()

  return (
    <section>
      {userCartProducts.length > 0 ? (
        <div className="p-4 lg:px-6 lg:py-8">
          <ProductFeatures />
          <div className="flex flex-col justify-between gap-2 lg:flex-row">
            <section className="w-full">
              <div className="my-2">
                <h1 className="font-serif text-2xl">Favourites</h1>
                <span className="block h-0.5 w-1/5 bg-red-400 md:w-[100px]" />
              </div>
              <div>{}</div>
            </section>
          </div>
        </div>
      ) : (
        <NoDataAvailable title="No Favourites" />
      )}
    </section>
  )
}

export default Favourites
