import { BadgeCheckIcon, HeartHandshakeIcon, Repeat2Icon, Undo2Icon } from 'lucide-react'

const ProductFeatures = () => {
  return (
    <section>
      <div className="grid grid-cols-2 grid-rows-2 gap-4 lg:grid-cols-4 lg:grid-rows-1">
        <div className="flex items-center gap-2 rounded-lg border border-brandColor  bg-brandSecondary p-4 ">
          <span className="text-xl text-brandColor">
            <Repeat2Icon size={30} strokeWidth={1.2} />
          </span>
          <div>
            <h1 className="text-sm">Easy Exchange</h1>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-lg border border-brandColor  bg-brandSecondary p-4 ">
          <span className="text-xl text-brandColor">
            <BadgeCheckIcon size={30} strokeWidth={1.2} />
          </span>
          <div>
            <h1 className="text-sm">Certified Jewellery</h1>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-lg border border-brandColor  bg-brandSecondary p-4 ">
          <span className="text-xl text-brandColor">
            <HeartHandshakeIcon size={30} strokeWidth={1.2} />
          </span>
          <div>
            <h1 className="text-sm">Lifetime Product Service</h1>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-lg border border-brandColor  bg-brandSecondary p-4 ">
          <span className="text-xl text-brandColor">
            <Undo2Icon size={30} strokeWidth={1.2} />
          </span>
          <div>
            <h1 className="text-sm">14 Days Return</h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductFeatures
