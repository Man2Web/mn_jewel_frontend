import { ReactNode } from 'react'

const IconEffect = ({ children }: { children: ReactNode }) => {
  return (
    <span className="transition-colors delay-100 ease-in hover:text-brandColor active:text-brandColor">{children}</span>
  )
}

export default IconEffect
