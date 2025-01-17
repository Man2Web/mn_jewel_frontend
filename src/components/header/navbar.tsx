import { useState } from 'react'
import EarRingsMenu from './desktop/ear-rings-menu'

const Navbar = () => {
  const [isEarRingsMenuOpen, setIsEarRingsMenuOpen] = useState(false)
  const [isPendantMenuOpen, setIsPendantMenuOpen] = useState(false)
  return (
    <nav className="relative hidden w-full justify-center gap-4 border border-solid border-b-slate-200 border-t-yellow-600 py-2 lg:flex lg:px-32 xl:px-60">
      <div
        className="group relative"
        onMouseEnter={() => setIsEarRingsMenuOpen(true)}
        onMouseLeave={() => setIsEarRingsMenuOpen(false)}
      >
        <p className="mx-auto cursor-pointer text-sm opacity-70 transition-colors duration-300 hover:font-semibold hover:text-yellow-500">
          Ear Rings
        </p>
      </div>
      <div
        className="group relative"
        onMouseEnter={() => setIsEarRingsMenuOpen(true)}
        onMouseLeave={() => setIsEarRingsMenuOpen(false)}
      >
        <p className="mx-auto cursor-pointer text-sm opacity-70 transition-colors duration-300 hover:font-semibold hover:text-yellow-500">
          Ear Rings
        </p>
      </div>
      <div
        className="group relative"
        onMouseEnter={() => setIsEarRingsMenuOpen(true)}
        onMouseLeave={() => setIsEarRingsMenuOpen(false)}
      >
        <p className="mx-auto cursor-pointer text-sm opacity-70 transition-colors duration-300 hover:font-semibold hover:text-yellow-500">
          Ear Rings
        </p>
      </div>
      <div
        className="group relative"
        onMouseEnter={() => setIsEarRingsMenuOpen(true)}
        onMouseLeave={() => setIsEarRingsMenuOpen(false)}
      >
        <p className="mx-auto cursor-pointer text-sm opacity-70 transition-colors duration-300 hover:font-semibold hover:text-yellow-500">
          Ear Rings
        </p>
      </div>
      <div
        className="group relative"
        onMouseEnter={() => setIsEarRingsMenuOpen(true)}
        onMouseLeave={() => setIsEarRingsMenuOpen(false)}
      >
        <p className="mx-auto cursor-pointer text-sm opacity-70 transition-colors duration-300 hover:font-semibold hover:text-yellow-500">
          Ear Rings
        </p>
      </div>
      <div
        className="group relative"
        onMouseEnter={() => setIsEarRingsMenuOpen(true)}
        onMouseLeave={() => setIsEarRingsMenuOpen(false)}
      >
        <p className="mx-auto cursor-pointer text-sm opacity-70 transition-colors duration-300 hover:font-semibold hover:text-yellow-500">
          Ear Rings
        </p>
      </div>
      <div
        className="group relative"
        onMouseEnter={() => setIsEarRingsMenuOpen(true)}
        onMouseLeave={() => setIsEarRingsMenuOpen(false)}
      >
        <p className="mx-auto cursor-pointer text-sm opacity-70 transition-colors duration-300 hover:font-semibold hover:text-yellow-500">
          Ear Rings
        </p>
      </div>
      {isEarRingsMenuOpen && (
        <div className="absolute left-0 right-0 top-full z-10 w-full bg-white p-2 transition-opacity duration-300">
          <EarRingsMenu />
        </div>
      )}
    </nav>
  )
}

export default Navbar
