import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowDownToLineIcon, ArrowUpToLineIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from 'src/components/ui/button'
import { Input } from 'src/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from 'src/components/ui/select'
import { Tabs, TabsList, TabsTrigger } from 'src/components/ui/tabs'
import { useGetMaterialPrice } from 'src/hooks/data/getMaterialPrice'
import { digitalPurchaseCheckoutForm } from 'src/hooks/form/digitalPurchaseCheckoutForm'
import { useGetUserData } from 'src/hooks/user/user'
import { MaterialType } from 'src/types/components/product'
import { digitalOrderFormSchema, DigitalOrderInterface } from 'src/types/forms/digital-order'

const DigitalBuy = () => {
  const {
    handleSubmit,
    setValue,
    register,
    watch,
    formState: { errors },
  } = useForm<DigitalOrderInterface>({
    resolver: zodResolver(digitalOrderFormSchema),
  })
  const [userSelectedMaterial, setUserSelectedMaterial] = useState<MaterialType>()
  const [buy, setBuy] = useState(true)
  const [materialPrice] = useGetMaterialPrice()
  const digitalMaterials = materialPrice.filter((data) => data.digitalOrder === true)
  const { userData } = useGetUserData()
  const materialType = watch('materialType')

  useEffect(() => {
    const selectedMaterial = digitalMaterials.find((data) => data.documentId === materialType)
    if (selectedMaterial) {
      setUserSelectedMaterial(selectedMaterial)
    }
  }, [materialType])

  // Update amount when grams change
  const handleGramsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const gramsValue = parseFloat(e.target.value)
    setValue('grams', gramsValue, { shouldValidate: true })

    if (userSelectedMaterial) {
      const calculatedAmount = (gramsValue * userSelectedMaterial.price).toFixed(2)
      setValue('amount', Number(calculatedAmount), { shouldValidate: true })
    }
  }

  // Update grams when amount changes
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const amountValue = parseFloat(e.target.value)
    setValue('amount', amountValue, { shouldValidate: true })

    if (userSelectedMaterial) {
      const calculatedGrams = (amountValue / userSelectedMaterial.price).toFixed(3)
      setValue('grams', Number(calculatedGrams), { shouldValidate: true })
    }
  }

  return (
    <section className="">
      <div className="w-full">
        <div className="my-2">
          <h1 className="font-serif text-2xl ">Digital Invest</h1>
          <span className="block h-0.5 w-1/5 bg-red-400 md:w-[100px]" />
        </div>
      </div>
      <div className="my-4 w-full ">
        <Tabs defaultValue="account" className="">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger onClick={() => setBuy(true)} className={`gap-2`} value="account">
              <ArrowDownToLineIcon size={16} /> Buy
            </TabsTrigger>
            <TabsTrigger onClick={() => setBuy(false)} className={`gap-2`} value="password">
              <ArrowUpToLineIcon size={16} /> Withdraw
            </TabsTrigger>
          </TabsList>
        </Tabs>
        {buy ? (
          <form className="py-4" onSubmit={handleSubmit((data) => digitalPurchaseCheckoutForm(data, userData))}>
            {/* Material Type Selection */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Material Type</label>
              <Select onValueChange={(value) => setValue('materialType', value, { shouldValidate: true })}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select material type" />
                </SelectTrigger>
                <SelectContent>
                  {digitalMaterials.map((data, index) => (
                    <SelectItem key={index} value={data.documentId}>
                      {`${data.name} | ${data.price.toLocaleString()} per gm`}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.materialType && <p className="mt-2 text-sm text-red-400">{errors.materialType.message}</p>}
            </div>

            {/* Grams Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Grams</label>
              <Input
                min={0.001}
                step={0.001}
                {...register('grams', { valueAsNumber: true })}
                type="number"
                placeholder="Enter grams"
                onChange={handleGramsChange}
              />
              {errors.grams && <p className="mt-2 text-sm text-red-400">{errors.grams.message}</p>}
            </div>

            {/* Amount Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Amount</label>
              <Input
                min={250}
                step={0.01}
                {...register('amount', { valueAsNumber: true })}
                type="number"
                placeholder="Enter amount"
                onChange={handleAmountChange}
              />
              {errors.amount && <p className="mt-2 text-sm text-red-400">{errors.amount.message}</p>}
            </div>

            <Button type="submit" className="w-full" variant="primary">
              Buy Now
            </Button>
          </form>
        ) : (
          <div className="py-4 text-center">
            <h1 className="text-xl font-semibold text-gray-700">Withdrawals Unavailable</h1>
            <p className="mt-2 text-sm text-gray-500">
              Unfortunately, we only accept in-house withdrawals at the moment.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default DigitalBuy
