import { ShoppingBagIcon } from 'lucide-react'
import { Button } from 'src/components/ui/button'

const NoDataAvailable = ({ title }: { title: string }) => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <ShoppingBagIcon color="#F87171" size={42} strokeWidth={1} />
      <h1 className="font-serif text-2xl text-red-400">{title}</h1>
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

export default NoDataAvailable
