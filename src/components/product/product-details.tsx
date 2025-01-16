const ProductDetails = ({ title, points }: ProductDetailsType) => {
  return (
    <div className="flex flex-col rounded-lg border border-red-400 bg-red-50 p-2">
      <h1 className="text-lg">{title}</h1>
      <span className="mb-2 mt-1 h-0.5 w-full bg-red-400" />
      <div className="flex flex-col gap-2">
        {points.map((data, index) => (
          <div className="flex justify-between" key={index}>
            <p className="text-sm ">{data.key}</p>
            <p className="text-sm opacity-50">{data.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductDetails
