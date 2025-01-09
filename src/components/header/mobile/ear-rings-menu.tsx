import { ChevronLeft, ChevronRight } from 'lucide-react'
import { earRingsData, metalsData, priceData } from 'src/data/components/header'

const EarRingsMenu = ({ setIsEarMenuOpen }: { setIsEarMenuOpen: (data: boolean) => void }) => {
  return (
    <section className="absolute top-0 z-20 h-full w-full overflow-y-scroll bg-white">
      <div onClick={() => setIsEarMenuOpen(false)} className="flex items-center border border-b-yellow-500 px-2 py-4">
        <ChevronLeft strokeWidth={2} />
        <p className="text-sm font-medium">Ear Rings</p>
      </div>
      <div className="p-4">
        <img
          src="https://img.freepik.com/premium-photo/surreal-3d-landscape-gold-earrings-wooden-surface_899449-202289.jpg"
          alt="banner img"
          className="max-h-[150px] min-h-[150px] w-full"
        />
        <a href="#" className="flex items-center justify-between border border-x-0 border-b-yellow-500 py-2">
          <p className="text-sm">Shop all Ear Rings</p>
          <ChevronRight size={18} strokeWidth={2.5} color="#ecc94b" />
        </a>
      </div>
      <div className="px-4">
        <p className="text-sm">Shop By Style</p>
        <div className="mt-2 grid grid-cols-3 gap-2 border border-x-0 border-b-yellow-500 pb-2">
          {earRingsData.map((earRing, index) => (
            <a
              href={earRing.link}
              className="flex min-h-[50px] min-w-[50px] flex-col items-center gap-2 rounded-sm border border-red-400 px-4 py-2"
              key={index}
            >
              <img className="h-full w-full" src={earRing.img} alt={earRing.name} />
              <p className="text-sm">{earRing.name}</p>
            </a>
          ))}
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm">Shop By Price</p>
        <div className="mt-2 grid grid-cols-3 gap-2 border border-x-0 border-b-yellow-500 pb-2">
          {priceData.map((price, index) => (
            <a
              key={index}
              href={price.link}
              className="mx-auto w-full rounded-sm border border-red-400 bg-red-50 p-1 text-sm"
            >
              {price.name}
            </a>
          ))}
        </div>
      </div>
      <div className="px-4">
        <p className="text-sm">Shop By Metal & Stone</p>
        <div className="mt-2 grid grid-cols-3 gap-2 border border-x-0 border-b-yellow-500 pb-2">
          {metalsData.map((metal, index) => (
            <a
              href={metal.link}
              className="flex min-h-[50px] min-w-[50px] flex-col items-center gap-2 rounded-sm border border-red-400 px-4 py-2"
              key={index}
            >
              <img className="h-full w-full" src={metal.img} alt={metal.name} />
              <p className="text-sm">{metal.name}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EarRingsMenu
