import { BadgeXIcon } from 'lucide-react'
import { Button } from 'src/components/ui/button'

const BookingFailureConfirmation = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 px-4">
      <BadgeXIcon color="#F87171" size={42} strokeWidth={1.2} />
      <h1 className="text-justify font-serif text-xl text-red-400 md:text-2xl">
        Unfortunatly there was some issue processing your order, Your order is Failed. Please try again.
      </h1>
      <div>
        <Button
          onClick={() => {
            window.location.href = '/cart'
          }}
          className="w-[200px]"
          variant="primary"
        >
          Try Again
        </Button>
      </div>
    </div>
  )
}

export default BookingFailureConfirmation
