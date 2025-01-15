import { useFormContext, UseFormRegister } from 'react-hook-form'
import { Checkbox } from 'src/components/ui/checkbox'
import { FormLabel } from 'src/components/ui/form'

const items = [
  {
    id: 'wedding',
    label: 'Wedding',
  },
  {
    id: 'engagement',
    label: 'Engagement',
  },
  {
    id: 'anniversary',
    label: 'Anniversary',
  },
  {
    id: 'birthday',
    label: 'Birthday',
  },
  {
    id: 'festival',
    label: 'Festival',
  },
] as const

interface FiltersMenuProps {
  register: UseFormRegister<ProductsFormInterface>
}

const OcassionType = ({ register }: FiltersMenuProps) => {
  const { setValue, getValues } = useFormContext<ProductsFormInterface>()

  const handleCheckboxChange = (id: string, checked: boolean) => {
    const currentValues = getValues('ocassionType') || {}
    setValue('ocassionType', { ...currentValues, [id]: checked })
  }

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className="flex flex-row items-start space-x-3 space-y-0">
          <Checkbox
            checked={getValues(`ocassionType.${item.id}`) || false}
            onCheckedChange={(checked) => handleCheckboxChange(item.id, checked === true)}
          />
          <FormLabel className="text-sm font-normal">{item.label}</FormLabel>
        </div>
      ))}
    </div>
  )
}

export default OcassionType
