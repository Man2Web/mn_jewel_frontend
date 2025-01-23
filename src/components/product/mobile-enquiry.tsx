import { HeartIcon, MailQuestionIcon } from 'lucide-react'
import { Button } from '../ui/button'
import { Dialog, DialogTrigger } from '../ui/dialog'
import InquireProduct from './inquire-product'

const MobileEnquiry = ({ productId }: { productId: string | undefined }) => {
  return (
    <div className="fixed bottom-0 flex w-full gap-2 bg-white p-2 lg:hidden">
      <Dialog>
        <DialogTrigger className="flex w-5/6 gap-2">
          <Button variant="primary" className="w-full">
            <span>
              <MailQuestionIcon strokeWidth={1.5} />
            </span>
            Inquire Product
          </Button>
        </DialogTrigger>
        <div className="flex w-1/6 items-center justify-center rounded-lg border border-red-400 bg-red-50">
          <span className="text-red-400">
            <HeartIcon strokeWidth={1.5} />
          </span>
        </div>
        <InquireProduct productId={productId} />
      </Dialog>
    </div>
  )
}

export default MobileEnquiry
