import { HammerIcon } from 'lucide-react'
import { Button } from '../ui/button'

const CommingSoon = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <HammerIcon color="#F87171" size={42} strokeWidth={1.2} />
      <h1 className="font-serif text-2xl text-red-400">
        Comming Soon, Meanwhile you can check our wide range of products...
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

export default CommingSoon
