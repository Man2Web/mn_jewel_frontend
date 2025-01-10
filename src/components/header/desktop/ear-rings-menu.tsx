import { earRingsData, metalsData, priceData } from 'src/data/components/header'

const EarRingsMenu = () => {
  return (
    <section className="flex h-auto gap-2">
      <div className="w-4/12 border border-y-0 border-l-0 border-r-slate-300 p-2">
        <p className="text-sm">Shop by Style</p>
        <span className="mt-2 block h-0.5 w-1/4 bg-red-400" />
        <div className="mt-2 grid grid-cols-2 gap-2">
          {earRingsData.map((earRing, index) => (
            <a
              href={earRing.link}
              className="flex max-h-[80px] min-h-[80px] min-w-[80px] max-w-[80px] items-center gap-2 rounded-sm  hover:text-red-400"
              key={index}
            >
              <img className="h-full w-full" src={earRing.img} alt={earRing.name} />
              <p className="text-sm">{earRing.name}</p>
            </a>
          ))}
        </div>
      </div>
      <div className="w-3/12 border border-y-0 border-l-0 border-r-slate-300 p-2">
        <p className="text-sm">Shop by Price</p>
        <span className="mt-2 block h-0.5 w-1/4 bg-red-400" />
        <div className="mt-2 grid grid-cols-1 gap-2">
          {priceData.map((price, index) => (
            <a
              key={index}
              href={price.link}
              className="mx-auto w-full p-1 text-sm hover:cursor-pointer hover:text-red-400"
            >
              {price.name}
            </a>
          ))}
        </div>
      </div>
      <div className="w-3/12 border border-y-0 border-l-0 border-r-slate-300 p-2">
        <p className="text-sm">Shop by Metal & Stone</p>
        <span className="mt-2 block h-0.5 w-1/4 bg-red-400" />
        <div className="mt-2 grid grid-cols-1 gap-2">
          {metalsData.map((metal, index) => (
            <a
              href={metal.link}
              className="flex items-center gap-2 p-1 hover:cursor-pointer hover:text-red-400"
              key={index}
            >
              <span className="rounded-full bg-red-400 p-1.5" />
              <p className="text-sm">{metal.name}</p>
            </a>
          ))}
        </div>
      </div>
      <div className="w-4/12 p-2">
        <a href="#" className="max-h-[300px] min-h-[300px] w-full ">
          <img
            src="https://media.istockphoto.com/id/954397602/photo/two-golden-sapphire-earrings-with-small-diamonds.jpg?s=612x612&w=0&k=20&c=QxkA9ZCAQHDicBpV8g5As_05tbPpaJqZoPvlfSTnQ78="
            alt="ear rings desktop banner"
            className="rounded-md"
          />
        </a>
      </div>
    </section>
  )
}

export default EarRingsMenu
