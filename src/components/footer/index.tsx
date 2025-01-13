import { FacebookIcon } from 'lucide-react'
import { Button } from '../ui/button'

const Footer = () => {
  return (
    <footer className="bg-red-50">
      <div className="flex flex-col justify-between border border-x-0 border-red-400 px-6 py-8 lg:flex-row">
        <div>
          <h1 className="py-2 font-serif text-xl">About</h1>
          <div className="flex flex-col">
            <a className="mb-1 text-sm transition-all duration-300 hover:tracking-wide hover:text-red-400" href="#">
              About Us
            </a>
            <a className="mb-1 text-sm transition-all duration-300 hover:tracking-wide hover:text-red-400" href="#">
              FAQ
            </a>
          </div>
        </div>
        <div>
          <h1 className="py-2 font-serif text-xl">Media</h1>
          <div className="flex flex-col">
            <a className="mb-1 text-sm transition-all duration-300 hover:tracking-wide hover:text-red-400" href="#">
              Our Blogs
            </a>
            <a className="mb-1 text-sm transition-all duration-300 hover:tracking-wide hover:text-red-400" href="#">
              Video Campaign
            </a>
          </div>
        </div>
        <div>
          <h1 className="py-2 font-serif text-xl">Policies</h1>
          <div className="flex flex-col">
            <a className="mb-1 text-sm transition-all duration-300 hover:tracking-wide hover:text-red-400" href="#">
              Disclamer
            </a>
            <a className="mb-1 text-sm transition-all duration-300 hover:tracking-wide hover:text-red-400" href="#">
              Privacy Policy
            </a>
            <a className="mb-1 text-sm transition-all duration-300 hover:tracking-wide hover:text-red-400" href="#">
              Shopping Policy
            </a>
            <a className="mb-1 text-sm transition-all duration-300 hover:tracking-wide hover:text-red-400" href="#">
              Terms & Conditions
            </a>
            <a className="mb-1 text-sm transition-all duration-300 hover:tracking-wide hover:text-red-400" href="#">
              Return & Refund
            </a>
            <a className="mb-1 text-sm transition-all duration-300 hover:tracking-wide hover:text-red-400" href="#">
              Cancellation Policy
            </a>
            <a className="mb-1 text-sm transition-all duration-300 hover:tracking-wide hover:text-red-400" href="#">
              Exchange
            </a>
          </div>
        </div>
        <div>
          <h1 className="py-2 font-serif text-xl">Quick Links</h1>
          <div className="flex flex-col">
            <a className="mb-1 text-sm transition-all duration-300 hover:tracking-wide hover:text-red-400" href="#">
              Track My Order
            </a>
            <a className="mb-1 text-sm transition-all duration-300 hover:tracking-wide hover:text-red-400" href="#">
              Advance Booking
            </a>
          </div>
        </div>
        <div>
          <h1 className="py-2 font-serif text-xl">Help Desk</h1>
          <div className="flex flex-col">
            <a
              className="mb-1 text-sm transition-all duration-300 hover:tracking-wide hover:text-red-400"
              href="tel:918790098098"
            >
              Ph: +91 080 25127900
            </a>
            <a className="mb-1 text-sm transition-all duration-300 hover:tracking-wide hover:text-red-400" href="#">
              (Mon To Saturday 10Am-7Pm)
            </a>
            <a
              className="mb-1 text-sm transition-all duration-300 hover:tracking-wide hover:text-red-400"
              href="emailto:random@random.com"
            >
              General: <span className="text-red-400">care@joyalukkas.com</span>
            </a>
            <a
              className="mb-1 text-sm transition-all duration-300 hover:tracking-wide hover:text-red-400"
              href="emailto:random@random.com"
            >
              Corporate: <span className="text-red-400">care@joyalukkas.com</span>
            </a>
            <div className="flex gap-2 py-2">
              <Button variant="primary">Cotact Us</Button>
              <Button variant="primary">Store Locator</Button>
            </div>
            <div className="flex gap-2">
              <a
                href="#"
                className="rounded-full bg-red-400 p-2 text-white transition-colors delay-100 ease-in hover:bg-red-500"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                className="rounded-full bg-red-400 p-2 text-white transition-colors delay-100 ease-in hover:bg-red-500"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                className="rounded-full bg-red-400 p-2 text-white transition-colors delay-100 ease-in hover:bg-red-500"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
