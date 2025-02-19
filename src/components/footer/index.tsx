import { FacebookIcon, InstagramIcon } from 'lucide-react'
import { Button } from '../ui/button'

const Footer = () => {
  return (
    <footer className="bg-red-50">
      <div className="flex flex-col justify-between border-t border-red-400 px-6 py-8 lg:flex-row">
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
          <h1 className="py-2 font-serif text-xl">Help Desk</h1>
          <div className="flex flex-col">
            <a
              className="mb-1 text-sm transition-all duration-300 hover:tracking-wide hover:text-red-400"
              href="tel:+918925872477"
            >
              Ph: +91 8925872477
            </a>
            <a className="mb-1 text-sm transition-all duration-300 hover:tracking-wide hover:text-red-400" href="#">
              (Mon To Saturday 10Am-7Pm)
            </a>
            <a
              className="mb-1 text-sm transition-all duration-300 hover:tracking-wide hover:text-red-400"
              href="mailto:mnjewelparkvellore@gmail.com"
            >
              General: <span className="text-red-400">mnjewelparkvellore@gmail.com</span>
            </a>
            <a
              className="mb-1 text-sm transition-all duration-300 hover:tracking-wide hover:text-red-400"
              href="mailto:mnjewelparkvellore@gmail.com"
            >
              Corporate: <span className="text-red-400">mnjewelparkvellore@gmail.com</span>
            </a>
            <div className="flex gap-2 py-2">
              <a href="tel:+918925872477">
                <Button variant="primary">Cotact Us</Button>
              </a>
              <a
                target="_blank"
                href="https://www.google.com/maps/place/MN+Jewel+Park/@12.906834,79.133984,13z/data=!4m6!3m5!1s0x3bad38e73a2806d3:0x27ddd4555ccdee12!8m2!3d12.9068336!4d79.133984!16s%2Fg%2F1thd07pl?hl=en&entry=ttu&g_ep=EgoyMDI1MDEwMS4wIKXMDSoASAFQAw%3D%3D"
                rel="noreferrer"
              >
                <Button variant="primary">Store Locator</Button>
              </a>
            </div>
            <div className="flex gap-2">
              <a
                target="_blank"
                href="https://www.facebook.com/mnjewelparkvellore/"
                className="rounded-full bg-red-400 p-2 text-white transition-colors delay-100 ease-in hover:bg-red-500"
                rel="noreferrer"
              >
                <FacebookIcon />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/mn_jewelpark/"
                className="rounded-full bg-red-400 p-2 text-white transition-colors delay-100 ease-in hover:bg-red-500"
                rel="noreferrer"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
