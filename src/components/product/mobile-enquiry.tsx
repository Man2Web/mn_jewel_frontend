import { HeartIcon, MailQuestionIcon } from 'lucide-react'
import { Button } from '../ui/button'

const MobileEnquiry = () => {
  return (
    <div className="fixed bottom-0 flex w-full gap-2 bg-white p-2 lg:hidden">
      <Button variant="primary" className="flex w-5/6 gap-2">
        <span>
          <MailQuestionIcon strokeWidth={1.5} />
        </span>
        Inquire Product
      </Button>
      <div className="flex w-1/6 items-center justify-center rounded-lg border border-red-400 bg-red-50">
        <span className="text-red-400">
          <HeartIcon strokeWidth={1.5} />
        </span>
      </div>
    </div>
  )
}

export default MobileEnquiry
