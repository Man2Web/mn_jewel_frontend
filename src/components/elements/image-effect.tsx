const ImageEffect = ({ image_source, image_alt_text }: { image_source: string; image_alt_text: string }) => {
  return (
    <div className="overflow-hidden rounded-xl">
      <img src={image_source} alt={image_alt_text} className="transform duration-500 ease-in hover:scale-110" />
    </div>
  )
}

export default ImageEffect
