import { BadgeCheckIcon, HeartHandshakeIcon, Repeat2Icon, TruckIcon, Undo2Icon } from 'lucide-react'
import SectionSeperator from './section-seperator'

const Features = () => {
  return (
    <section className="bg-red-50 px-6 py-8">
      <SectionSeperator
        title="Quality First Service"
        description="We assure that you will always get the best quality what you have dreamt off.!"
      />
      <div className="grid grid-cols-2 grid-rows-2 lg:grid-cols-5 lg:grid-rows-1">
        <div className="flex flex-col items-center border border-l-0 border-t-0 border-red-400 p-4 lg:border-b-0">
          <span className="text-xl text-red-400">
            <TruckIcon />
          </span>
          <h1 className="font-medium">Free Shipping</h1>
          <p className="text-xs">Get 100% Free Shipping</p>
        </div>
        <div className="flex flex-col items-center border border-r-0 border-t-0 border-red-400 p-4 lg:border-b-0 lg:border-r-2">
          <span className="text-xl text-red-400">
            <Repeat2Icon />
          </span>
          <h1 className="font-medium">Easy Exchange</h1>
          <p className="text-xs">Exchange your old designs anytime</p>
        </div>
        <div className="flex flex-col items-center border border-b-0 border-l-0 border-red-400 p-4 lg:border-t-0">
          <span className="text-xl text-red-400">
            <BadgeCheckIcon />
          </span>
          <h1 className="font-medium">Certified Jewellery</h1>
          <p className="text-xs">100% Certified Jewellery</p>
        </div>
        <div className="flex flex-col items-center border border-b-0 border-r-0 border-red-400 p-4 lg:border-r-2 lg:border-t-0">
          <span className="text-xl text-red-400">
            <HeartHandshakeIcon />
          </span>
          <h1 className="font-medium">Lifetime Product Service</h1>
          <p className="text-xs">Keep your jewellery in top shape</p>
        </div>
        <div className="col-span-2 flex flex-col items-center p-4 lg:col-span-1">
          <span className="text-xl text-red-400">
            <Undo2Icon />
          </span>
          <h1 className="font-medium">14 Days Return</h1>
          <p className="text-xs">14 Days Hassle-Free Returns</p>
        </div>
      </div>
    </section>
  )
}

export default Features
