import { useState } from 'react'
import EarRingsMenu from './desktop/ear-rings-menu'

const Navbar = () => {
  const [isEarRingsMenuOpen, setIsEarRingsMenuOpen] = useState(false)
  const [isPendantMenuOpen, setIsPendantMenuOpen] = useState(false)
  return (
    <nav className="relative hidden w-full justify-center space-x-8 border border-solid border-b-slate-200 border-t-yellow-600 py-2 lg:flex lg:px-60 xl:px-80">
      <div
        className="group relative"
        onMouseEnter={() => setIsEarRingsMenuOpen(true)}
        onMouseLeave={() => setIsEarRingsMenuOpen(false)}
      >
        <p className="mx-auto cursor-pointer text-sm opacity-70 transition-colors duration-300 hover:font-semibold hover:text-yellow-500">
          Ear Rings
        </p>
        {isEarRingsMenuOpen && (
          <div
            className="absolute left-0 top-full z-10 w-screen overflow-hidden bg-white p-2 transition-opacity duration-300"
            style={{ transform: 'translateX(-31%)', left: '0%' }}
          >
            <EarRingsMenu />
          </div>
        )}
      </div>

      <div
        className="group relative"
        onMouseEnter={() => setIsPendantMenuOpen(true)}
        onMouseLeave={() => setIsPendantMenuOpen(false)}
      >
        <p className="mx-auto cursor-pointer text-sm opacity-70 transition-colors duration-300 hover:font-semibold hover:text-yellow-500">
          Pendants
        </p>
        {isPendantMenuOpen && (
          <div
            className="absolute left-0 top-full z-10 w-screen overflow-hidden bg-white p-2 transition-opacity duration-300"
            style={{ transform: 'translateX(-35.5%)', left: '0%' }}
          >
            <EarRingsMenu />
          </div>
        )}
      </div>
      <div
        className="group relative"
        onMouseEnter={() => setIsEarRingsMenuOpen(true)}
        onMouseLeave={() => setIsEarRingsMenuOpen(false)}
      >
        <p className="mx-auto cursor-pointer text-sm opacity-70 transition-colors duration-300 hover:font-semibold hover:text-yellow-500">
          Rings
        </p>
        {false && (
          <div
            className="absolute left-0 top-full z-10 w-screen overflow-hidden bg-white p-2 transition-opacity duration-300"
            style={{ transform: 'translateX(-31%)', left: '0%' }}
          >
            <EarRingsMenu />
          </div>
        )}
      </div>
      <div
        className="group relative"
        onMouseEnter={() => setIsEarRingsMenuOpen(true)}
        onMouseLeave={() => setIsEarRingsMenuOpen(false)}
      >
        <p className="mx-auto cursor-pointer text-sm opacity-70 transition-colors duration-300 hover:font-semibold hover:text-yellow-500">
          Diamond Jewellery
        </p>
        {false && (
          <div
            className="absolute left-0 top-full z-10 w-screen overflow-hidden bg-white p-2 transition-opacity duration-300"
            style={{ transform: 'translateX(-31%)', left: '0%' }}
          >
            <EarRingsMenu />
          </div>
        )}
      </div>
      <div
        className="group relative"
        onMouseEnter={() => setIsEarRingsMenuOpen(true)}
        onMouseLeave={() => setIsEarRingsMenuOpen(false)}
      >
        <p className="mx-auto cursor-pointer text-sm opacity-70 transition-colors duration-300 hover:font-semibold hover:text-yellow-500">
          More Jewellery
        </p>
        {false && (
          <div
            className="absolute left-0 top-full z-10 w-screen overflow-hidden bg-white p-2 transition-opacity duration-300"
            style={{ transform: 'translateX(-31%)', left: '0%' }}
          >
            <EarRingsMenu />
          </div>
        )}
      </div>
      <div
        className="group relative"
        onMouseEnter={() => setIsEarRingsMenuOpen(true)}
        onMouseLeave={() => setIsEarRingsMenuOpen(false)}
      >
        <p className="mx-auto cursor-pointer text-sm opacity-70 transition-colors duration-300 hover:font-semibold hover:text-yellow-500">
          Gifting
        </p>
        {false && (
          <div
            className="absolute left-0 top-full z-10 w-screen overflow-hidden bg-white p-2 transition-opacity duration-300"
            style={{ transform: 'translateX(-31%)', left: '0%' }}
          >
            <EarRingsMenu />
          </div>
        )}
      </div>
      <div
        className="group relative"
        onMouseEnter={() => setIsEarRingsMenuOpen(true)}
        onMouseLeave={() => setIsEarRingsMenuOpen(false)}
      >
        <p className="mx-auto cursor-pointer text-sm opacity-70 transition-colors duration-300 hover:font-semibold hover:text-yellow-500">
          Wedding Collection
        </p>
        {false && (
          <div
            className="absolute left-0 top-full z-10 w-screen overflow-hidden bg-white p-2 transition-opacity duration-300"
            style={{ transform: 'translateX(-31%)', left: '0%' }}
          >
            <EarRingsMenu />
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
