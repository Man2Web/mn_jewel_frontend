import { useFormContext } from 'react-hook-form'
import { Checkbox } from 'src/components/ui/checkbox'
import { FormLabel } from 'src/components/ui/form'
import { useGetSubCategory } from 'src/hooks/products-data/getProductsData'
import { ProductsFormInterface } from 'src/types/forms/products-form'

const SubCategoryType = () => {
  const { setValue, getValues } = useFormContext<ProductsFormInterface>()

  const handleCheckboxChange = (id: string, checked: boolean) => {
    const currentValues = getValues('subCategory') || {}
    setValue('subCategory', { ...currentValues, [id]: checked })
  }

  const [subCategoryData] = useGetSubCategory()
  return (
    <div>
      {subCategoryData.map((data, index) => (
        <div key={index} className="flex flex-row items-start space-x-3 space-y-0">
          <Checkbox
            checked={getValues(`subCategory.${data.name}`) || false}
            onCheckedChange={(checked) => handleCheckboxChange(data.name, checked === true)}
          />
          <FormLabel className="text-sm font-normal">{data.name}</FormLabel>
        </div>
      ))}
    </div>
  )
}

export default SubCategoryType
