import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from 'src/components/ui/button'
import { Input } from 'src/components/ui/input'
import { Label } from 'src/components/ui/label'
import { Textarea } from 'src/components/ui/textarea'
import { useGetUserData } from 'src/hooks/user/user'
import { OrderForm } from 'src/types/forms/order-form'

interface AddressCollectionFormProps {
  methods: ReturnType<typeof useForm<OrderForm>>
}

const AddressCollectionForm = ({ methods }: AddressCollectionFormProps) => {
  const { userData } = useGetUserData()
  const {
    register,
    setValue,
    formState: { errors },
  } = methods

  useEffect(() => {
    if (userData) {
      setValue('email', userData?.email)
      setValue('phoneNumber', userData.username)
    }
  }, [userData])

  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:gap-2">
        <div className="w-full lg:w-1/2">
          <Label>Email</Label>
          <Input {...register('email')} type="email" placeholder="JohnDoe@gmail.com" />
          {errors.email && <p className="text-sm text-red-400">{errors.email.message}</p>}
        </div>
        <div className="w-full lg:w-1/2">
          <Label>Phone Number</Label>
          <div className="flex items-center gap-2">
            <Button className="flex h-full w-[125px] items-center font-semibold" variant="outline">
              <img className="h-6 pr-2" src="/assets/flag.png" alt="flag" /> +91
            </Button>
            <Input {...register('phoneNumber')} type="tel" placeholder="8780899897" />
          </div>
          {errors.phoneNumber && <p className="text-sm text-red-400">{errors.phoneNumber.message}</p>}
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <Label>Full Name</Label>
        <Input {...register('name')} type="text" placeholder="John Doe" />
        {errors.name && <p className="text-sm text-red-400">{errors.name.message}</p>}
      </div>
      <div>
        <Label>Address</Label>
        <Textarea {...register('address')} placeholder="Local Street 1st lane" />
        {errors.address && <p className="text-sm text-red-400">{errors.address.message}</p>}
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-2">
        <div className="w-full lg:w-1/2">
          <Label>City</Label>
          <Input {...register('city')} type="text" placeholder="Vellore" />
          {errors.city && <p className="text-sm text-red-400">{errors.city.message}</p>}
        </div>
        <div className="w-full lg:w-1/2">
          <Label>Pincode</Label>
          <Input {...register('pincode')} type="tel" placeholder="500012" />
          {errors.pincode && <p className="text-sm text-red-400">{errors.pincode.message}</p>}
        </div>
      </div>
    </div>
  )
}

export default AddressCollectionForm
