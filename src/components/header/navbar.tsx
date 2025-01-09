const Navbar = () => {
  return (
    <nav className="hidden w-full justify-center space-x-8 border border-solid border-b-slate-200 border-t-yellow-600 py-2 lg:flex lg:px-60 xl:px-80">
      <div>
        <p className="mx-auto cursor-pointer text-sm opacity-70 hover:font-semibold">Ear Rings</p>
      </div>
      <div>
        <p className="mx-auto cursor-pointer text-sm opacity-70 hover:font-semibold">Pendants</p>
      </div>
      <div>
        <p className="mx-auto cursor-pointer text-sm opacity-70 hover:font-semibold">Rings</p>
      </div>
      <div>
        <p className="mx-auto cursor-pointer text-sm opacity-70 hover:font-semibold">Diamond Jewellery</p>
      </div>
      <div>
        <p className="mx-auto cursor-pointer text-sm opacity-70 hover:font-semibold">More Jewellery</p>
      </div>
      <div>
        <p className="mx-auto cursor-pointer text-sm opacity-70 hover:font-semibold">Gifting</p>
      </div>
      <div>
        <p className="mx-auto cursor-pointer text-sm opacity-70 hover:font-semibold">Wedding Collection</p>
      </div>
    </nav>
  )
}

export default Navbar
