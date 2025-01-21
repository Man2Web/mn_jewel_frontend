import { useFormContext } from 'react-hook-form'
import { Checkbox } from 'src/components/ui/checkbox'
import { FormLabel } from 'src/components/ui/form'
import { useGetMetal } from 'src/hooks/products-data/getProductsData'
import { ProductsFormInterface } from 'src/types/forms/products-form'

const MetalType = () => {
  const { setValue, getValues } = useFormContext<ProductsFormInterface>()

  const handleCheckboxChange = (id: string, checked: boolean) => {
    const currentValues = getValues('metalType') || {}
    setValue('metalType', { ...currentValues, [id]: checked })
  }
  const [metalData] = useGetMetal()
  return (
    <div>
      {metalData.map((data, index) => (
        <div key={index} className="flex flex-row items-start space-x-3 space-y-0">
          <Checkbox
            checked={getValues(`metalType.${data.material_type}`) || false}
            onCheckedChange={(checked) => handleCheckboxChange(data.material_type, checked === true)}
          />
          <FormLabel className="text-sm font-normal">{data.material_type}</FormLabel>
        </div>
      ))}
    </div>
  )
}

export default MetalType
