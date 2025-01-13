import { GemIcon } from 'lucide-react'

const SectionSeperator = ({ title, description }: { title: string; description: string }) => {
  return (
    <section>
      <div className="flex items-center justify-center space-x-4">
        <span className="block h-0.5 w-14 rounded-l-full bg-yellow-400" />
        <GemIcon strokeWidth={1.5} color="#FACC15" />
        <span className="block h-0.5 w-14 rounded-r-full bg-yellow-400" />
      </div>
      <div className="py-2">
        <h1 className="flex justify-center font-serif text-xl capitalize tracking-wide lg:text-2xl">{title}</h1>
        <p className="flex justify-center py-2 text-center text-sm capitalize">{description}</p>
      </div>
    </section>
  )
}

export default SectionSeperator
