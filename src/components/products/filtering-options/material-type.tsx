import { useFormContext, UseFormRegister } from 'react-hook-form'
import { Checkbox } from 'src/components/ui/checkbox'
import { FormLabel } from 'src/components/ui/form'

const items = [
  {
    id: 'gold',
    label: 'Gold',
  },
  {
    id: 'silver',
    label: 'Silver',
  },
  {
    id: 'diamond',
    label: 'Diamond',
  },
] as const

interface FiltersMenuProps {
  register: UseFormRegister<ProductsFormInterface>
}

const MaterialType = ({ register }: FiltersMenuProps) => {
  const { setValue, getValues } = useFormContext<ProductsFormInterface>()

  const handleCheckboxChange = (id: string, checked: boolean) => {
    const currentValues = getValues('materialType') || {}
    setValue('materialType', { ...currentValues, [id]: checked })
  }

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className="flex flex-row items-start space-x-3 space-y-0">
          <Checkbox
            checked={getValues(`materialType.${item.id}`) || false}
            onCheckedChange={(checked) => handleCheckboxChange(item.id, checked === true)}
          />
          <FormLabel className="text-sm font-normal">{item.label}</FormLabel>
        </div>
      ))}
    </div>
  )
}

export default MaterialType
