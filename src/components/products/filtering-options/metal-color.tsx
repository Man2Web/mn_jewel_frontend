import { useFormContext, UseFormRegister } from 'react-hook-form'
import { Checkbox } from 'src/components/ui/checkbox'
import { FormLabel } from 'src/components/ui/form'

const items = [
  {
    id: 'yellowGold',
    label: 'Yellow Gold',
  },
  {
    id: 'whiteGold',
    label: 'White Gold',
  },
  {
    id: 'roseGold',
    label: 'Rose Gold',
  },
] as const

interface FiltersMenuProps {
  register: UseFormRegister<ProductsFormInterface>
}

const MetalColor = ({ register }: FiltersMenuProps) => {
  const { setValue, getValues } = useFormContext<ProductsFormInterface>()

  const handleCheckboxChange = (id: string, checked: boolean) => {
    const currentValues = getValues('metalColor') || {}
    setValue('metalColor', { ...currentValues, [id]: checked })
  }

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className="flex flex-row items-start space-x-3 space-y-0">
          <Checkbox
            checked={getValues(`metalColor.${item.id}`) || false}
            onCheckedChange={(checked) => handleCheckboxChange(item.id, checked === true)}
          />
          <FormLabel className="text-sm font-normal">{item.label}</FormLabel>
        </div>
      ))}
    </div>
  )
}

export default MetalColor
