import { useFormContext } from 'react-hook-form'
import { Checkbox } from 'src/components/ui/checkbox'
import { FormLabel } from 'src/components/ui/form'
import { useGetTags } from 'src/hooks/products-data/getProductsData'
import { ProductsFormInterface } from 'src/types/forms/products-form'

const OcassionType = () => {
  const { setValue, getValues } = useFormContext<ProductsFormInterface>()

  const handleCheckboxChange = (id: string, checked: boolean) => {
    const currentValues = getValues('ocassion') || {}
    setValue('ocassion', { ...currentValues, [id]: checked })
  }
  const [tagsData] = useGetTags()
  return (
    <div>
      {tagsData.map((data, index) => (
        <div key={index} className="flex flex-row items-start space-x-3 space-y-0">
          <Checkbox
            checked={getValues(`ocassion.${data.name}`) || false}
            onCheckedChange={(checked) => handleCheckboxChange(data.name, checked === true)}
          />
          <FormLabel className="text-sm font-normal">{data.name}</FormLabel>
        </div>
      ))}
    </div>
  )
}

export default OcassionType
