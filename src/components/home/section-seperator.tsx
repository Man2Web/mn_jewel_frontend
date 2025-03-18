import { GemIcon } from 'lucide-react'

const SectionSeperator = ({ title, description }: { title: string; description: string }) => {
  return (
    <section>
      <div className="flex items-center justify-center space-x-4">
        <span className="block h-0.5 w-14 rounded-l-full bg-brandAccent-light" />
        <span className="text-brandAccent-light">
          {' '}
          <GemIcon strokeWidth={1.5} />
        </span>

        <span className="block h-0.5 w-14 rounded-r-full bg-brandAccent-light" />
      </div>
      <div className="py-2">
        <h1 className="flex justify-center font-serif text-xl capitalize tracking-wide lg:text-2xl">{title}</h1>
        <p className="flex justify-center py-2 text-center text-sm capitalize">{description}</p>
      </div>
    </section>
  )
}

export default SectionSeperator
