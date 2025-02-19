const ImageEffect = ({
  image_source,
  image_alt_text,
  className,
}: {
  image_source: string
  image_alt_text: string
  className?: string
}) => {
  return (
    <div className={`overflow-hidden rounded-xl ${className}`}>
      <img
        src={image_source}
        alt={image_alt_text}
        className="h-full w-full transform object-cover duration-500 ease-in hover:scale-110"
      />
    </div>
  )
}

export default ImageEffect
