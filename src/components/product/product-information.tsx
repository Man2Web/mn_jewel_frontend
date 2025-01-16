import { HeartIcon, IndianRupeeIcon, MailQuestionIcon, UserPlusIcon } from 'lucide-react'
import { Button } from '../ui/button'
import ProductDetails from './product-details'
import { otherInformation, productDetails, stoneDetails } from 'src/data/components/product'
import ProductFeatures from './product-features'

const ProductInformation = () => {
  return (
    <div className="lg:p-4">
      <h1 className="font-serif text-xl tracking-wide lg:text-4xl">Earrings Gold</h1>
      <p className="text-sm font-medium opacity-50">FJLK123LKJLFKDJS</p>
      <div className="flex items-center py-2">
        <IndianRupeeIcon size={18} strokeWidth={2} />
        <h1 className="flex items-center gap-2 text-xl">
          {Number(122000).toLocaleString()} <span className="text-sm font-medium opacity-50">(Approx)</span>
        </h1>
      </div>
      <div className="hidden w-full gap-2 lg:flex">
        <Button variant="primary" className="flex w-1/2 gap-2 ">
          <span>
            <MailQuestionIcon strokeWidth={1.5} />
          </span>
          Inquire Product
        </Button>
        <Button variant="primary" className="flex w-1/2 gap-2 ">
          <span>
            <UserPlusIcon strokeWidth={1.5} />
          </span>
          Inquire Product
        </Button>
        <Button variant="primary" className="flex gap-2">
          <span>
            <HeartIcon strokeWidth={1.5} />
          </span>
        </Button>
      </div>
      <div className="grid w-full grid-cols-1 gap-4 py-4 lg:grid-cols-3">
        <ProductDetails title="Basic Information" points={productDetails} />
        <ProductDetails title="Stone Information" points={stoneDetails} />
        <ProductDetails title="Other Information" points={otherInformation} />
      </div>
      <div>
        <ProductFeatures />
      </div>
    </div>
  )
}

export default ProductInformation
