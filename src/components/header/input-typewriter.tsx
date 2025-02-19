import { useEffect, useState } from 'react'
import { Input } from '../ui/input'
import { Search } from 'lucide-react'

const useTypewriter = (items: string[], typeSpeed = 150, pauseTime = 2000) => {
  const [displayText, setDisplayText] = useState('')
  const [charIndex, setCharIndex] = useState(0)
  const [itemIndex, setItemIndex] = useState(0)

  useEffect(() => {
    const currentItem = items[itemIndex]
    if (charIndex < currentItem.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + currentItem.charAt(charIndex))
        setCharIndex(charIndex + 1)
      }, typeSpeed)
      return () => clearTimeout(timeout)
    } else {
      const pauseTimeout = setTimeout(() => {
        setDisplayText('')
        setCharIndex(0)
        setItemIndex((prev) => (prev + 1) % items.length)
      }, pauseTime)
      return () => clearTimeout(pauseTimeout)
    }
  }, [charIndex, itemIndex, items, typeSpeed, pauseTime])

  return displayText
}

const InputTypeWriter = () => {
  const placeholderText = useTypewriter(['Gold Ring', 'Gold Pendant', 'Diamond Necklace'])
  const [product_Name, setProduct_Name] = useState('')

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        window.location.href = `/products?productName=${product_Name}`
      }}
      className="relative mx-auto flex w-full items-center"
    >
      <Input
        onChange={(e) => setProduct_Name(e.target.value)}
        type="text"
        placeholder={`Search for ${placeholderText}`}
        className="w-full"
      />
      <Search
        onClick={() => {
          window.location.href = `products?productName=${product_Name}`
        }}
        className="absolute right-2 opacity-20"
      />
    </form>
  )
}

export default InputTypeWriter
