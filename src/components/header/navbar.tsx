import { useState } from 'react'
import EarRingsMenu from './desktop/ear-rings-menu'

const Navbar = () => {
  const [isEarRingsMenuOpen, setIsEarRingsMenuOpen] = useState(false)

  return (
    <nav className="relative hidden w-full justify-center space-x-8 border border-solid border-b-slate-200 border-t-yellow-600 py-2 lg:flex lg:px-60 xl:px-80">
      <div
        className="group"
        onMouseEnter={() => setIsEarRingsMenuOpen(true)}
        onMouseLeave={() => setIsEarRingsMenuOpen(false)}
      >
        <p className="mx-auto cursor-pointer text-sm opacity-70 transition-colors duration-300 hover:font-semibold hover:text-yellow-500">
          Ear Rings
        </p>
        {isEarRingsMenuOpen && (
          <div className="absolute left-0 top-full z-10 w-full bg-white p-2 transition-opacity duration-300">
            <EarRingsMenu />
          </div>
        )}
      </div>
      <div
        className="group"
        onMouseEnter={() => setIsEarRingsMenuOpen(true)}
        onMouseLeave={() => setIsEarRingsMenuOpen(false)}
      >
        <p className="mx-auto cursor-pointer text-sm opacity-70 transition-colors duration-300 hover:font-semibold hover:text-yellow-500">
          Pendants
        </p>
        {isEarRingsMenuOpen && (
          <div className="absolute left-0 top-full z-10 w-full bg-white p-2 transition-opacity duration-300">
            <EarRingsMenu />
          </div>
        )}
      </div>
      <div
        className="group"
        onMouseEnter={() => setIsEarRingsMenuOpen(true)}
        onMouseLeave={() => setIsEarRingsMenuOpen(false)}
      >
        <p className="mx-auto cursor-pointer text-sm opacity-70 transition-colors duration-300 hover:font-semibold hover:text-yellow-500">
          Rings
        </p>
        {isEarRingsMenuOpen && (
          <div className="absolute left-0 top-full z-10 w-full bg-white p-2 transition-opacity duration-300">
            <EarRingsMenu />
          </div>
        )}
      </div>
      <div
        className="group"
        onMouseEnter={() => setIsEarRingsMenuOpen(true)}
        onMouseLeave={() => setIsEarRingsMenuOpen(false)}
      >
        <p className="mx-auto cursor-pointer text-sm opacity-70 transition-colors duration-300 hover:font-semibold hover:text-yellow-500">
          Diamond Jewellery
        </p>
        {isEarRingsMenuOpen && (
          <div className="absolute left-0 top-full z-10 w-full bg-white p-2 transition-opacity duration-300">
            <EarRingsMenu />
          </div>
        )}
      </div>
      <div
        className="group"
        onMouseEnter={() => setIsEarRingsMenuOpen(true)}
        onMouseLeave={() => setIsEarRingsMenuOpen(false)}
      >
        <p className="mx-auto cursor-pointer text-sm opacity-70 transition-colors duration-300 hover:font-semibold hover:text-yellow-500">
          More Jewellery
        </p>
        {isEarRingsMenuOpen && (
          <div className="absolute left-0 top-full z-10 w-full bg-white p-2 transition-opacity duration-300">
            <EarRingsMenu />
          </div>
        )}
      </div>
      <div
        className="group"
        onMouseEnter={() => setIsEarRingsMenuOpen(true)}
        onMouseLeave={() => setIsEarRingsMenuOpen(false)}
      >
        <p className="mx-auto cursor-pointer text-sm opacity-70 transition-colors duration-300 hover:font-semibold hover:text-yellow-500">
          Gifting
        </p>
        {isEarRingsMenuOpen && (
          <div className="absolute left-0 top-full z-10 w-full bg-white p-2 transition-opacity duration-300">
            <EarRingsMenu />
          </div>
        )}
      </div>
      <div
        className="group"
        onMouseEnter={() => setIsEarRingsMenuOpen(true)}
        onMouseLeave={() => setIsEarRingsMenuOpen(false)}
      >
        <p className="mx-auto cursor-pointer text-sm opacity-70 transition-colors duration-300 hover:font-semibold hover:text-yellow-500">
          Wedding Collection
        </p>
        {isEarRingsMenuOpen && (
          <div className="absolute left-0 top-full z-10 w-full bg-white p-2 transition-opacity duration-300">
            <EarRingsMenu />
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
