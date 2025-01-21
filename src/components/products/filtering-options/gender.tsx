import { useFormContext } from 'react-hook-form'
import { Checkbox } from 'src/components/ui/checkbox'
import { FormLabel } from 'src/components/ui/form'
import { ProductsFormInterface } from 'src/types/forms/products-form'

const items = [
  {
    label: 'Men',
  },
  {
    label: 'Women',
  },
  {
    label: 'Girl',
  },
  {
    label: 'Boy',
  },
] as const

const Gender = () => {
  const { setValue, getValues } = useFormContext<ProductsFormInterface>()

  const handleCheckboxChange = (id: string, checked: boolean) => {
    const currentValues = getValues('gender') || {}
    setValue('gender', { ...currentValues, [id]: checked })
  }

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className="flex flex-row items-start space-x-3 space-y-0">
          <Checkbox
            checked={getValues(`gender.${item.label}`) || false}
            onCheckedChange={(checked) => handleCheckboxChange(item.label, checked === true)}
          />
          <FormLabel className="text-sm font-normal">{item.label}</FormLabel>
        </div>
      ))}
    </div>
  )
}

export default Gender
