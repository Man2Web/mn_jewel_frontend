import { UseFormRegister } from 'react-hook-form'
import { Input } from 'src/components/ui/input'
import { Label } from 'src/components/ui/label'
import { ProductsFormInterface } from 'src/types/forms/products-form'

interface FiltersMenuProps {
  register: UseFormRegister<ProductsFormInterface>
}

const PriceRange = ({ register }: FiltersMenuProps) => {
  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <div>
        <Label>Min Price</Label>
        <Input defaultValue={0} {...register('priceRange.minPrice')} />
      </div>
      <div>
        <Label>Max Price</Label>
        <Input {...register('priceRange.maxPrice')} />
      </div>
    </div>
  )
}

export default PriceRange
