import { ReactNode } from 'react'

const IconEffect = ({ children }: { children: ReactNode }) => {
  return <span className="transition-colors delay-100 ease-in hover:text-red-400 active:text-red-400">{children}</span>
}

export default IconEffect
