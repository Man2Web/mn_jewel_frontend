import { useForm } from 'react-hook-form'
import ProductCard from 'src/components/product/product-card'
import FiltersMenu from 'src/components/products/filters-menu'
import { Button } from 'src/components/ui/button'
import { Drawer, DrawerTrigger } from 'src/components/ui/drawer'
import { Label } from 'src/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from 'src/components/ui/select'
import useGetAllProducts from 'src/hooks/products/getAllProducts'
import { ProductsFormInterface } from 'src/types/forms/products-form'

const Products = () => {
  const methods = useForm<ProductsFormInterface>({
    mode: 'onChange',
    defaultValues: {
      sortOption: 'relevance',
    },
  })
  const { register, handleSubmit, watch, setValue } = methods
  const onSubmit = (data: ProductsFormInterface) => {
    console.log(data)
  }
  const data = watch()
  // useEffect(() => {
  //   console.log(data)
  // }, [data])
  const [products] = useGetAllProducts(data)
  return (
    <section>
      <div className=" px-2 py-4 lg:px-6 lg:py-8">
        <div className="flex flex-col md:flex-row lg:items-center lg:justify-between">
          <p className="my-4 hidden font-semibold capitalize opacity-50 lg:block">
            (showing {products.length.toLocaleString()} designs)
          </p>
          <form
            className="flex items-center gap-2"
            onSubmit={(event) => {
              event.preventDefault()
              handleSubmit(onSubmit)()
            }}
          >
            <div className="w-1/2 items-center gap-2 lg:flex lg:w-full">
              <Label>Sort By</Label>
              <Select
                onValueChange={(value) => setValue('sortOption', value, { shouldValidate: true })}
                defaultValue="relevance"
              >
                <SelectTrigger className="w-full lg:w-[180px]">
                  <SelectValue placeholder="Select Sort Option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem className="hover:cursor-pointer" value="relevance">
                    Relevance
                  </SelectItem>
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
            <div className="w-1/2 items-center gap-2 lg:flex">
              <Drawer>
                <Label>Filters</Label>
                <DrawerTrigger>
                  <Button variant="outline" className="w-[180px] px-3 py-5 font-normal">
                    Show Filters
                  </Button>
                </DrawerTrigger>
                <FiltersMenu register={register} methods={methods} />
              </Drawer>
            </div>
          </form>
        </div>
        <p className="my-4 font-semibold capitalize opacity-50 lg:hidden">
          (showing {products.length.toLocaleString()} designs)
        </p>
        <div className="grid grid-cols-1 items-center justify-center lg:grid-cols-5">
          {products.length > 0 ? (
            products.map((product, index) => (
              <a href={'/products/' + product.documentId} key={index} className="flex justify-center p-2">
                <ProductCard product={product} bestSellingSection />
              </a>
            ))
          ) : (
            <p>No Products Available</p>
          )}
        </div>
      </div>
    </section>
  )
}

export default Products
