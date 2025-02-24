import { useForm } from 'react-hook-form'
import ProductCard from 'src/components/product/product-card'
import FiltersMenu from 'src/components/products/filters-menu'
import SkeletonLoader from 'src/components/products/skeleton'
import { Button } from 'src/components/ui/button'
import { Drawer, DrawerTrigger } from 'src/components/ui/drawer'
import { Label } from 'src/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from 'src/components/ui/select'
import NoDataAvailable from 'src/components/user/no-data-available'
import useGetAllProducts from 'src/hooks/products/getAllProducts'
import { ProductsFormInterface } from 'src/types/forms/products-form'

const Products = () => {
  const methods = useForm<ProductsFormInterface>({
    mode: 'onChange',
    defaultValues: {
      sortOption: 'bestsellers',
    },
  })
  const { register, handleSubmit, watch, setValue } = methods
  const onSubmit = (data: ProductsFormInterface) => {
    console.log(data)
  }
  const data = watch()
  const { productsData, loading } = useGetAllProducts(data)
  return (
    <section>
      <div className="px-2 py-4 lg:px-6 lg:py-8">
        <div className="flex flex-col md:flex-row lg:items-center lg:justify-between">
          <p className="my-4 hidden font-semibold capitalize opacity-50 lg:block">
            (showing {productsData.length.toLocaleString()} designs)
          </p>
          <form
            className="flex items-center gap-2"
            onSubmit={(event) => {
              event.preventDefault()
              handleSubmit(onSubmit)()
            }}
          >
            <div className="flex w-1/2 flex-col items-start gap-2 lg:flex-row lg:items-center">
              <Label>Sort</Label>
              <Select
                onValueChange={(value) => setValue('sortOption', value, { shouldValidate: true })}
                defaultValue="bestsellers"
              >
                <SelectTrigger className="w-full lg:w-[180px]">
                  <SelectValue placeholder="Select Sort Option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem className="hover:cursor-pointer" value="bestsellers">
                    Bestsellers
                  </SelectItem>
                  <SelectItem className="hover:cursor-pointer" value="price-low">
                    Price (Low - High)
                  </SelectItem>
                  <SelectItem className="hover:cursor-pointer" value="price-high">
                    Price (High - Low)
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex w-1/2 flex-col items-start gap-2 lg:flex-row lg:items-center">
              <Label>Filters</Label>
              <Drawer>
                <DrawerTrigger className="w-full">
                  <Button variant="outline" className="w-full px-3 py-5 font-normal">
                    Show Filters
                  </Button>
                </DrawerTrigger>
                <FiltersMenu register={register} methods={methods} />
              </Drawer>
            </div>
          </form>
        </div>
        <p className="my-4 font-semibold capitalize opacity-50 lg:hidden">
          (showing {productsData.length.toLocaleString()} designs)
        </p>
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
          {!loading &&
            productsData.length > 0 &&
            productsData.map((product, index) => (
              <a href={'/products/' + product.documentId} key={index} className="block max-w-full rounded-lg">
                <ProductCard product={product} bestSellingSection />
              </a>
            ))}
        </div>
        {!loading && productsData.length === 0 && (
          <NoDataAvailable title="No Products Available, Consider Changing Filters" />
        )}
        {loading && <SkeletonLoader />}
      </div>
    </section>
  )
}

export default Products
