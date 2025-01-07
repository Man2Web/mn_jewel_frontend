const Navbar = () => {
  return (
    <nav className="flex w-full justify-center space-x-8 border border-solid border-b-slate-200 border-t-yellow-600 px-80 py-2">
      <div>
        <p className="cursor-pointer text-sm opacity-70 hover:font-semibold">Ear Rings</p>
      </div>
      <div>
        <p className="cursor-pointer text-sm opacity-70 hover:font-semibold">Pendants</p>
      </div>
      <div>
        <p className="cursor-pointer text-sm opacity-70 hover:font-semibold">Rings</p>
      </div>
      <div>
        <p className="cursor-pointer text-sm opacity-70 hover:font-semibold">Diamond Jewellery</p>
      </div>
      <div>
        <p className="cursor-pointer text-sm opacity-70 hover:font-semibold">More Jewellery</p>
      </div>
      <div>
        <p className="cursor-pointer text-sm opacity-70 hover:font-semibold">Gifting</p>
      </div>
      <div>
        <p className="cursor-pointer text-sm opacity-70 hover:font-semibold">Wedding Collection</p>
      </div>
    </nav>
  )
}

export default Navbar
