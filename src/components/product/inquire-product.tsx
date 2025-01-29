import { useForm } from 'react-hook-form'
import { Button } from '../ui/button'
import { DialogContent } from '../ui/dialog'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'
import { ProductEnquiryFormInterface, ProductEnquiryFormInterfaceSchema } from 'src/types/forms/products-enquiry'
import submitEnquiry from 'src/hooks/form/product-enquiry-form'
import { zodResolver } from '@hookform/resolvers/zod'

const InquireProduct = ({ productId }: { productId: string | undefined }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductEnquiryFormInterface>({
    resolver: zodResolver(ProductEnquiryFormInterfaceSchema),
  })
  return (
    <DialogContent>
      <form
        onSubmit={handleSubmit((data) => submitEnquiry(data, productId).then(() => reset()))}
        className="flex flex-col gap-4"
      >
        <div>
          <Label>Name</Label>
          <Input {...register('name')} type="text" placeholder="John Doe" />
          <p className="text-sm text-red-400">{errors.name?.message}</p>
        </div>
        <div>
          <Label>Phone Number</Label>
          <div className="flex items-center gap-2">
            <Button className="flex h-full w-[125px] font-semibold" variant="outline">
              <img className="h-6 pr-2" src="\src\assets\icons\flag.png" /> +91
            </Button>
            <Input {...register('phone_number')} type="text" placeholder="8790988098" />
          </div>
          <p className="text-sm text-red-400">{errors.phone_number?.message}</p>
        </div>

        <div>
          <Label>Email</Label>
          <Input {...register('email')} type="email" placeholder="John@Doe.com" />
          <p className="text-sm text-red-400">{errors.email?.message}</p>
        </div>

        <div>
          <Label>Additional Message</Label>
          <Textarea {...register('additional_message')} placeholder="Can you customize this by my name?" />
          <p className="text-sm text-red-400">{errors.additional_message?.message}</p>
        </div>

        <Button variant="primary" className="w-full">
          Submit
        </Button>
      </form>
    </DialogContent>
  )
}

export default InquireProduct
