import { FacebookIcon, InstagramIcon } from 'lucide-react'
import SectionSeperator from 'src/components/home/section-seperator'
import { Button } from 'src/components/ui/button'

const ContactUs = () => {
  return (
    <div className="px-4 py-6">
      <SectionSeperator title="Contact Us" description="" />
      <div className="flex flex-col items-start gap-2 lg:flex-row">
        <div className="w-full lg:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0138070731746!2d79.13140371138071!3d12.906833587350082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad38e73a2806d3%3A0x27ddd4555ccdee12!2sMN%20Jewel%20Park!5e0!3m2!1sen!2sin!4v1740043330975!5m2!1sen!2sin"
            className="h-[500px] w-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="flex w-full flex-col gap-2 lg:w-1/2">
          <a
            className="mb-1 text-sm transition-all duration-300 hover:tracking-wide hover:text-red-400"
            href="tel:+918056736999"
          >
            Ph: +91 8056736999
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
            target="_blank"
            href="mailto:mnjewelparkvellore@gmail.com"
            rel="noreferrer"
          >
            Corporate: <span className="text-red-400">mnjewelparkvellore@gmail.com</span>
          </a>
          <a
            className="mb-1 w-full text-sm transition-all duration-300 hover:tracking-wide hover:text-red-400"
            href="https://www.google.com/maps/place/MN+Jewel+Park/@12.906834,79.133984,13z/data=!4m6!3m5!1s0x3bad38e73a2806d3:0x27ddd4555ccdee12!8m2!3d12.9068336!4d79.133984!16s%2Fg%2F1thd07pl?hl=en&entry=ttu&g_ep=EgoyMDI1MDEwMS4wIKXMDSoASAFQAw%3D%3D"
          >
            Address:
            <span className="text-red-400"> 21, 23, , ARNI ROAD, Velappadi, VELLORE, Vellore, Tamil Nadu, 632001</span>
          </a>
          <div className="flex gap-2 py-2">
            <a href="tel:+918056736999">
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
  )
}

export default ContactUs
