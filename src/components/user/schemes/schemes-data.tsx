import { ClockIcon, IndianRupeeIcon } from 'lucide-react'
import { Button } from 'src/components/ui/button'
import { useGetSchemes } from 'src/hooks/user/scheme'

const SchemesData = () => {
  const [schemes] = useGetSchemes()
  return (
    <div className="grid w-full grid-cols-1 gap-2 font-serif md:grid-cols-2 lg:mx-auto lg:grid-cols-3 lg:flex-row xl:grid-cols-4">
      {schemes?.map((data, index) => (
        <div key={index} className="flex w-full flex-col gap-2 rounded-lg border border-red-400 bg-red-50 p-2">
          <div className="flex items-center justify-between">
            <h1 className="font-serif text-xl text-red-400">{data.name}</h1>
            <img className="h-8 w-auto" src={data?.logo?.url} />
          </div>
          <div className="mt-4 flex flex-col gap-2 text-gray-600">
            <p>{data.planDescription}</p>
            <div>
              <div className="flex items-center">
                <ClockIcon size={14} />
                <span className="pl-1">{Number(data.planDuration)} Months</span>
              </div>
              <div className="flex items-center">
                <IndianRupeeIcon size={14} />
                <span className="pl-1">{Number(data.minAmount).toLocaleString()} /- Min Amount</span>
              </div>
            </div>
          </div>
          <div className="mx-auto">
            <Button
              onClick={() => {
                window.location.href = `/schemes/${data.documentId}`
              }}
              variant="primary"
              className="font-sans"
            >
              View Details
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SchemesData
