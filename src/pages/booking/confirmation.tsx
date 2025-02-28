import { BadgeCheckIcon } from 'lucide-react'
import { Button } from 'src/components/ui/button'

const BookingConfirmation = () => {
  return (
    <div className="flex h-96 flex-col items-center justify-center gap-4 px-4 md:h-screen">
      <BadgeCheckIcon color="#F87171" size={42} strokeWidth={1.2} />
      <h1 className="text-justify font-serif text-xl text-red-400 md:text-2xl">
        Thank you for shopping with us! Your order is confirmed. Our team will contact you soon. In the meantime, feel
        free to browse more products.
      </h1>
      <div>
        <Button
          onClick={() => {
            window.location.href = '/products'
          }}
          className="w-[200px]"
          variant="primary"
        >
          Shop Now
        </Button>
      </div>
    </div>
  )
}

export default BookingConfirmation
